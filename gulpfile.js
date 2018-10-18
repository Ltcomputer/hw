const gulp = require('gulp'),
htmlmin = require('gulp-htmlmin'),
uglify = require('gulp-uglify'),
//   cleanCSS = require('gulp-clean-css'),
autoprefixer = require('gulp-autoprefixer'),
 cssmin = require('gulp-cssmin'),
 imagemin = require('gulp-imagemin'),
 babel = require('gulp-babel'),
rename = require('gulp-rename'),
connect = require('gulp-connect');


gulp.task('html', function () {
  var options = {
      removeComments: true,//清除HTML注释
      collapseWhitespace: true,//压缩HTML
      minifyJS: true,//压缩页面JS
      minifyCSS: true//压缩页面CSS
  };
  gulp.src('app/**/*.html')
      .pipe(htmlmin(options))
      .pipe(gulp.dest('dist/'))
      .pipe(connect.reload());    //加在此处只对html有用;   
});


gulp.task('js', function () {
  gulp.src('app/**/*.js')
  .pipe(babel({
          presets: ['@babel/env']
          }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload()); 
})




gulp.task('autocss', () =>
    gulp.src('app/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dest'))
);

gulp.task('css', function () {
  gulp.src('app/**/*.css')
      .pipe(cssmin())
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload()); 
     
});
// gulp.task('css', () => {
//     return gulp.src('app/**/*.css')
//       .pipe(cleanCSS({compatibility: 'ie8'}))
//       .pipe(gulp.dest('dist'));
//   });

gulp.task('img', () =>
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
        
);




      //watch 监听  文件
      gulp.task('watch',function(){
          gulp.watch('app/**/*.html',['html']);   //监听html
          gulp.watch('app/**/*.js',['js']);        //监听js
          gulp.watch('app/**/*.css',['css'])
      })






      gulp.task('build',['html','js','css','img']);
//开启本地服务器
gulp.task('connect', function() {
  connect.server({
      root:'dist',
      port:3000,
      livereload:true    //开启页面刷新
  });
});
//同时执行多个任务,执行静态文件的压缩

gulp.task('default',['build','connect','watch'])