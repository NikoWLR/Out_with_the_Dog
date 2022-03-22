  

  //GeoJson routing stuff. How it works is anyones guess

var PathFinder = require('geojson-path-finder'),
    geojson = require('./GeoJson/digitiePathing.json');

var pathFinder = new PathFinder(geojson, { precision: 1e-3 });

var path = pathfinder.findPath(start, finish);
  