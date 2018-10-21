var gulp = require('gulp');
// All Gulp Plugins Object
var gulpPlugin = {
    // General
    run: require('run-sequence'),
    del: require('del'),
    rename: require('gulp-rename'), // check settings
    plumber: require('gulp-plumber'),
    // LESS & CSS
    less: require('gulp-less'),
    postcss: require('gulp-postcss'),
    autoprefixer: require('autoprefixer'),
    minify_csso: require('gulp-csso'),
    csspurge: require('gulp-css-purge'),
    // HTML
    posthtml: require('gulp-posthtml'),
    include: require('posthtml-include'),
    htmlmin: require('gulp-htmlmin'),
    // JS
    jsmin: require('gulp-uglify'),
    // Images
    imagemin: require('gulp-imagemin'),
    webp: require('gulp-webp'),
    svgstore: require('gulp-svgstore'),
    // Server
    browserSync: require('browser-sync').create()
};

// var checkCSS = require( 'gulp-check-unused-css' );
// gulp.task('check', function () {
//     gulp.src([ 'build/css/style.css', 'build/*.html' ])
//         .pipe(gulpPlugin.plumber())
//         .pipe( checkCSS() );
// })

// Full project build
gulp.task('build', function(done) {
    gulpPlugin.run(
        "delete",
        "copy",
        "style",
        // "sprite",
        "html",
        "jsmin",
        // "images",
        // "webp",
        done);
});

// LESS & CSS
gulp.task('style', function() {
    gulp.src("source/less/*-style.less")
        .pipe(gulpPlugin.plumber())
        .pipe(gulpPlugin.less())
        .pipe(gulpPlugin.csspurge({
            shorten_background : false,
            shorten_background_min : 4,
            trim : false,
            shorten : true
        }))
        .pipe(gulpPlugin.postcss([gulpPlugin.autoprefixer()]))
        .pipe(gulp.dest("build/css")) // full css
        .pipe(gulpPlugin.minify_csso())
        .pipe(gulpPlugin.rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("build/css"))
        .pipe(gulpPlugin.browserSync.stream());
});

// Include Tag in HTML
// Minify HTML
gulp.task('html', function() {
    return gulp.src('source/*.html')
        .pipe(gulpPlugin.posthtml([
            gulpPlugin.include()
        ]))
        .pipe(gulp.dest('build'))
        .pipe(gulpPlugin.htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true
        }))
        // .pipe(gulpPlugin.rename({
        //     suffix: ".min"
        // }))
        .pipe(gulp.dest('build'));
});

// Minify JS
gulp.task('jsmin', function() {
    return gulp.src('source/js/*.js')
        .pipe(gulpPlugin.plumber())
        .pipe(gulpPlugin.jsmin())
        .pipe(gulpPlugin.rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("build/js"));
});

// Server + Watching less/html/JS
gulp.task('serve', function() {
    gulpPlugin.browserSync.init({
        server: "build/"
    });

    gulp.watch("source/less/**/*.less", ['style']);
    gulp.watch("source/js/**/*.js", ['jsmin']).on('change', gulpPlugin.browserSync.reload);
    gulp.watch("source/*.html", ['html']).on('change', gulpPlugin.browserSync.reload);
});

// Minifying images
gulp.task('images', function() {
    return gulp.src('source/img/**/*')
        .pipe(gulpPlugin.imagemin([
            gulpPlugin.imagemin.jpegtran({
                progressive: true
            }),
            gulpPlugin.imagemin.optipng({
                optimizationLevel: 5
            }),
            gulpPlugin.imagemin.svgo()
        ]))
        .pipe(gulp.dest('build/img'))
});

// Converting to WEBP
gulp.task('webp', function() {
    return gulp.src('source/img/**/*.{jpg,png}')
        .pipe(gulpPlugin.webp({
            quality: 90
        }))
        .pipe(gulp.dest('build/img'));
});

// Making SVG sprite
gulp.task('sprite', function() {
    return gulp.src('source/img/svg/*.svg')
        .pipe(gulpPlugin.svgstore({
            inlineSvg: true
        }))
        .pipe(gulpPlugin.rename('sprite.svg'))
        .pipe(gulp.dest('source/img/svg'));
});

// Copy
gulp.task('copy', function() {
    return gulp.src([
            "source/fonts/**",
            "source/img/**"
        ], {
            base: "source"
        })
        .pipe(gulp.dest('build'));
});

// Delete
gulp.task('delete', function() {
    return gulpPlugin.del('build/**');
});
