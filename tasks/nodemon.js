/* Include the necessary modules */
var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var bSync   = require('browser-sync');

/* Nodemon task for monitory for changes with live restarting */
gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
        script: './bin/www',
        watch: ['client-side-source/**/*']
    })
        .on('start', function onStart() {
            if (!called) { cb(); }
            called = true;
        })
        .on('restart', function onRestart() {
            setTimeout(function reload() {
                bSync.reload({
                    stream: false
                });
            }, 500);
        });
});