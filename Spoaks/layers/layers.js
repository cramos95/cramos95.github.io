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
var lyr_Sat1_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sat1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sat1_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10866146.712953, 3494651.219907, -10864350.462527, 3497171.329591]
                            })
                        });var lyr_Sat2_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sat2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sat2_1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10866146.712953, 3494651.219907, -10864350.462527, 3497171.329591]
                            })
                        });var format_Spoaks_2 = new ol.format.GeoJSON();
var features_Spoaks_2 = format_Spoaks_2.readFeatures(json_Spoaks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spoaks_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Spoaks_2.addFeatures(features_Spoaks_2);var lyr_Spoaks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Spoaks_2, 
                style: style_Spoaks_2,
                title: '<img src="styles/legend/Spoaks_2.png" /> Spoaks'
            });var format_Elevation_3 = new ol.format.GeoJSON();
var features_Elevation_3 = format_Elevation_3.readFeatures(json_Elevation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elevation_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Elevation_3.addFeatures(features_Elevation_3);var lyr_Elevation_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Elevation_3, 
                style: style_Elevation_3,
                title: '<img src="styles/legend/Elevation_3.png" /> Elevation'
            });var format_Gate_4 = new ol.format.GeoJSON();
var features_Gate_4 = format_Gate_4.readFeatures(json_Gate_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gate_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gate_4.addFeatures(features_Gate_4);var lyr_Gate_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gate_4, 
                style: style_Gate_4,
                title: '<img src="styles/legend/Gate_4.png" /> Gate'
            });var format_Start_5 = new ol.format.GeoJSON();
var features_Start_5 = format_Start_5.readFeatures(json_Start_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Start_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Start_5.addFeatures(features_Start_5);var lyr_Start_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Start_5, 
                style: style_Start_5,
                title: '<img src="styles/legend/Start_5.png" /> Start'
            });var format_Signup_6 = new ol.format.GeoJSON();
var features_Signup_6 = format_Signup_6.readFeatures(json_Signup_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signup_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Signup_6.addFeatures(features_Signup_6);var lyr_Signup_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signup_6, 
                style: style_Signup_6,
                title: '<img src="styles/legend/Signup_6.png" /> Sign-up'
            });var format_SXS_7 = new ol.format.GeoJSON();
var features_SXS_7 = format_SXS_7.readFeatures(json_SXS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SXS_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SXS_7.addFeatures(features_SXS_7);var lyr_SXS_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SXS_7, 
                style: style_SXS_7,
                title: '<img src="styles/legend/SXS_7.png" /> SXS'
            });var format_BikeCourse_8 = new ol.format.GeoJSON();
var features_BikeCourse_8 = format_BikeCourse_8.readFeatures(json_BikeCourse_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeCourse_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BikeCourse_8.addFeatures(features_BikeCourse_8);var lyr_BikeCourse_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BikeCourse_8, 
                style: style_BikeCourse_8,
                title: '<img src="styles/legend/BikeCourse_8.png" /> BikeCourse'
            });

lyr_Sat1_0.setVisible(true);lyr_Sat2_1.setVisible(true);lyr_Spoaks_2.setVisible(true);lyr_Elevation_3.setVisible(true);lyr_Gate_4.setVisible(true);lyr_Start_5.setVisible(true);lyr_Signup_6.setVisible(true);lyr_SXS_7.setVisible(true);lyr_BikeCourse_8.setVisible(true);
var layersList = [baseLayer,lyr_Sat1_0,lyr_Sat2_1,lyr_Spoaks_2,lyr_Elevation_3,lyr_Gate_4,lyr_Start_5,lyr_Signup_6,lyr_SXS_7,lyr_BikeCourse_8];
lyr_Spoaks_2.set('fieldAliases', {'id': 'id', });
lyr_Elevation_3.set('fieldAliases', {'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'CLOSED_CON': 'CLOSED_CON', 'gm_layer_2': 'gm_layer_2', 'gm_type_2': 'gm_type_2', 'name_2': 'name_2', 'layer_2': 'layer_2', 'elevation_': 'elevation_', 'closed_c_1': 'closed_c_1', 'gm_layer_3': 'gm_layer_3', 'gm_type_3': 'gm_type_3', 'name_3': 'name_3', 'layer_3': 'layer_3', 'elevatio_1': 'elevatio_1', 'closed_c_2': 'closed_c_2', 'gm_layer_1': 'gm_layer_1', 'gm_type_2_': 'gm_type_2_', 'name_2_2': 'name_2_2', 'layer_2_2': 'layer_2_2', 'elevatio_2': 'elevatio_2', 'closed_c_3': 'closed_c_3', });
lyr_Gate_4.set('fieldAliases', {'id': 'id', 'Feature': 'Feature', 'Location': 'Location', });
lyr_Start_5.set('fieldAliases', {'id': 'id', 'Feature': 'Feature', });
lyr_Signup_6.set('fieldAliases', {'id': 'id', 'Feature': 'Feature', 'feature_1': 'feature_1', });
lyr_SXS_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'Video': 'Video', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_Track': 'gpxx_Track', 'gpxtrkoffx': 'gpxtrkoffx', 'gpxtrkx_Tr': 'gpxtrkx_Tr', 'Name_1': 'Name_1', 'Miles': 'Miles', });
lyr_BikeCourse_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'Miles': 'Miles', });
lyr_Spoaks_2.set('fieldImages', {'id': 'Hidden', });
lyr_Elevation_3.set('fieldImages', {'GM_LAYER': 'Hidden', 'GM_TYPE': 'Hidden', 'NAME': 'Hidden', 'LAYER': 'Hidden', 'ELEVATION': 'TextEdit', 'CLOSED_CON': 'Hidden', 'gm_layer_2': 'Hidden', 'gm_type_2': 'Hidden', 'name_2': 'Hidden', 'layer_2': 'Hidden', 'elevation_': 'Hidden', 'closed_c_1': 'Hidden', 'gm_layer_3': 'Hidden', 'gm_type_3': 'Hidden', 'name_3': 'Hidden', 'layer_3': 'Hidden', 'elevatio_1': 'TextEdit', 'closed_c_2': 'Hidden', 'gm_layer_1': 'Hidden', 'gm_type_2_': 'Hidden', 'name_2_2': 'Hidden', 'layer_2_2': 'Hidden', 'elevatio_2': 'Hidden', 'closed_c_3': 'Hidden', });
lyr_Gate_4.set('fieldImages', {'id': 'Hidden', 'Feature': 'TextEdit', 'Location': 'TextEdit', });
lyr_Start_5.set('fieldImages', {'id': 'Hidden', 'Feature': 'TextEdit', });
lyr_Signup_6.set('fieldImages', {'id': 'Hidden', 'Feature': 'TextEdit', 'feature_1': 'TextEdit', });
lyr_SXS_7.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'Video': 'TextEdit', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_Track': 'Hidden', 'gpxtrkoffx': 'Hidden', 'gpxtrkx_Tr': 'Hidden', 'Name_1': 'Hidden', 'Miles': 'TextEdit', });
lyr_BikeCourse_8.set('fieldImages', {'name': 'TextEdit', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'Miles': 'TextEdit', });
lyr_Spoaks_2.set('fieldLabels', {});
lyr_Elevation_3.set('fieldLabels', {'ELEVATION': 'no label', 'elevatio_1': 'no label', });
lyr_Gate_4.set('fieldLabels', {'Feature': 'no label', 'Location': 'no label', });
lyr_Start_5.set('fieldLabels', {'Feature': 'no label', });
lyr_Signup_6.set('fieldLabels', {'Feature': 'no label', 'feature_1': 'no label', });
lyr_SXS_7.set('fieldLabels', {'Video': 'inline label', 'Miles': 'inline label', });
lyr_BikeCourse_8.set('fieldLabels', {'name': 'no label', 'Miles': 'inline label', });
lyr_BikeCourse_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});