exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#ede0ce',
    backgroundColor: '#2b2a27',
    borderColor: '#2b2a27',
    cursorColor: 'rgba(248,28,229,0.6)',
    colors: {
      black: '#161a1f',
      red: '#dc322f',
      green: '#859900',
      yellow: '#b58900',
      blue: '#268bd2',
      magenta: '#d33682',
      cyan: '#2aa198',
      white: '#ffffff',
      lightBlack: '#7a7267',
      lightRed: '#ff7c6c',
      lightGreen: '#bcd42a',
      lightYellow: '#e6db74',
      lightBlue: '#26a6a6',
      lightMagenta: '#ffa47c',
      lightCyan: '#bcd42a',
      lightWhite: '#f8f8f0',
    },
    // TODO: Don't have any useful CSS now, but there will be once I tweak it some more.
    css: `
      ${config.css || ''}
    `
  })
}
