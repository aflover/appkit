var gulp = require('gulp');

gulp.task("default", function () {
    return gulp.src([ "tmp/**"]).pipe(gulp.dest("demo"))
})
