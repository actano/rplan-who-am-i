import gulp from 'gulp'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import config from '../webpack.config'

const TASK_NAME = 'webpack'

gulp.task(TASK_NAME, () =>
  gulp.src('src/*.js')
    .pipe(gulpWebpack(config, webpack))
    .pipe(gulp.dest('dist')),
)

export default TASK_NAME
