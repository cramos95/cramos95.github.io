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
var format_Counties_0 = new ol.format.GeoJSON();
var features_Counties_0 = format_Counties_0.readFeatures(json_Counties_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Counties_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Counties_0.addFeatures(features_Counties_0);var lyr_Counties_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Counties_0, 
                style: style_Counties_0,
                title: '<img src="styles/legend/Counties_0.png" /> Counties'
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
                title: '<img src="styles/legend/GeoStops_1.png" /> Geo Stops'
            });

lyr_Counties_0.setVisible(true);lyr_GeoStops_1.setVisible(true);
var layersList = [baseLayer,lyr_Counties_0,lyr_GeoStops_1];
lyr_Counties_0.set('fieldAliases', {'CNTY_NM': 'CNTY_NM', 'CNTY_NBR': 'CNTY_NBR', 'FIPS': 'FIPS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GeoStops_1.set('fieldAliases', {'Stop': 'Stop', 'COUNTY': 'COUNTY', 'LOCATION': 'LOCATION', 'ACCESS': 'ACCESS', 'AGE': 'AGE', 'FEATURE': 'FEATURE', 'DESCRIPTIO': 'DESCRIPTIO', 'Lat': 'Lat', 'Long': 'Long', 'Picture': 'Picture', });
lyr_Counties_0.set('fieldImages', {'CNTY_NM': 'TextEdit', 'CNTY_NBR': 'Hidden', 'FIPS': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_GeoStops_1.set('fieldImages', {'Stop': 'TextEdit', 'COUNTY': 'TextEdit', 'LOCATION': 'TextEdit', 'ACCESS': 'TextEdit', 'AGE': 'TextEdit', 'FEATURE': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Picture': 'TextEdit', });
lyr_Counties_0.set('fieldLabels', {'CNTY_NM': 'no label', });
lyr_GeoStops_1.set('fieldLabels', {'Stop': 'no label', 'COUNTY': 'no label', 'LOCATION': 'no label', 'ACCESS': 'no label', 'AGE': 'no label', 'FEATURE': 'no label', 'DESCRIPTIO': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Picture': 'no label', });
lyr_GeoStops_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});