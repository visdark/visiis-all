/**
 * gulp构架结构
 **/



import gulp from 'gulp';
import cleancss from 'gulp-clean-css';
import debug from 'gulp-debug';
import htmlmin from 'gulp-htmlmin';
import template from 'gulp-template';
import uglify from 'gulp-uglify';

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
            baseDir: "./dist/fxbtg"
        }
    });
});

// 压缩html
gulp.task('html',function(){
    gulp.src('./src/fxbtg-html/*.html')
        .pipe(debug({title: '正在编译静态文件'}))
        .pipe(template({pkg: require('./package.json')}))
        .pipe(debug({title: '正在压缩静态文件'}))
        .pipe(
            htmlmin({collapseWhitespace: true ,
                removeComments: true,
                minifyJS:true
            }))
        .pipe(debug({title: '正在移动静态文件'}))
        .pipe(gulp.dest('./dist/fxbtg/'))
        .pipe(debug({title: '成功执行HTML压缩'}));
});

// 压缩JS
gulp.task('javascripts', function() {
    gulp.src('./src/fxbtg-js/*.js')
        .pipe(uglify())
        .pipe(debug({title: '正在压缩js文件'}))
        .pipe(gulp.dest('./dist/fxbtg/js/'));
});

