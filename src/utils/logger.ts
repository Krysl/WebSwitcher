import * as logLevel from 'loglevel';
import { LogLevelDesc } from 'loglevel';
import * as ansicolor from 'ansicolor';
import * as prefix from './logger_prefix';

const colors: Record<string, ansicolor.AnsicolorMethods> = {
  TRACE: ansicolor.magenta,
  DEBUG: ansicolor.cyan,
  INFO: ansicolor.blue,
  WARN: ansicolor.yellow,
  ERROR: ansicolor.red,
};

export const log = prefix.apply(logLevel.getLogger(Symbol('WebSwitcher')), {
  format(level: string, name: string | symbol | undefined, timestamp: string) {
    return ansicolor.parse(
      `${ansicolor.darkGray(`[${timestamp}]`)} ` +
        `${colors[level.toUpperCase()](level)} ` +
        `${ansicolor.green(
          `${
            typeof name === 'string'
              ? name
              : typeof name === 'symbol'
              ? name.description
              : ''
          }:`
        )}`
    ).asChromeConsoleLogArguments;
  },
});

export function setLevel(level: LogLevelDesc, persist?: boolean): void {
  console.debug(`log level => ${level}`);
  log.setLevel(level, persist);
}

export function debug(...msg: unknown[]): void {
  log.debug(...msg);
}
