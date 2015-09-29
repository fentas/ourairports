var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    fs    = require('fs'),
    csv  = require("csvtojson").Converter,
    request = require('request'),
    ourairports = {
      airports: 'http://ourairports.com/data/airports.csv',
      countries: 'http://ourairports.com/data/countries.csv',
      regions: 'http://ourairports.com/data/regions.csv',
      runways: 'http://ourairports.com/data/runways.csv',
      frequencies: 'http://ourairports.com/data/airport-frequencies.csv',
      navaids: 'http://ourairports.com/data/navaids.csv'
    }

for ( var _type in ourairports ) {
  (function(type) {
    gulp.task(type, function(cb) {
      request(ourairports[type])
        .pipe(new csv({fork:true, toArrayString:true}))
        .pipe(fs.createWriteStream('./lib/'+type+'.json'))
        .on('finish', function() {
            cb()
        })
    })
  })(_type)
}

gulp.task('default', Object.keys(ourairports))
