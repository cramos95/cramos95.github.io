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
var format_Campground_0 = new ol.format.GeoJSON();
var features_Campground_0 = format_Campground_0.readFeatures(json_Campground_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campground_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Campground_0.addFeatures(features_Campground_0);var lyr_Campground_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campground_0, 
                style: style_Campground_0,
                title: '<img src="styles/legend/Campground_0.png" /> Campground'
            });var format_EntranceRoad_1 = new ol.format.GeoJSON();
var features_EntranceRoad_1 = format_EntranceRoad_1.readFeatures(json_EntranceRoad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EntranceRoad_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EntranceRoad_1.addFeatures(features_EntranceRoad_1);var lyr_EntranceRoad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EntranceRoad_1, 
                style: style_EntranceRoad_1,
                title: '<img src="styles/legend/EntranceRoad_1.png" /> EntranceRoad'
            });var format_GeortzBound_2 = new ol.format.GeoJSON();
var features_GeortzBound_2 = format_GeortzBound_2.readFeatures(json_GeortzBound_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeortzBound_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GeortzBound_2.addFeatures(features_GeortzBound_2);var lyr_GeortzBound_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeortzBound_2, 
                style: style_GeortzBound_2,
                title: '<img src="styles/legend/GeortzBound_2.png" /> GeortzBound'
            });var format_Start_3 = new ol.format.GeoJSON();
var features_Start_3 = format_Start_3.readFeatures(json_Start_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Start_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Start_3.addFeatures(features_Start_3);var lyr_Start_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Start_3, 
                style: style_Start_3,
                title: '<img src="styles/legend/Start_3.png" /> Start'
            });var format_SXS_4 = new ol.format.GeoJSON();
var features_SXS_4 = format_SXS_4.readFeatures(json_SXS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SXS_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SXS_4.addFeatures(features_SXS_4);var lyr_SXS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SXS_4, 
                style: style_SXS_4,
                title: '<img src="styles/legend/SXS_4.png" /> SXS'
            });var format_SignUp_5 = new ol.format.GeoJSON();
var features_SignUp_5 = format_SignUp_5.readFeatures(json_SignUp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignUp_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SignUp_5.addFeatures(features_SignUp_5);var lyr_SignUp_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SignUp_5, 
                style: style_SignUp_5,
                title: '<img src="styles/legend/SignUp_5.png" /> SignUp'
            });

lyr_Campground_0.setVisible(true);lyr_EntranceRoad_1.setVisible(true);lyr_GeortzBound_2.setVisible(true);lyr_Start_3.setVisible(true);lyr_SXS_4.setVisible(true);lyr_SignUp_5.setVisible(true);
var layersList = [baseLayer,lyr_Campground_0,lyr_EntranceRoad_1,lyr_GeortzBound_2,lyr_Start_3,lyr_SXS_4,lyr_SignUp_5];
lyr_Campground_0.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_EntranceRoad_1.set('fieldAliases', {'id': 'id', });
lyr_GeortzBound_2.set('fieldAliases', {'id': 'id', });
lyr_Start_3.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_SXS_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_Track': 'gpxx_Track', 'gpxtrkx_Tr': 'gpxtrkx_Tr', 'Length': 'Length', 'Miles': 'Miles', });
lyr_SignUp_5.set('fieldAliases', {'id': 'id', 'Label': 'Label', });
lyr_Campground_0.set('fieldImages', {'id': 'Hidden', 'Label': 'TextEdit', });
lyr_EntranceRoad_1.set('fieldImages', {'id': 'Hidden', });
lyr_GeortzBound_2.set('fieldImages', {'id': 'Hidden', });
lyr_Start_3.set('fieldImages', {'id': 'Hidden', 'Label': 'TextEdit', });
lyr_SXS_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'gpxx_Track': 'TextEdit', 'gpxtrkx_Tr': 'TextEdit', 'Length': 'TextEdit', 'Miles': 'TextEdit', });
lyr_SignUp_5.set('fieldImages', {'id': 'Hidden', 'Label': 'TextEdit', });
lyr_Campground_0.set('fieldLabels', {'Label': 'no label', });
lyr_EntranceRoad_1.set('fieldLabels', {});
lyr_GeortzBound_2.set('fieldLabels', {});
lyr_Start_3.set('fieldLabels', {'Label': 'no label', });
lyr_SXS_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_Track': 'no label', 'gpxtrkx_Tr': 'no label', 'Length': 'no label', 'Miles': 'inline label', });
lyr_SignUp_5.set('fieldLabels', {'Label': 'no label', });
lyr_SignUp_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});