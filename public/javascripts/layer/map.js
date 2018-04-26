window.onload = function(){
    var map = createMap();    
}

/** 地図を作成します。 */
function createMap() {
    var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.transform([139.5, 35.8], 'EPSG:4326', 'EPSG:3857'),
          zoom: 8
        })
    });
}
