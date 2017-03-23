const gulp = require('gulp');//自动化构建工具
// const gulpOpen = require('gulp-open');//open浏览器，但browser-sync已经有了浏览器open的功能
const del = require('del');//删除文件
const browserSync = require('browser-sync');//浏览器同步修改，支持多设备
const gulpPostcss = require('gulp-postcss');//postcss
/*
postcss 插件
 */
const postcssCssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
// const autoprefixer = require('autoprefixer');

//任务：删除dest
gulp.task('delDest',()=>{
    "use strict";
    del('./dest');
});

//任务：浏览器同步修改
gulp.task('browserSync',()=>{
    "use strict";
    browserSync.init({
        server: {
            baseDir: 'app',
        },
    });
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

//任务: postcss处理
gulp.task('postcss',function(){
    let postcssPlugin = [
        postcssCssnext,
        postcssImport,
        postcssNested,
        // autoprefixer,
    ];
    return gulp.src('app/css/*.css')
        .pipe(gulpPostcss(postcssPlugin))
        .pipe(gulp.dest('./dest'));
});

//默认任务
gulp.task('default',['delDest','postcss','browserSync'], function() {
    // 将你的默认的任务代码放在这


});


