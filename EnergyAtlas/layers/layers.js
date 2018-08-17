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
            });var format_Coal_1 = new ol.format.GeoJSON();
var features_Coal_1 = format_Coal_1.readFeatures(json_Coal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coal_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Coal_1.addFeatures(features_Coal_1);var lyr_Coal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coal_1, 
                style: style_Coal_1,
    title: 'Coal<br />\
    <img src="styles/legend/Coal_1_0.png" />  305 - 470 <br />\
    <img src="styles/legend/Coal_1_1.png" />  470 - 840 <br />\
    <img src="styles/legend/Coal_1_2.png" />  840 - 1345 <br />\
    <img src="styles/legend/Coal_1_3.png" />  1345 - 2410 <br />\
    <img src="styles/legend/Coal_1_4.png" />  2410 - 3675 <br />'
        });var format_TxSedBasins_2 = new ol.format.GeoJSON();
var features_TxSedBasins_2 = format_TxSedBasins_2.readFeatures(json_TxSedBasins_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TxSedBasins_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TxSedBasins_2.addFeatures(features_TxSedBasins_2);var lyr_TxSedBasins_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TxSedBasins_2, 
                style: style_TxSedBasins_2,
                title: '<img src="styles/legend/TxSedBasins_2.png" /> TxSedBasins'
            });var format_GasPipelines_3 = new ol.format.GeoJSON();
var features_GasPipelines_3 = format_GasPipelines_3.readFeatures(json_GasPipelines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasPipelines_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GasPipelines_3.addFeatures(features_GasPipelines_3);var lyr_GasPipelines_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GasPipelines_3, 
                style: style_GasPipelines_3,
                title: '<img src="styles/legend/GasPipelines_3.png" /> GasPipelines'
            });var format_Gas_4 = new ol.format.GeoJSON();
var features_Gas_4 = format_Gas_4.readFeatures(json_Gas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gas_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gas_4.addFeatures(features_Gas_4);var lyr_Gas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gas_4, 
                style: style_Gas_4,
    title: 'Gas<br />\
    <img src="styles/legend/Gas_4_0.png" />  1 - 239 <br />\
    <img src="styles/legend/Gas_4_1.png" />  239 - 536 <br />\
    <img src="styles/legend/Gas_4_2.png" />  536 - 860 <br />\
    <img src="styles/legend/Gas_4_3.png" />  860 - 1265 <br />\
    <img src="styles/legend/Gas_4_4.png" />  1265 - 1838 <br />'
        });var format_Nuclear_5 = new ol.format.GeoJSON();
var features_Nuclear_5 = format_Nuclear_5.readFeatures(json_Nuclear_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nuclear_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nuclear_5.addFeatures(features_Nuclear_5);var lyr_Nuclear_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nuclear_5, 
                style: style_Nuclear_5,
    title: 'Nuclear<br />\
    <img src="styles/legend/Nuclear_5_0.png" /> 2400<br />\
    <img src="styles/legend/Nuclear_5_1.png" /> 2560<br />'
        });var format_Hydro_6 = new ol.format.GeoJSON();
var features_Hydro_6 = format_Hydro_6.readFeatures(json_Hydro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydro_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Hydro_6.addFeatures(features_Hydro_6);var lyr_Hydro_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hydro_6, 
                style: style_Hydro_6,
    title: 'Hydro<br />\
    <img src="styles/legend/Hydro_6_0.png" />  1 - 17 <br />\
    <img src="styles/legend/Hydro_6_1.png" />  17 - 42 <br />\
    <img src="styles/legend/Hydro_6_2.png" />  42 - 58 <br />\
    <img src="styles/legend/Hydro_6_3.png" />  58 - 80 <br />\
    <img src="styles/legend/Hydro_6_4.png" />  80 - 108 <br />'
        });var format_TxSolar_7 = new ol.format.GeoJSON();
var features_TxSolar_7 = format_TxSolar_7.readFeatures(json_TxSolar_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TxSolar_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TxSolar_7.addFeatures(features_TxSolar_7);var lyr_TxSolar_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TxSolar_7, 
                style: style_TxSolar_7,
    title: 'TxSolar<br />\
    <img src="styles/legend/TxSolar_7_0.png" />  4.86 - 5.29 <br />\
    <img src="styles/legend/TxSolar_7_1.png" />  5.29 - 5.65 <br />\
    <img src="styles/legend/TxSolar_7_2.png" />  5.65 - 6.00 <br />\
    <img src="styles/legend/TxSolar_7_3.png" />  6.00 - 6.34 <br />\
    <img src="styles/legend/TxSolar_7_4.png" />  6.34 - 6.79 <br />'
        });var format_Solar_8 = new ol.format.GeoJSON();
var features_Solar_8 = format_Solar_8.readFeatures(json_Solar_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solar_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solar_8.addFeatures(features_Solar_8);var lyr_Solar_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solar_8, 
                style: style_Solar_8,
    title: 'Solar<br />\
    <img src="styles/legend/Solar_8_0.png" />  1.0 - 5.5 <br />\
    <img src="styles/legend/Solar_8_1.png" />  5.5 - 15.4 <br />\
    <img src="styles/legend/Solar_8_2.png" />  15.4 - 50.0 <br />\
    <img src="styles/legend/Solar_8_3.png" />  50.0 - 118.5 <br />\
    <img src="styles/legend/Solar_8_4.png" />  118.5 - 157.5 <br />'
        });var format_WindSpeedRange_9 = new ol.format.GeoJSON();
var features_WindSpeedRange_9 = format_WindSpeedRange_9.readFeatures(json_WindSpeedRange_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindSpeedRange_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_WindSpeedRange_9.addFeatures(features_WindSpeedRange_9);var lyr_WindSpeedRange_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WindSpeedRange_9, 
                style: style_WindSpeedRange_9,
    title: 'WindSpeedRange<br />\
    <img src="styles/legend/WindSpeedRange_9_0.png" />  1.0 - 1.0 <br />\
    <img src="styles/legend/WindSpeedRange_9_1.png" />  1.0 - 2.0 <br />\
    <img src="styles/legend/WindSpeedRange_9_2.png" />  2.0 - 3.0 <br />\
    <img src="styles/legend/WindSpeedRange_9_3.png" />  3.0 - 4.0 <br />\
    <img src="styles/legend/WindSpeedRange_9_4.png" />  4.0 - 6.0 <br />'
        });var format_Wind_10 = new ol.format.GeoJSON();
var features_Wind_10 = format_Wind_10.readFeatures(json_Wind_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wind_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Wind_10.addFeatures(features_Wind_10);var lyr_Wind_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wind_10, 
                style: style_Wind_10,
    title: 'Wind<br />\
    <img src="styles/legend/Wind_10_0.png" />  3 - 57 <br />\
    <img src="styles/legend/Wind_10_1.png" />  57 - 135 <br />\
    <img src="styles/legend/Wind_10_2.png" />  135 - 211 <br />\
    <img src="styles/legend/Wind_10_3.png" />  211 - 376 <br />\
    <img src="styles/legend/Wind_10_4.png" />  376 - 736 <br />'
        });

lyr_Counties_0.setVisible(true);lyr_Coal_1.setVisible(true);lyr_TxSedBasins_2.setVisible(false);lyr_GasPipelines_3.setVisible(false);lyr_Gas_4.setVisible(true);lyr_Nuclear_5.setVisible(true);lyr_Hydro_6.setVisible(true);lyr_TxSolar_7.setVisible(false);lyr_Solar_8.setVisible(true);lyr_WindSpeedRange_9.setVisible(false);lyr_Wind_10.setVisible(true);
var layersList = [baseLayer,lyr_Counties_0,lyr_Coal_1,lyr_TxSedBasins_2,lyr_GasPipelines_3,lyr_Gas_4,lyr_Nuclear_5,lyr_Hydro_6,lyr_TxSolar_7,lyr_Solar_8,lyr_WindSpeedRange_9,lyr_Wind_10];
lyr_Counties_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY_NM': 'CNTY_NM', 'CNTY_NBR': 'CNTY_NBR', 'FIPS': 'FIPS', 'CREATE_USE': 'CREATE_USE', 'CREATE_DT': 'CREATE_DT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Coal_1.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TxSedBasins_2.set('fieldAliases', {'NAME': 'NAME', 'Area_sq_km': 'Area_sq_km', 'Area_sq_mi': 'Area_sq_mi', });
lyr_GasPipelines_3.set('fieldAliases', {'TYPEPIPE': 'TYPEPIPE', 'Operator': 'Operator', 'Shape_Leng': 'Shape_Leng', });
lyr_Gas_4.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Nuclear_5.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Hydro_6.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TxSolar_7.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'ANN_LATILT': 'ANN_LATILT', 'JAN': 'JAN', 'FEB': 'FEB', 'MAR': 'MAR', 'APR': 'APR', 'MAY': 'MAY', 'JUN': 'JUN', 'JUL': 'JUL', 'AUG': 'AUG', 'SEP': 'SEP', 'OCT': 'OCT', 'NOV': 'NOV', 'DEC': 'DEC', });
lyr_Solar_8.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_WindSpeedRange_9.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'WindSpeed': 'WindSpeed', });
lyr_Wind_10.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Zip': 'Zip', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Counties_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'CNTY_NM': 'TextEdit', 'CNTY_NBR': 'TextEdit', 'FIPS': 'TextEdit', 'CREATE_USE': 'TextEdit', 'CREATE_DT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Coal_1.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TxSedBasins_2.set('fieldImages', {'NAME': 'TextEdit', 'Area_sq_km': 'TextEdit', 'Area_sq_mi': 'TextEdit', });
lyr_GasPipelines_3.set('fieldImages', {'TYPEPIPE': 'TextEdit', 'Operator': 'TextEdit', 'Shape_Leng': 'Hidden', });
lyr_Gas_4.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Nuclear_5.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Hydro_6.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TxSolar_7.set('fieldImages', {'ID': 'Hidden', 'GRIDCODE': 'Hidden', 'ANN_LATILT': 'TextEdit', 'JAN': 'Hidden', 'FEB': 'Hidden', 'MAR': 'Hidden', 'APR': 'Hidden', 'MAY': 'Hidden', 'JUN': 'Hidden', 'JUL': 'Hidden', 'AUG': 'Hidden', 'SEP': 'Hidden', 'OCT': 'Hidden', 'NOV': 'Hidden', 'DEC': 'Hidden', });
lyr_Solar_8.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_WindSpeedRange_9.set('fieldImages', {'ID': 'Hidden', 'GRIDCODE': 'Hidden', 'WindSpeed': 'TextEdit', });
lyr_Wind_10.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Zip': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Counties_0.set('fieldLabels', {'OBJECTID': 'no label', 'CNTY_NM': 'no label', 'CNTY_NBR': 'no label', 'FIPS': 'no label', 'CREATE_USE': 'no label', 'CREATE_DT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Coal_1.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_TxSedBasins_2.set('fieldLabels', {'NAME': 'inline label', 'Area_sq_km': 'inline label', 'Area_sq_mi': 'inline label', });
lyr_GasPipelines_3.set('fieldLabels', {'TYPEPIPE': 'inline label', 'Operator': 'inline label', });
lyr_Gas_4.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_Nuclear_5.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_Hydro_6.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_TxSolar_7.set('fieldLabels', {'ANN_LATILT': 'inline label', });
lyr_Solar_8.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_WindSpeedRange_9.set('fieldLabels', {'WindSpeed': 'inline label', });
lyr_Wind_10.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Zip': 'no label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_Wind_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});