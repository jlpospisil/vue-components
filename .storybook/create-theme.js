import color from 'color-converter';

const createTheme = ({ mainBackground, mainTextColor, ...overrides } = {}) => {
  const mainBackgroundColor = mainBackground || '#cdcdcd';
  const mainFontColor = mainTextColor || '#000000';
  const lightBackground = color.fromCSS(mainBackgroundColor).lighten(10).css();
  const darkBackground = color.fromCSS(mainBackgroundColor).darken(10).css();
  const dimmedTextColor = color.fromCSS(mainFontColor).fade(-60).css();
  const mainBorderColor = color.fromCSS(mainBackgroundColor).darken(25).css();
  const inputFill = color.fromCSS(mainBackgroundColor).lighten(18).css();

  return {
    mainBackground: mainBackgroundColor,
    mainBorder: '1px solid rgba(0,0,0,0.1)',
    mainBorderColor,
    mainBorderRadius: 4,
    mainFill: lightBackground,
    barFill: darkBackground,
    inputFill,
    mainTextFace: null,
    mainTextColor: mainFontColor,
    mainTextSize: 13,
    dimmedTextColor,
    highlightColor: '#9fdaff',
    successColor: '#0edf62',
    failColor: '#ff3f3f',
    warnColor: 'orange',
    monoTextFace: null,
    layoutMargin: 10,
    overlayBackground: 'rgba(0,0,0,0.5)',
    brand: {
      background: darkBackground,
    },
    addonActionsTheme: {
      BASE_BACKGROUND_COLOR: 'transparent',
    },
    ...overrides,
  };
};

export default createTheme;
