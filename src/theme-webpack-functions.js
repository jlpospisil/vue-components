const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);
const theme = require('./theme.js');

const hexToRGBA = (hex) => {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    return null;
  }

  let c = hex.substring(1).split('');

  if (c.length === 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }

  return Number(`0xff${c.join('')}`);
};

const convertStringToSassDimension = (result) => {
  // Only attempt to convert strings
  if (typeof result !== 'string') {
    return result;
  }

  const cssUnits = ['rem', 'em', 'vh', 'vw', 'vmin', 'vmax', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ch'];
  const parts = result.match(/[a-zA-Z]+|[0-9]+/g);
  const value = parts[0];
  const unit = parts[parts.length - 1];

  // If the string has a unit
  if (cssUnits.indexOf(unit) !== -1) {
    return new sassUtils.SassDimension(parseInt(value, 10), unit);
  }

  // Else if the string is a hex color string, make sure we return a sass color
  //    to avoid errors when using darken, lighten, etc.
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(result)) {
    const rgba = hexToRGBA(result);
    return sass.types.Color(rgba);
  }

  return result;
};

const getThemeItem = (keys) => {
  const themeItemValue = keys.getValue().split('.').reduce((object, item) => object[item] || {}, theme);
  let returnValue = null;

  if (themeItemValue) {
    if (typeof themeItemValue === 'string') {
      returnValue = convertStringToSassDimension(themeItemValue);
    } else if (typeof themeItemValue === 'object') {
      returnValue = Object.keys(themeItemValue).reduce((object, item) => ({
        ...object,
        [item]: convertStringToSassDimension(themeItemValue[item]),
      }), {});
    }
  }

  return sassUtils.castToSass(returnValue);
};

module.exports = getThemeItem;
