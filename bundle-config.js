//https://www.npmjs.com/package/gulp-bundle-assets
var lazypipe = require('lazypipe');
var babel = require('gulp-babel');

module.exports = {
    bundle: {
        scriptsBundleMain: {
            scripts: [
                './Scripts/customs/demo.js'
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
                './Scripts/vendors/jquery-3.1.1.min.js',
                './Scripts/vendors/popper.js',
                './Scripts/vendors/bootstrap.js',
                './Scripts/vendors/owl.carousel.js',
            ],
            options: {
                rev: false // {(boolean|string|Array)}
            }
        },
    },
};
