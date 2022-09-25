const { series, parallel } = require('gulp');
const { copyImages, minCSS, minJS, minHTML } = require('./gulp/app');
const { server, updateBuild } = require('./gulp/server');

module.exports.default = series(
    copyImages,
    parallel(minHTML, minCSS, minJS),
    server,
    updateBuild
)