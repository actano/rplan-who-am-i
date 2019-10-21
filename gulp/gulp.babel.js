import gulp from 'gulp'
import babel from 'gulp-babel'

const babelTask = () =>
  gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'))

export {
  babelTask as babel,
}
