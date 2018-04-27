window.onload = function(){
    var map = createMap();
//描画用
    var typeSelect = document.getElementById('type');
    addDrawingLayer(map);
    addDrawInteraction(map,typeSelect.value);

    typeSelect.onchange = function(){
        removeDrowInteraction(map);
        addDrawInteraction(map,typeSelect.value);
    }

//表示用
  //   var vectorLayer = createVectorLayer();
//   map.addLayer(vectorLayer);
}

/** 地図を作成します。 */
function createMap() {
  return new ol.Map({
      layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
          })
      ],
      target: 'map',
      controls: ol.control.defaults({
          attributionOptions: {
            collapsible: false
          }
      }),
      view: new ol.View({
        center: ol.proj.transform([139.5, 35.8], 'EPSG:4326', 'EPSG:3857'),
        zoom: 8
      })
  });
}

// /** ベクターレイヤを作成します。 */
// function createVectorLayer() {
//   return new ol.layer.Vector({
//       source: new ol.source.Vector({
//           url: 'https://openlayers.org/en/v4.6.4/examples/data/kml/2012_Earthquakes_Mag5.kml',
//           format: new ol.format.KML({
//             extractStyles: false
//           })
//       })
//   }); 
// }
//描画用
var drawingSource = new ol.source.Vector();
var drawingLayer = new ol.layer.Vector({
    source: drawingSource
});
var drawInteraction;

/** 描画用のレイヤを地図に追加 **/
function addDrawingLayer(map) {
    map.addLayer(drawingLayer);
}

/** フィーチャを描画できるように **/
function addDrawInteraction(map, type) {
    //指定された種類のフィーチャを描画できるようにする
    drawInteraction = new ol.interaction.Draw({
        source: drawingSource,
        type: type
    });
    map.addInteraction(drawInteraction);
}

/** フィーチャの描画を解除します **/
function removeDrowInteraction(map) {
    map.removeDrowInteraction(drawInteraction);
}