var portal_dist = "./wwwroot/portal";
var portal_src = "./src/portal";



module.exports = {
    dist : portal_dist,
    src : portal_src,
    header: '/*!\n* <%= pkg.name %> - v <%= pkg.version %> \n* <%= pkg.description %> \n* Author :<%= pkg.author %>\n*/\n',
    sassOptions: {
        outputStyle: 'compressed'
    },
    fonts: [{
        output: `${portal_dist}/fonts/fa/`,
        input: [
            './node_modules/font-awesome/fonts/*',
        ]
    }, {
        output: `${portal_dist}/fonts/`,
        input: [`${portal_src}/fonts/**/*`]
    }],
    css: {
        src: [
            `${portal_src}/scss/**/*.scss`
        ],
        dist: `${portal_dist}/css/`,
        prefixerOptions: {
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        }
    },
    js: {
        dist: `${portal_dist}/js`,
        watch: `${portal_src}/js/**/*.js`,
        files: [ 
            {
                outputFileName: "script.js",
                es6: true,
                inputFiles: [
                    `${portal_src}/js/plugins/jquery.meanmenu.min.js`, 
                    `${portal_src}/js/scripts.js`
                ],
            },
            {
                outputFileName: "slider.js",
                es6: false,
                inputFiles: [
                    `${portal_src}/js/plugins/slick.js`, 
                    `${portal_src}/js/slider.js`
                ]
            },  {
                outputFileName: "counters.js",
                es6: false,
                inputFiles: [
                    `${portal_src}/js/plugins/jquery.waypoints.min.js`, 
                    `${portal_src}/js/plugins/jquery.counterup.min.js`, 
                    `${portal_src}/js/counter.js`
                ]
            },
            {
                outputFileName: "validation.js",
                es6: false,
                inputFiles: [
                    './node_modules/jquery-validation/dist/jquery.validate.min.js',
                    './node_modules/jquery-validation/dist/additional-methods.js',
                    `${portal_src}/js/validate.js`
                ]
            },  {
                outputFileName: "carousel.js",
                es6: false,
                inputFiles: [
                    `./node_modules/owl.carousel/dist/owl.carousel.js`,
                    `${portal_src}/js/carousel.js`
                ]
            },
            {
                outputFileName: "isotope.js",
                es6: false,
                inputFiles: [
                    `${portal_src}/js/plugins/isotope.pkgd.min.js`,
                    `${portal_src}/js/isotope.js`
                ]
            },
            {
                outputFileName: "input-tel.js",
                es6: false,
                inputFiles: [
                    `./node_modules/intl-tel-input/build/js/intlTelInput-jquery.min.js`,
                    `${portal_src}/js/input-tel.js`
                ]
            },
            {
                outputFileName: "magnific-popup.js",
                es6: false,
                inputFiles: [
                    './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
                    `${portal_src}/js/magnific.js`
                ],
            },
        ]
    },
}