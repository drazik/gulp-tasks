'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*eslint-env node */

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpSass = require('gulp-sass');

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _gulpPostcss = require('gulp-postcss');

var _gulpPostcss2 = _interopRequireDefault(_gulpPostcss);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _postcssPxtorem = require('postcss-pxtorem');

var _postcssPxtorem2 = _interopRequireDefault(_postcssPxtorem);

var _cssnano = require('cssnano');

var _cssnano2 = _interopRequireDefault(_cssnano);

var _minimist2 = require('minimist');

var _minimist3 = _interopRequireDefault(_minimist2);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var cfg = _extends({}, _config2.default, params);

    var src = cfg.src;
    var dest = cfg.dest;
    var autoprefixerOptions = cfg.autoprefixerOptions;
    var pxToRemOptions = cfg.pxToRemOptions;

    var _minimist = (0, _minimist3.default)(process.argv.slice(2));

    var production = _minimist.production;


    var processors = [(0, _autoprefixer2.default)(autoprefixerOptions), (0, _postcssPxtorem2.default)(pxToRemOptions)];

    if (production) {
        processors.push((0, _cssnano2.default)(cssnanoOptions));
    }

    var task = function task() {
        return _gulp2.default.src(src).pipe(production ? _gulpUtil2.default.noop() : _gulpSourcemaps2.default.init()).pipe((0, _gulpSass2.default)({
            outputStyle: 'nested'
        }).on('error', _gulpSass2.default.logError)).pipe((0, _gulpPostcss2.default)(processors)).pipe(production ? _gulpUtil2.default.noop() : _gulpSourcemaps2.default.write()).pipe(_gulp2.default.dest(dest));
    };

    task.displayName = 'styles';
    task.description = 'Compile Sass / add prefixes to generated CSS';

    return task;
};

exports.default = styles;
exports.styles = styles;