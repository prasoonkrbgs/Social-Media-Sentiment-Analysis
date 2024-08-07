var gulp    = require('gulp');
var del     = require('del');

var scriptPaths  = require('../tasks/config').SCRIPT_PATHS;

/* Delete built files */
gulp.task('clean', function (cb) {
    var paths = ['public/javascripts', 'public/stylesheets'];
    scriptPaths.map(function(sp){
        paths.push(sp.dest+'/*.js');
    });
    del(paths).then(cb());
});