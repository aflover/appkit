var autoprefix = require("gulp-autoprefixer"),
    gulp = require('gulp-npm-run')(require('gulp'), {
      exclude: ['test'], // the test script is excluded 
      include: [
        'build:release',
        'build:dev',
      ], // just a helpful description 
      npmRun: true // rather than `npm run script` gulp runs the script's value / command(s) 
    }),
    param = require('gulp-param')(gulp, process.argv),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    log = require('gulp-log'),
    filter = require('gulp-filter'),
    sicon = require('./scripts/icon'),
    buffer = require('gulp-buffer'),
    watch = require('gulp-watch'),
    path = require('path'),
    fs = require('fs'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    sass = require("gulp-sass");

var paths = {
    scss: [
        "./scss/*.scss",
        "./scss/**/*.scss",
    ],
    components: [
        './components/*',
        './components/**/*',
        './webpack.config.js',
    ]
};

function handleSassError(err) {
    gutil.log(gutil.colors.red('sass error\r\n'), gutil.colors.yellow(err.message));
    this.emit('end');
}

gulp.task("sass", ['sass:dev'], function() {
    return gulp.src('../dist/css/veak.css')
        .pipe(rename(function (path) {
            path.basename = path.basename + '.min';
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest("../dist/css"))
        ;
});

gulp.task("sass:dev", function() {
    return gulp.src('./scss/veak.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ includePaths: [
            path.resolve(__dirname, "scss"),
        ]}))
        .on('error', handleSassError)
        .pipe(autoprefix("last 5 versions")) // for Safari flex
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("../dist/css"))
        ;
});

function makeIconSassTask (name) {
    return function () {
        var item = sicon.resolve(name);
        // var cssFilter = filter('*.css', { restore: true });
        // var fontFilter = filter(['.eot', '.svg', '.ttf', '.woff', '.woff2'], { restore: true });
        return gulp.src(item.cssFile)
                .pipe(rename(function (path) {
                    path.basename = '_icons-' + path.basename;
                    path.extname = ".scss"
                }))
                .pipe(buffer())
                .pipe(sicon.gulpContentFilter(function (file) {
                    file.contents = new Buffer(item.toSass(file.contents.toString('utf8')));
                }))
                .pipe(gulp.dest("../scss/components/icons/"))
            ;
    }
}

function makeIconFontTask (name) {
    return function () {
        var item = sicon.resolve(name);
        return gulp.src(item.fontsDir)
                .pipe(gulp.dest("./fonts/"))
            ;
    }
}

['photon', 'font-awesome'].forEach(function (it) {
    gulp.task("icon-" + it + '-sass', makeIconSassTask(it));
    gulp.task("icon-" + it + '-font', makeIconFontTask(it));
});

gulp.task("icon-photon", ["icon-photon-sass", "icon-photon-font"]);
gulp.task("icon-font-awesome", ["icon-font-awesome-sass", "icon-font-awesome-font"]);

// 更新图标库
gulp.task("icons", ["icon-font-awesome", "icon-photon"]);

gulp.task("fonts", function(){
    return gulp.src('./fonts/*').pipe(gulp.dest("../dist/fonts"));
});

gulp.task("dev", ["fonts"], function() {
    gulp.start("sass");
    watch(paths.scss, function(){
        gulp.start('sass');
    });
    
    gulp.start('build:dev');
    watch(paths.components, function () {
        gulp.start('build:dev');
    });
});

gulp.task("default", ['sass', 'fonts', 'build:release', 'build:dev']);
