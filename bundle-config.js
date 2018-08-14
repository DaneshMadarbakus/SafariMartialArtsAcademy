//https://www.npmjs.com/package/gulp-bundle-assets
var lazypipe = require('lazypipe');
var babel = require('gulp-babel');

module.exports = {
  bundle: {
    scriptsBundleMain: {
      scripts: [
        './scripts/custom/demo.js'
      ],
      options: {
        rev: false, // {(boolean|string|Array)}
        transforms: {
          scripts: lazypipe().pipe(babel, {
            presets: ['env']
          })
        }
      }
    },
    scriptsBundleSecondary: {
      scripts: [
        './scripts/vendors/jquery-3.3.1.js',
        './scripts/vendors/popper.js',
        './scripts/vendors/bootstrap.js'
      ],
      options: {
        rev: false // {(boolean|string|Array)}
      }
    }
  }
};
