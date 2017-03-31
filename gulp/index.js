import gulp from 'gulp'

import babel from './gulp.babel'
import webpack from './gulp.webpack'

gulp.task('default', [babel, webpack])

gulp.task('watch', ['default'], () =>
  gulp.watch('src/*.js', ['default']),
)
