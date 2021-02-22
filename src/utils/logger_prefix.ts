import { LoggingMethod, LogLevelNumbers, Logger } from 'loglevel';

interface LoggerPrefixConfig {
  template?: string;
  levelFormatter?: (level: string | undefined) => string;
  nameFormatter?: (name: string | symbol | undefined) => string | undefined;
  timestampFormatter?: (date: Date) => string;
  format?: (
    level: string,
    name: string | symbol | undefined,
    timestamp: string
  ) => string[] | string | undefined;
}
// interface IPrototype {
//   // eslint-disable-next-line
//   prototype: any;
// }
function merge(target: LoggerPrefixConfig, ...sources: LoggerPrefixConfig[]) {
  for (let i = 0; i < sources.length; i++) {
    for (const key in sources[i]) {
      if (Object.prototype.hasOwnProperty.call(sources[i], key)) {
        // target[key] = sources[i][key];
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(sources[i], key) ||
            Object.create(null)
        );
      }
    }
  }
  return target;
}

const defaultConfig: LoggerPrefixConfig = {
  template: '[%t] %l:',
  levelFormatter: function (level) {
    return (level || 'debug').toUpperCase();
  },
  nameFormatter: function (
    name: string | symbol | undefined
  ): string | undefined {
    if (typeof name === 'string') {
      return name;
    } else if (typeof name === 'symbol') {
      return name.description;
    }
    return 'root';
  },
  timestampFormatter: function (date) {
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
  },
  format: undefined,
};

const configs = new Map<string | symbol, LoggerPrefixConfig>();

declare module 'loglevel' {
  interface Logger {
    name?: string | symbol;
  }
}
export function apply(logger: Logger, config: LoggerPrefixConfig): Logger {
  /* eslint-disable vars-on-top */
  const originalFactory = logger.methodFactory;

  let name: string | symbol = '';
  // if ('name' in logger) {
  if (Object.prototype.hasOwnProperty.call(logger, 'name')) {
    const _name = logger.name;
    if (_name) name = _name;
    else name = '';
  }
  // const name = (logger as LoggerName).name || '';
  const parent = configs.get(name) || configs.get('') || defaultConfig;
  /* eslint-enable vars-on-top */

  function methodFactory(
    methodName: string,
    logLevel: LogLevelNumbers,
    loggerName: string | symbol
  ): LoggingMethod {
    const originalMethod = originalFactory(methodName, logLevel, loggerName);
    const options = configs.get(loggerName) || configs.get('');

    const hasTimestamp = options?.template?.indexOf('%t') !== -1;
    const hasLevel = options?.template?.indexOf('%l') !== -1;
    const hasName = options?.template?.indexOf('%n') !== -1;

    return (...args: unknown[]) => {
      let content: Array<string> = [];

      // skip the root method for child loggers to prevent duplicate logic
      if (
        (name || !configs.get(loggerName)) &&
        !(options === null || options === undefined)
      ) {
        /* eslint-disable vars-on-top */
        const timestamp = options.timestampFormatter?.(new Date()) || '';
        const level = options.levelFormatter?.(methodName) || 'debug';
        const lname =
          options.nameFormatter?.(
            typeof loggerName === 'string' ? loggerName : loggerName.description
          ) || '';
        /* eslint-enable vars-on-top */

        if (options.format) {
          const formats = options.format(level, lname, timestamp);
          if (formats) {
            if (Array.isArray(formats)) {
              content.push(...formats);
            } else {
              content.push(formats);
            }
          }
        } else {
          if (options.template) {
            content.push(options.template);
          }
          if (hasTimestamp) {
            content = content.map((v) => v.replace(/%t/, timestamp));
          }
          if (hasLevel) content = content.map((v) => v.replace(/%l/, level));
          if (hasName) content = content.map((v) => v.replace(/%n/, lname));
        }

        args.unshift(...content);
      }

      originalMethod(...args);
    };
  }

  if (!configs.get(name)) {
    logger.methodFactory = methodFactory;
  }

  // for remove inherited format option if template option preset
  config = config || {};
  if (config.template) config.format = undefined;

  configs.set(name, merge({}, parent, config));

  logger.setLevel(logger.getLevel());

  // if (!loglevel) {
  //   logger.warn(
  //     'It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md'
  //   );
  // }

  return logger;
}
