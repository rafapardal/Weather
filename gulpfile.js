var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

gulp.task('css', function() {
    return gulp.src('src/sass/**/*.scss') // qualquer ficheiro scss na pasta sass ou subpastas
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError)) // minifica o css e mostra os erros dos ficheiros scss
        .pipe(autoprefixer({
            browsers: ['last 2 versions'] // prefix para browsers antigos ou MS
        }))
        .pipe(sourcemaps.write('.maps')) // cria o ficheiro de erro
        .pipe(gulp.dest('dist/css')) // coloca os ficheiros css nesta pasta
        .pipe(browserSync.stream()) // fazer refresh na página depois do ficheiro ser atualizado
});

gulp.task('images', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin()) // minifica as imagens
        .pipe(gulp.dest('dist/images'))
});

gulp.task('copy', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream()) // fazer refresh na página depois do ficheiro ser atualizado
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('watch', ['browserSync', 'css', 'copy'], function(){
    gulp.watch('src/sass/**/*scss', ['css']);
    gulp.watch('src/*.html', ['copy']);
});