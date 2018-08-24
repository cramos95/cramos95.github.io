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
var format_CoalMW_0 = new ol.format.GeoJSON();
var features_CoalMW_0 = format_CoalMW_0.readFeatures(json_CoalMW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoalMW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CoalMW_0.addFeatures(features_CoalMW_0);var lyr_CoalMW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoalMW_0, 
                style: style_CoalMW_0,
    title: 'Coal (MW)<br />\
    <img src="styles/legend/CoalMW_0_0.png" />  305 - 470 <br />\
    <img src="styles/legend/CoalMW_0_1.png" />  470 - 840 <br />\
    <img src="styles/legend/CoalMW_0_2.png" />  840 - 1345 <br />\
    <img src="styles/legend/CoalMW_0_3.png" />  1345 - 2410 <br />\
    <img src="styles/legend/CoalMW_0_4.png" />  2410 - 3675 <br />'
        });var format_TxSedBasins_1 = new ol.format.GeoJSON();
var features_TxSedBasins_1 = format_TxSedBasins_1.readFeatures(json_TxSedBasins_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TxSedBasins_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TxSedBasins_1.addFeatures(features_TxSedBasins_1);var lyr_TxSedBasins_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TxSedBasins_1, 
                style: style_TxSedBasins_1,
                title: '<img src="styles/legend/TxSedBasins_1.png" /> TxSedBasins'
            });var format_GasPipelines_2 = new ol.format.GeoJSON();
var features_GasPipelines_2 = format_GasPipelines_2.readFeatures(json_GasPipelines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasPipelines_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GasPipelines_2.addFeatures(features_GasPipelines_2);var lyr_GasPipelines_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GasPipelines_2, 
                style: style_GasPipelines_2,
                title: '<img src="styles/legend/GasPipelines_2.png" /> GasPipelines'
            });var format_GasMW_3 = new ol.format.GeoJSON();
var features_GasMW_3 = format_GasMW_3.readFeatures(json_GasMW_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasMW_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GasMW_3.addFeatures(features_GasMW_3);var lyr_GasMW_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GasMW_3, 
                style: style_GasMW_3,
    title: 'Gas (MW)<br />\
    <img src="styles/legend/GasMW_3_0.png" />  1 - 239 <br />\
    <img src="styles/legend/GasMW_3_1.png" />  239 - 536 <br />\
    <img src="styles/legend/GasMW_3_2.png" />  536 - 860 <br />\
    <img src="styles/legend/GasMW_3_3.png" />  860 - 1265 <br />\
    <img src="styles/legend/GasMW_3_4.png" />  1265 - 1838 <br />'
        });var format_NuclearMW_4 = new ol.format.GeoJSON();
var features_NuclearMW_4 = format_NuclearMW_4.readFeatures(json_NuclearMW_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NuclearMW_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NuclearMW_4.addFeatures(features_NuclearMW_4);var lyr_NuclearMW_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NuclearMW_4, 
                style: style_NuclearMW_4,
    title: 'Nuclear (MW)<br />\
    <img src="styles/legend/NuclearMW_4_0.png" />  2400<br />\
    <img src="styles/legend/NuclearMW_4_1.png" />  2560<br />'
        });var format_HydroMW_5 = new ol.format.GeoJSON();
var features_HydroMW_5 = format_HydroMW_5.readFeatures(json_HydroMW_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HydroMW_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_HydroMW_5.addFeatures(features_HydroMW_5);var lyr_HydroMW_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HydroMW_5, 
                style: style_HydroMW_5,
    title: 'Hydro (MW)<br />\
    <img src="styles/legend/HydroMW_5_0.png" />  1 - 17 <br />\
    <img src="styles/legend/HydroMW_5_1.png" />  17 - 42 <br />\
    <img src="styles/legend/HydroMW_5_2.png" />  42 - 58 <br />\
    <img src="styles/legend/HydroMW_5_3.png" />  58 - 80 <br />\
    <img src="styles/legend/HydroMW_5_4.png" />  80 - 108 <br />'
        });var format_TxSolarkWhm2day_6 = new ol.format.GeoJSON();
var features_TxSolarkWhm2day_6 = format_TxSolarkWhm2day_6.readFeatures(json_TxSolarkWhm2day_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TxSolarkWhm2day_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TxSolarkWhm2day_6.addFeatures(features_TxSolarkWhm2day_6);var lyr_TxSolarkWhm2day_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TxSolarkWhm2day_6, 
                style: style_TxSolarkWhm2day_6,
    title: 'TxSolar (kWh/m2/day)<br />\
    <img src="styles/legend/TxSolarkWhm2day_6_0.png" />  4.86 - 5.29 <br />\
    <img src="styles/legend/TxSolarkWhm2day_6_1.png" />  5.29 - 5.65 <br />\
    <img src="styles/legend/TxSolarkWhm2day_6_2.png" />  5.65 - 6.00 <br />\
    <img src="styles/legend/TxSolarkWhm2day_6_3.png" />  6.00 - 6.34 <br />\
    <img src="styles/legend/TxSolarkWhm2day_6_4.png" />  6.34 - 6.79 <br />'
        });var format_SolarMW_7 = new ol.format.GeoJSON();
var features_SolarMW_7 = format_SolarMW_7.readFeatures(json_SolarMW_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolarMW_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SolarMW_7.addFeatures(features_SolarMW_7);var lyr_SolarMW_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolarMW_7, 
                style: style_SolarMW_7,
    title: 'Solar (MW)<br />\
    <img src="styles/legend/SolarMW_7_0.png" />  1.0 - 5.5 <br />\
    <img src="styles/legend/SolarMW_7_1.png" />  5.5 - 15.4 <br />\
    <img src="styles/legend/SolarMW_7_2.png" />  15.4 - 50.0 <br />\
    <img src="styles/legend/SolarMW_7_3.png" />  50.0 - 118.5 <br />\
    <img src="styles/legend/SolarMW_7_4.png" />  118.5 - 157.5 <br />'
        });var format_WindSpeedRange_8 = new ol.format.GeoJSON();
var features_WindSpeedRange_8 = format_WindSpeedRange_8.readFeatures(json_WindSpeedRange_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindSpeedRange_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_WindSpeedRange_8.addFeatures(features_WindSpeedRange_8);var lyr_WindSpeedRange_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WindSpeedRange_8, 
                style: style_WindSpeedRange_8,
    title: 'WindSpeedRange<br />\
    <img src="styles/legend/WindSpeedRange_8_0.png" />  1.0 - 1.0 <br />\
    <img src="styles/legend/WindSpeedRange_8_1.png" />  1.0 - 2.0 <br />\
    <img src="styles/legend/WindSpeedRange_8_2.png" />  2.0 - 3.0 <br />\
    <img src="styles/legend/WindSpeedRange_8_3.png" />  3.0 - 4.0 <br />\
    <img src="styles/legend/WindSpeedRange_8_4.png" />  4.0 - 5.0 <br />\
    <img src="styles/legend/WindSpeedRange_8_5.png" />  5.0 - 6.0 <br />'
        });var format_WindMW_9 = new ol.format.GeoJSON();
var features_WindMW_9 = format_WindMW_9.readFeatures(json_WindMW_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindMW_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_WindMW_9.addFeatures(features_WindMW_9);var lyr_WindMW_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WindMW_9, 
                style: style_WindMW_9,
    title: 'Wind (MW)<br />\
    <img src="styles/legend/WindMW_9_0.png" />  3 - 57 <br />\
    <img src="styles/legend/WindMW_9_1.png" />  57 - 135 <br />\
    <img src="styles/legend/WindMW_9_2.png" />  135 - 211 <br />\
    <img src="styles/legend/WindMW_9_3.png" />  211 - 376 <br />\
    <img src="styles/legend/WindMW_9_4.png" />  376 - 736 <br />'
        });

lyr_CoalMW_0.setVisible(false);lyr_TxSedBasins_1.setVisible(false);lyr_GasPipelines_2.setVisible(false);lyr_GasMW_3.setVisible(false);lyr_NuclearMW_4.setVisible(false);lyr_HydroMW_5.setVisible(false);lyr_TxSolarkWhm2day_6.setVisible(false);lyr_SolarMW_7.setVisible(false);lyr_WindSpeedRange_8.setVisible(true);lyr_WindMW_9.setVisible(true);
var layersList = [baseLayer,lyr_CoalMW_0,lyr_TxSedBasins_1,lyr_GasPipelines_2,lyr_GasMW_3,lyr_NuclearMW_4,lyr_HydroMW_5,lyr_TxSolarkWhm2day_6,lyr_SolarMW_7,lyr_WindSpeedRange_8,lyr_WindMW_9];
lyr_CoalMW_0.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TxSedBasins_1.set('fieldAliases', {'NAME': 'NAME', 'Area_sq_km': 'Area_sq_km', 'Area_sq_mi': 'Area_sq_mi', });
lyr_GasPipelines_2.set('fieldAliases', {'TYPEPIPE': 'TYPEPIPE', 'Operator': 'Operator', 'Shape_Leng': 'Shape_Leng', });
lyr_GasMW_3.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_NuclearMW_4.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_HydroMW_5.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TxSolarkWhm2day_6.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'ANN_LATILT': 'ANN_LATILT', 'JAN': 'JAN', 'FEB': 'FEB', 'MAR': 'MAR', 'APR': 'APR', 'MAY': 'MAY', 'JUN': 'JUN', 'JUL': 'JUL', 'AUG': 'AUG', 'SEP': 'SEP', 'OCT': 'OCT', 'NOV': 'NOV', 'DEC': 'DEC', });
lyr_SolarMW_7.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_WindSpeedRange_8.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'WindSpeed': 'WindSpeed', });
lyr_WindMW_9.set('fieldAliases', {'Plant_Code': 'Plant_Code', 'Plant_Name': 'Plant_Name', 'Utility_Na': 'Utility_Na', 'City': 'City', 'County': 'County', 'Zip': 'Zip', 'Total_MW': 'Total_MW', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CoalMW_0.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TxSedBasins_1.set('fieldImages', {'NAME': 'TextEdit', 'Area_sq_km': 'TextEdit', 'Area_sq_mi': 'TextEdit', });
lyr_GasPipelines_2.set('fieldImages', {'TYPEPIPE': 'TextEdit', 'Operator': 'TextEdit', 'Shape_Leng': 'Hidden', });
lyr_GasMW_3.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_NuclearMW_4.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_HydroMW_5.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TxSolarkWhm2day_6.set('fieldImages', {'ID': 'Hidden', 'GRIDCODE': 'Hidden', 'ANN_LATILT': 'TextEdit', 'JAN': 'Hidden', 'FEB': 'Hidden', 'MAR': 'Hidden', 'APR': 'Hidden', 'MAY': 'Hidden', 'JUN': 'Hidden', 'JUL': 'Hidden', 'AUG': 'Hidden', 'SEP': 'Hidden', 'OCT': 'Hidden', 'NOV': 'Hidden', 'DEC': 'Hidden', });
lyr_SolarMW_7.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_WindSpeedRange_8.set('fieldImages', {'ID': 'Hidden', 'GRIDCODE': 'Hidden', 'WindSpeed': 'TextEdit', });
lyr_WindMW_9.set('fieldImages', {'Plant_Code': 'TextEdit', 'Plant_Name': 'TextEdit', 'Utility_Na': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Zip': 'Hidden', 'Total_MW': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CoalMW_0.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_TxSedBasins_1.set('fieldLabels', {'NAME': 'inline label', 'Area_sq_km': 'inline label', 'Area_sq_mi': 'inline label', });
lyr_GasPipelines_2.set('fieldLabels', {'TYPEPIPE': 'inline label', 'Operator': 'inline label', });
lyr_GasMW_3.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_NuclearMW_4.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_HydroMW_5.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_TxSolarkWhm2day_6.set('fieldLabels', {'ANN_LATILT': 'inline label', });
lyr_SolarMW_7.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_WindSpeedRange_8.set('fieldLabels', {'WindSpeed': 'inline label', });
lyr_WindMW_9.set('fieldLabels', {'Plant_Code': 'inline label', 'Plant_Name': 'inline label', 'Utility_Na': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Total_MW': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_WindMW_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});