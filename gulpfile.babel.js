/**
 * gulp构架结构
 **/



import gulp from 'gulp';
import cleancss from 'gulp-clean-css';
import debug from 'gulp-debug';
import htmlmin from 'gulp-htmlmin';
import template from 'gulp-template';
import uglify from 'gulp-uglify';
import fileinclude from 'gulp-file-include';
//默认任务

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    console.log('开始任务清单..');
    return gulp.src('')
        .pipe(debug({title: '开始执行第一个任务'}))
        .pipe(gulp.dest('dist'));
});

//浏览器测试
var browserSync = require('browser-sync').create();
gulp.task('browser', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/fxbtg/"
        }
    });
});

// 压缩html
gulp.task('min-html',function(){
    gulp.src(['./src/fxbtg-html/*.html','!./src/fxbtg-html/include/**.html','!./src/fxbtg-html/html/**.html'])
        .pipe(debug({title: '正在编译静态文件'}))
        .pipe(template({pkg: require('./package.json')}))
        .pipe(debug({title: '正在压缩静态文件'}))
        .pipe(
            htmlmin({collapseWhitespace: true ,
                removeComments: true,
                minifyJS: true,//压缩页面JS
                minifyCSS: true//压缩页面CSS
            }))
        .pipe(debug({title: '正在移动静态文件'}))
        .pipe(gulp.dest('./dist/fxbtg/'))
        .pipe(debug({title: '成功执行HTML压缩'}));
});

//引入框架文件
gulp.task('include', function() {
    // 适配html中所有文件夹下的所有html，排除html下的include文件夹中html
    gulp.src(['./src/fxbtg-html/html/*.html','!./src/fxbtg-html/include/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./src/fxbtg-html/'));
});

// 压缩JS
gulp.task('min-js', function() {
    gulp.src('./src/fxbtg-js/*.js')
        .pipe(uglify())
        .pipe(debug({title: '正在压缩js文件'}))
        .pipe(gulp.dest('./dist/fxbtg/js/'));
});

// 压缩CSS
gulp.task('min-css',function() {
    gulp.src(['./src/fxbtg-less/vis-*.css'])
        .pipe(cleancss())
        .pipe(debug({title: '正在压缩css文件'}))
        .pipe(gulp.dest('./dist/fxbtg/css/'));
});

// 监视自动化
gulp.task('watch',function(){
    gulp.watch(['./src/fxbtg-less/vis-*.less','./src/fxbtg-less/vis-*.css'],['min-css']);
    gulp.watch(['./src/fxbtg-html/html/*.html','./src/fxbtg-html/include/**.html'],['include']);
    gulp.watch(['include'],['min-html']);
    gulp.watch('./src/fxbtg-html/*.html',['min-html']);
});