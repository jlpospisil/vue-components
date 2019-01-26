/* This is the authority on all theme related items.
 *  These items can be imported and used directly in the js files.
 *  They are also loaded into sass variables for use there.
 */

// TODO: update theme-sass-loader.js to work with rgb and rgba colors
//    as well as sass functions like lighten, darken, etc.
//    Then add remaining theme items and import in _variables.scss

module.exports = {
  // Application colors
  colors: {
    primary: '#007bff',
    primaryDark: '#ff0000',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
  },
  // Application base font
  font: {
    color: '#5e5e5e',
  },
  // Application content
  content: {
    padding: '25px',
  },
  // Application top navigation
  topNav: {
    height: '58px',
    backgroundColor: '#fcfcfc',
    font: {
      color: '#607d8b',
      activeColor: '#ff8a65',
    },
  },
  // Application side navigation
  sideNav: {
    width: '250px',
    backgroundColor: '',
    font: {
      color: '#ffffff',
      size: '15px',
    },
    transition: {
      duration: '0.5s',
      method: 'ease-in-out',
    },
  },
};
