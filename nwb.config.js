module.exports = {
  type: 'react-component',
  build: {
    externals: {},
    global: '',
    jsNext: true,
    umd: false,
  },
	webpack: {
		compat: {
			enzyme: true
		}
	}
}
