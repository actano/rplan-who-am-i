import gulp from 'gulp'

import { babel } from './gulp.babel'
import { webpack } from './gulp.webpack'

const defaultTask = gulp.series(babel, webpack)

const watch = gulp.series(
  defaultTask,
  () =>
    gulp.watch('src/*.js', defaultTask),
)

export default defaultTask

export {
  watch,
}
