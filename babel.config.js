module.exports = function (api) {
  const isTest = api.env('test')
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
        targets: {node: 'current'},
      },
    ],
  ]

  const plugins = ['@babel/plugin-transform-runtime']

  return {
    presets,
    plugins,
  }
}
