const { src, dest,series,parallel } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
var terser = require('gulp-terser');
const imagemin =require('gulp-imagemin');
const processhtml = require('gulp-processhtml')
function htmlTask(){
    return src("./*.html")
    .pipe(htmlmin({collapseWhitespace:true,ignoreCustomComments:true,removeComments:true}))
    .pipe(dest("dist"))
}

function cssTask(){
    return src("./sass/*.css")
    .pipe(cleanCSS())
    .pipe(dest("dist"))
}
function jsTask(){
    return src("./js/*.js")
    .pipe(terser())
    .pipe(dest("dist"))
}
function imgTask(){
    return src("./imgs/*")
    .pipe(imagemin())
    .pipe(dest("dist/images"))
}
 function htmlPaths() {
    return    src('./*.html')
               .pipe(processhtml())
               .pipe(dest('dist'));
};

exports.default=parallel(htmlTask,cssTask,jsTask,imgTask,htmlPaths)