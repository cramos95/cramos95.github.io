var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_3Counties_0 = new ol.format.GeoJSON();
var features_3Counties_0 = format_3Counties_0.readFeatures(json_3Counties_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3Counties_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_3Counties_0.addFeatures(features_3Counties_0);var lyr_3Counties_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3Counties_0, 
                style: style_3Counties_0,
                title: '<img src="styles/legend/3Counties_0.png" /> 3Counties'
            });var format_GeoStops_1 = new ol.format.GeoJSON();
var features_GeoStops_1 = format_GeoStops_1.readFeatures(json_GeoStops_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoStops_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GeoStops_1.addFeatures(features_GeoStops_1);var lyr_GeoStops_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeoStops_1, 
                style: style_GeoStops_1,
                title: '<img src="styles/legend/GeoStops_1.png" /> GeoStops'
            });

lyr_3Counties_0.setVisible(true);lyr_GeoStops_1.setVisible(true);
var layersList = [baseLayer,lyr_3Counties_0,lyr_GeoStops_1];
lyr_3Counties_0.set('fieldAliases', {'CNTY_NM': 'CNTY_NM', 'CNTY_NBR': 'CNTY_NBR', 'FIPS': 'FIPS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GeoStops_1.set('fieldAliases', {'STOP': 'STOP', 'LOCATION': 'LOCATION', 'COUNTY': 'COUNTY', 'TYPE': 'TYPE', 'AGE': 'AGE', 'FEATURE': 'FEATURE', 'DESCRIPTIO': 'DESCRIPTIO', 'Lat': 'Lat', 'Long': 'Long', 'Picture': 'Picture', });
lyr_3Counties_0.set('fieldImages', {'CNTY_NM': 'TextEdit', 'CNTY_NBR': 'Hidden', 'FIPS': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_GeoStops_1.set('fieldImages', {'STOP': 'TextEdit', 'LOCATION': 'TextEdit', 'COUNTY': 'TextEdit', 'TYPE': 'TextEdit', 'AGE': 'TextEdit', 'FEATURE': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Picture': 'TextEdit', });
lyr_3Counties_0.set('fieldLabels', {'CNTY_NM': 'inline label', });
lyr_GeoStops_1.set('fieldLabels', {'STOP': 'inline label', 'LOCATION': 'no label', 'COUNTY': 'no label', 'TYPE': 'no label', 'AGE': 'no label', 'FEATURE': 'no label', 'DESCRIPTIO': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Picture': 'no label', });
lyr_GeoStops_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});