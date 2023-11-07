var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_cinv__1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/silca/wms?version%3D1.1.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "cinv_",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "cinv_",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_cinv__1, 1]);
var lyr_depto_agm_2020_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/silca/wms?version%3D1.1.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "depto_agm_2020",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "depto_agm_2020",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_depto_agm_2020_2, 1]);

lyr_OpenStreetMap_0.setVisible(true);lyr_cinv__1.setVisible(true);lyr_depto_agm_2020_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cinv__1,lyr_depto_agm_2020_2];
