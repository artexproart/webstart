// вариант Артёма

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', defaultTask);

function defaultTask(done) {
    console.log('галп установлен');
    done();
}

//вариант с сайта gulp
// function defaultTask(cb) {
//     console.log('галп работает');
//     cb();
//   }
  
//   exports.default = defaultTask

//вариант Яна
// var gulp = require('gulp')

// gulp.task('default', function () { 
//   console.log('Hello Gulp!') 
// });

//создание папки dist выгрузка css 

gulp.task('minify-css', function(done) {
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({
      compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css/'))

  done();
});
//Команда gulp minify-css

// сжатие css  npm install gulp-clean-css --save-dev

// сжатие в выгрузка в dist файлов JS
gulp.task('move-js', function(done) {
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'))
    done();
  });

// команда gulp move-js 

// сжатие и выгрузка HTML
gulp.task('htmlmin', function(done) {
    return gulp.src('./src/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
    done();
  });
  //команда gulp htmlmin

  //перенос шрифтов
  gulp.task('fonts', function(done) {
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
    done();
  });

  gulp.task('img', function(done) {
    return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('dist/img'))
    done();
  });

  // перенос PHP
  gulp.task('php', function(done) {
    return gulp.src('./src/*.php')
    .pipe(gulp.dest('dist/'))
    done();
  });
