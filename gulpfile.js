var gulp = require('gulp');
var rename = require( 'gulp-rename' );
var clean = require('gulp-clean');

gulp.task('clean-files', function () {
    return gulp.src('./build/*.js',{read:false})
    .pipe(clean({force:true}));
});

gulp.task('clean-prebuild', function () {
    return gulp.src('./prebuild/*.js',{read:false})
    .pipe(clean({force:true}));
});

gulp.task('javascript', function () {
    gulp.src('./dist/*.js')
        .pipe(gulp.dest('./prebuild/'))
        .pipe(rename(function (path) {
            var newName = path.basename.split(".");
            path.basename = newName[0];
        }))
      .pipe(gulp.dest('./build/'))
});



gulp.task('build', ['clean-files','javascript','clean-prebuild']);



// gulp.task('rename-files', function () {
//     return gulp.src('./build/*.js')
//         .pipe(rename(function (path) {
//             var newName = path.basename.split(".");
//             path.basename = newName[0];
//         }))
//       .pipe(gulp.dest('./build/')); 
// });