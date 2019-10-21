import gulp from 'gulp'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import config from '../webpack.config'

const webpackTask = () =>
  gulp.src('src/*.js')
    .pipe(gulpWebpack(config, webpack))
    .pipe(gulp.dest('dist'))

export {
  webpackTask as webpack,
}
