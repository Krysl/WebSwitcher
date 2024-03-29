module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: false,
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  plugins: [
    "@vue/babel-plugin-jsx",
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          name = name.slice(3)
          return `element-plus/lib/components/${name}/style/css`;
        },
      },
    ],
  ]
}
