interface ElternalsCSSCfgWithPatch {
  name: string;
  patch?: Record<string, string>;
}

type ElternalsCSSCfg = string | ElternalsCSSCfgWithPatch;

const backgroundPatch = {
  // 'background-color:#FFF': 'background-color: rgb(255 255 255 / 80%)',
  'background-color:#FFF': 'background-color: transparent',
};

export const elternalsCSS: ElternalsCSSCfg[] = [
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
];

export default elternalsCSS;

export function includes(name: string): boolean {
  return (
    undefined !==
    elternalsCSS.find((cfg) => {
      const _name = typeof cfg === 'string' ? cfg : cfg.name;
      return _name === name;
    })
  );
}

export function names(): string[] {
  return elternalsCSS.map((cfg) => (typeof cfg === 'string' ? cfg : cfg.name));
}
