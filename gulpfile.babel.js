import gulp from 'gulp'
import webpack from 'webpack-stream'
import open from 'gulp-open'

gulp.task('default', ['open'])

gulp.task('build', () => {
  return gulp.src('src/*.js')
    .pipe(webpack({
      entry: './src/main.js',
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          { loader: 'babel-loader' }
        ]
      }
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('open', ['build'], () => {
  return gulp.src('./index.html')
    .pipe(open());
})
