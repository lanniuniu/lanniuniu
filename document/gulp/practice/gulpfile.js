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
/*
加载package.json中所有gulp插件，驼峰命名使用
 */
const gulpAllPlugin = require('gulp-load-plugins')();

//任务：删除dest
// gulp.task('delDest',()=>{
//     "use strict";
//     del('./dest');
// });

//任务：es的转码、压缩
gulp.task('esProcessor', ()=>{
    "use strict";
    return gulp.src('app/js/*.js')
        // .pipe(gulpAllPlugin.plumber())
        .pipe(gulpAllPlugin.babel(
            {
                presets: ['es2015'],
            }
        ))
        .pipe(gulpAllPlugin.rename({suffix: '.min'}))
        // .pipe(gulpAllPlugin.uglify())//生产环境所需要的压缩
        .pipe(gulp.dest('./dest/js/'));
});

//任务：浏览器同步修改
gulp.task('browserSync',()=>{
    "use strict";
    browserSync.init({
        //使用内置的静态服务器
        server: {
            baseDir: './app/',
        },
        ui: false,
        /*
        使用本地地址，需要开启apache
        */
        // proxy: "localhost:81/ifYou/document/gulp/practice/app",
        port: 81,
    });
    gulp.watch('./app/js/*.js',['esProcessor']);
    gulp.watch('./app/css/*.css',['postcss']);
    gulp.watch('./app/**/*').on('change', browserSync.reload);
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
        .pipe(gulpAllPlugin.less())
        .pipe(gulpAllPlugin.rename({suffix: '.min'}))
        .pipe(gulp.dest('./dest/css'));
});

//默认任务
gulp.task('default',['esProcessor','postcss','browserSync'], function() {
    // 将你的默认的任务代码放在这


});


