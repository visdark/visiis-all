/**
 * gulp构架结构
 **/

import gulp from 'gulp';
import cleancss from 'gulp-clean-css';
import debug from 'gulp-debug';

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    console.log('开始任务清单..');
    return gulp.src('')
        .pipe(debug({title: '开始执行第一个任务'}))
        .pipe(gulp.dest('dist'));
});
