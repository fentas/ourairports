## ourairports.com (csv to json)
Little script to convert the collected data from [ourairports.com](ourairports.com) to json.
You can use it also as npm module.

```bash
npm install ourairports --save
```
Because of the size of files (see Data) you have to __install__ them yourself.
```bash
cd ./node_modules/ourairports
# to download all
npm run gulp --
# to download a specific file
npm run gulp -- [name - like airports]
```
It is recommended that you insert the latter step in your project `package.json`
```json
{
  "script": {
    "install": "cd node_modules/ourairports && npm run gulp -- [name [name [...]]]"
  }
}
```

#### Usage
```js
var ourairports = require('ourairports')

// get Sydney Kingsford Smith International Airport
console.log(
  ourairports.airports.filter(function(ap) {
    if ( ap.iata_code === 'SYD' ) return true
  })
)
```

#### Data
Here is a overview over the given data.

| ~ Size   | name        | description |
| ------:  | ----        | ----------- |
| `18 MB`  | airports    | containing information on all airports on this site. |
| `15 MB`  | runways     | listing runways for the airports in airports. |
| `4.8_MB` | navaids     | listing worldwide radio navigation aids. |
| `33 KB`  | countries   | list of the world's countries. To interpret the country codes in airports and navaids. |
| `707 KB` | regions     | list of all countries' regions (provinces, states, etc.). To interpret the region codes in airports. |
| `3.2 MB` | frequencies | listing communication frequencies for the airports. |

| name        | fields |
| ----        | ------ |
| airports    | id, ident, type, name, latitude_deg, longitude_deg, elevation_ft, continent, iso_country, iso_region, municipality, scheduled_service, gps_code, iata_code, local_code, home_link, wikipedia_link, keywords |
| runways     | id, airport_ref, airport_ident, length_ft, width_ft, surface, lighted, closed, le_ident, le_latitude_deg, le_longitude_deg, le_elevation_ft, le_heading_degT, le_displaced_threshold_ft, he_ident, he_latitude_deg, he_longitude_deg, he_elevation_ft, he_heading_degT, he_displaced_threshold_ft |
| navaids     | id, filename, ident, name, type, frequency_khz, latitude_deg, longitude_deg, elevation_ft, iso_country, dme_frequency_khz, dme_channel, dme_latitude_deg, dme_longitude_deg, dme_elevation_ft, slaved_variation_deg, magnetic_variation_deg, usageType, power, associated_airport |
| countries   | id, code, name, continent, wikipedia_link, keywords |
| regions     | id, code, local_code, name, continent, iso_country, wikipedia_link, keywords |
| frequencies | id, airport_ref, airport_ident, type, description, frequency_mhz |

#### CSV Files
http://ourairports.com/data/

### Credits
Big thanks to David Megginson.
Please considure to pay him a [visit](http://ourairports.com/about.html#credits).
