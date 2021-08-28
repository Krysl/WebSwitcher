interface externalsCSSCfgWithPatch {
  name: string;
  patch?: Record<string, string>;
}

type externalsCSSCfg = string | externalsCSSCfgWithPatch;

const backgroundPatch = {
  // 'background-color:#FFF': 'background-color: rgb(255 255 255 / 80%)',
  'background-color:#FFF': 'background-color: transparent',
};

export const externalsCSS: externalsCSSCfg[] = [
  {
    name: 'index',
    // patch: backgroundPatch,
  },
  'el-col',
  {
    name: 'el-slider',
    patch: {
      'color:#909399;margin-top:15px': 'color:#909399;margin-top:1px'
    }
  },
  'el-button',
  'el-button-group',
  'el-input',
  {
    name: 'el-collapse',
    patch: backgroundPatch,
  },
  'el-switch',
  'el-row',
  'el-divider',
  'el-main',
  'el-header',
  'el-container',
  'el-collapse-item',
  'el-message',
  'el-message-box',
  'el-notification',
];

export default externalsCSS;

export function includes(name: string): boolean {
  return (
    undefined !==
    externalsCSS.find((cfg) => {
      const _name = typeof cfg === 'string' ? cfg : cfg.name;
      return _name === name;
    })
  );
}

export function names(): string[] {
  return externalsCSS.map((cfg) => (typeof cfg === 'string' ? cfg : cfg.name));
}
