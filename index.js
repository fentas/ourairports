var data = {}
try { data.airports = require('./lib/airports') } catch(e) {}
try { data.runways = require('./lib/runways') } catch(e) {}
try { data.navaids = require('./lib/navaids') } catch(e) {}
try { data.countries = require('./lib/countries') } catch(e) {}
try { data.regions = require('./lib/regions') } catch(e) {}
try { data.frequencies = require('./lib/frequencies') } catch(e) {}

module.exports = exports = data
