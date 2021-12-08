var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
    title: 'building<br />\
    <img src="styles/legend/building_1_0.png" /> 中<br />\
    <img src="styles/legend/building_1_1.png" /> 廢<br />\
    <img src="styles/legend/building_1_2.png" /> B<br />\
    <img src="styles/legend/building_1_3.png" /> M<br />\
    <img src="styles/legend/building_1_4.png" /> R<br />\
    <img src="styles/legend/building_1_5.png" /> T<br />\
    <img src="styles/legend/building_1_6.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'樓高': '樓高', '類型': '類型', });
lyr_building_1.set('fieldImages', {'樓高': 'TextEdit', '類型': 'TextEdit', });
lyr_building_1.set('fieldLabels', {'樓高': 'header label', '類型': 'header label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});