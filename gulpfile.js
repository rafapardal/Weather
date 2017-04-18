const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

gulp.task('css', () => {
    const plugins = [
        autoprefixer({ browsers: '> 0.1%' }),
    ];
    return gulp.src('src/sass/**/*.scss') // qualquer ficheiro scss na pasta sass ou subpastas
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // minifica o css e mostra os erros dos ficheiros scss
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.maps', { addComment: false })) // cria o ficheiro de erro
        .pipe(gulp.dest('dist/css')) // coloca os ficheiros css nesta pasta
        .pipe(browserSync.stream()); // fazer refresh na página depois do ficheiro ser atualizado
});

gulp.task('js', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.maps', { addComment: false })) // cria o ficheiro de erro
        .pipe(gulp.dest('dist/js')) // coloca os ficheiros css nesta pasta
        .pipe(browserSync.stream()); // fazer refresh na página depois do ficheiro ser atualizado
});

gulp.task('images', () => {
    return gulp.src('src/images/*')
        .pipe(imagemin()) // minifica as imagens
        .pipe(gulp.dest('dist/images'));
});

gulp.task('copy', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream()); // fazer refresh na página depois do ficheiro ser atualizado
});

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: 'dist',
        },
    });
});

gulp.task('watch', ['browserSync', 'css', 'copy', 'js'], () => {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/sass/**/*scss', ['css']);
    gulp.watch('src/*.html', ['copy']);
});
