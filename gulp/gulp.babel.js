import gulp from 'gulp'
import babel from 'gulp-babel'

const TASK_NAME = 'babel'

gulp.task(TASK_NAME, () =>
  gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib')),
)

export default TASK_NAME
