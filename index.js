const colors = {
  black: '#1e1d1b',
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
}

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#ede0ce',
    backgroundColor: '#2b2a27',
    borderColor: '#2b2a27',
    cursorColor: 'rgba(248,28,229,0.6)',
    colors,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        left: 0;
        right: 0;
      }
      .tab_tab {
        border-left: 0;
        padding-left: 0;
      }
      .tab_tab:not(.tab_active) {
        background: ${colors.black};
      }
      .term_fit:not(.term_term) {
        opacity: 0.6;
        transition: opacity 0.1s cubic-bezier(.1, 0, .1, 1);
      }
      .term_fit.term_active {
        opacity: 1;
        will-change: opacity;
      }
    `
  })
}
