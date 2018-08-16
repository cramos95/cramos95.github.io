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
            });var format_RockUnits_1 = new ol.format.GeoJSON();
var features_RockUnits_1 = format_RockUnits_1.readFeatures(json_RockUnits_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RockUnits_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RockUnits_1.addFeatures(features_RockUnits_1);var lyr_RockUnits_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RockUnits_1, 
                style: style_RockUnits_1,
    title: 'RockUnits<br />\
    <img src="styles/legend/RockUnits_1_0.png" /> Ch<br />\
    <img src="styles/legend/RockUnits_1_1.png" /> Clc<br />\
    <img src="styles/legend/RockUnits_1_2.png" /> Cpw<br />\
    <img src="styles/legend/RockUnits_1_3.png" /> Cs<br />\
    <img src="styles/legend/RockUnits_1_4.png" /> EPAc<br />\
    <img src="styles/legend/RockUnits_1_5.png" /> Es<br />\
    <img src="styles/legend/RockUnits_1_6.png" /> IPcn<br />\
    <img src="styles/legend/RockUnits_1_7.png" /> IPmf<br />\
    <img src="styles/legend/RockUnits_1_8.png" /> IPsw<br />\
    <img src="styles/legend/RockUnits_1_9.png" /> Ka<br />\
    <img src="styles/legend/RockUnits_1_10.png" /> Kau<br />\
    <img src="styles/legend/RockUnits_1_11.png" /> Kbd<br />\
    <img src="styles/legend/RockUnits_1_12.png" /> Kbo<br />\
    <img src="styles/legend/RockUnits_1_13.png" /> Kbu<br />\
    <img src="styles/legend/RockUnits_1_14.png" /> Kcs<br />\
    <img src="styles/legend/RockUnits_1_15.png" /> Kdg<br />\
    <img src="styles/legend/RockUnits_1_16.png" /> Kdr<br />\
    <img src="styles/legend/RockUnits_1_17.png" /> Kdv<br />\
    <img src="styles/legend/RockUnits_1_18.png" /> Keb<br />\
    <img src="styles/legend/RockUnits_1_19.png" /> Kec<br />\
    <img src="styles/legend/RockUnits_1_20.png" /> Ked<br />\
    <img src="styles/legend/RockUnits_1_21.png" /> Kef<br />\
    <img src="styles/legend/RockUnits_1_22.png" /> Kfr<br />\
    <img src="styles/legend/RockUnits_1_23.png" /> Kgr<br />\
    <img src="styles/legend/RockUnits_1_24.png" /> Kgt<br />\
    <img src="styles/legend/RockUnits_1_25.png" /> Kh<br />\
    <img src="styles/legend/RockUnits_1_26.png" /> Ki<br />\
    <img src="styles/legend/RockUnits_1_27.png" /> Knb<br />\
    <img src="styles/legend/RockUnits_1_28.png" /> Knm<br />\
    <img src="styles/legend/RockUnits_1_29.png" /> Knt<br />\
    <img src="styles/legend/RockUnits_1_30.png" /> Ko<br />\
    <img src="styles/legend/RockUnits_1_31.png" /> Kpg<br />\
    <img src="styles/legend/RockUnits_1_32.png" /> Kpgr<br />\
    <img src="styles/legend/RockUnits_1_33.png" /> Ksa<br />\
    <img src="styles/legend/RockUnits_1_34.png" /> Ktp<br />\
    <img src="styles/legend/RockUnits_1_35.png" /> Kwa<br />\
    <img src="styles/legend/RockUnits_1_36.png" /> MD<br />\
    <img src="styles/legend/RockUnits_1_37.png" /> Og<br />\
    <img src="styles/legend/RockUnits_1_38.png" /> Oh<br />\
    <img src="styles/legend/RockUnits_1_39.png" /> Ot<br />\
    <img src="styles/legend/RockUnits_1_40.png" /> PAh<br />\
    <img src="styles/legend/RockUnits_1_41.png" /> PAmi<br />\
    <img src="styles/legend/RockUnits_1_42.png" /> PAs<br />\
    <img src="styles/legend/RockUnits_1_43.png" /> pCb<br />\
    <img src="styles/legend/RockUnits_1_44.png" /> pCc<br />\
    <img src="styles/legend/RockUnits_1_45.png" /> pCl<br />\
    <img src="styles/legend/RockUnits_1_46.png" /> pCm<br />\
    <img src="styles/legend/RockUnits_1_47.png" /> pCp<br />\
    <img src="styles/legend/RockUnits_1_48.png" /> pCr<br />\
    <img src="styles/legend/RockUnits_1_49.png" /> pCt<br />\
    <img src="styles/legend/RockUnits_1_50.png" /> pCv<br />\
    <img src="styles/legend/RockUnits_1_51.png" /> pCy<br />\
    <img src="styles/legend/RockUnits_1_52.png" /> Pow<br />\
    <img src="styles/legend/RockUnits_1_53.png" /> Qal<br />\
    <img src="styles/legend/RockUnits_1_54.png" /> Qao<br />\
    <img src="styles/legend/RockUnits_1_55.png" /> Qc<br />\
    <img src="styles/legend/RockUnits_1_56.png" /> Qhg<br />\
    <img src="styles/legend/RockUnits_1_57.png" /> Qle<br />\
    <img src="styles/legend/RockUnits_1_58.png" /> Qls<br />\
    <img src="styles/legend/RockUnits_1_59.png" /> Qo<br />\
    <img src="styles/legend/RockUnits_1_60.png" /> Qp<br />\
    <img src="styles/legend/RockUnits_1_61.png" /> Qt<br />\
    <img src="styles/legend/RockUnits_1_62.png" /> QTu<br />\
    <img src="styles/legend/RockUnits_1_63.png" /> Qu<br />\
    <img src="styles/legend/RockUnits_1_64.png" /> Water<br />\
    <img src="styles/legend/RockUnits_1_65.png" /> <br />'
        });var format_GeoStops_2 = new ol.format.GeoJSON();
var features_GeoStops_2 = format_GeoStops_2.readFeatures(json_GeoStops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoStops_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GeoStops_2.addFeatures(features_GeoStops_2);var lyr_GeoStops_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeoStops_2, 
                style: style_GeoStops_2,
                title: '<img src="styles/legend/GeoStops_2.png" /> GeoStops'
            });

lyr_Counties_0.setVisible(true);lyr_RockUnits_1.setVisible(true);lyr_GeoStops_2.setVisible(true);
var layersList = [baseLayer,lyr_Counties_0,lyr_RockUnits_1,lyr_GeoStops_2];
lyr_Counties_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY_NM': 'CNTY_NM', 'CNTY_NBR': 'CNTY_NBR', 'FIPS': 'FIPS', 'CREATE_USE': 'CREATE_USE', 'CREATE_DT': 'CREATE_DT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RockUnits_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TXGEOL_DD_': 'TXGEOL_DD_', 'TXGEOL_DD1': 'TXGEOL_DD1', 'ORIG_LABEL': 'ORIG_LABEL', 'SGMC_LABEL': 'SGMC_LABEL', 'UNIT_LINK': 'UNIT_LINK', 'SOURCE': 'SOURCE', 'UNIT_AGE': 'UNIT_AGE', 'TXunits__2': 'TXunits__2', 'TXunits_ST': 'TXunits_ST', 'ROCKTYPE1': 'ROCKTYPE1', 'ROCKTYPE2': 'ROCKTYPE2', 'TXunits_OR': 'TXunits_OR', 'TXunits_MA': 'TXunits_MA', 'TXunits_UN': 'TXunits_UN', 'TXunits__1': 'TXunits__1', 'TXunits_RO': 'TXunits_RO', 'TXunits__3': 'TXunits__3', 'TXunits__4': 'TXunits__4', 'Null': 'Null', });
lyr_GeoStops_2.set('fieldAliases', {'COUNTY': 'COUNTY', 'LOCATION': 'LOCATION', 'ACCESS': 'ACCESS', 'AGE': 'AGE', 'FEATURE': 'FEATURE', 'DESCRIPTIO': 'DESCRIPTIO', 'Lat': 'Lat', 'Long': 'Long', 'Picture': 'Picture', });
lyr_Counties_0.set('fieldImages', {'OBJECTID': 'Hidden', 'CNTY_NM': 'TextEdit', 'CNTY_NBR': 'Hidden', 'FIPS': 'Hidden', 'CREATE_USE': 'Hidden', 'CREATE_DT': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_RockUnits_1.set('fieldImages', {'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'TXGEOL_DD_': 'Hidden', 'TXGEOL_DD1': 'Hidden', 'ORIG_LABEL': 'TextEdit', 'SGMC_LABEL': 'Hidden', 'UNIT_LINK': 'Hidden', 'SOURCE': 'Hidden', 'UNIT_AGE': 'TextEdit', 'TXunits__2': 'TextEdit', 'TXunits_ST': 'TextEdit', 'ROCKTYPE1': 'TextEdit', 'ROCKTYPE2': 'TextEdit', 'TXunits_OR': 'Hidden', 'TXunits_MA': 'Hidden', 'TXunits_UN': 'Hidden', 'TXunits__1': 'Hidden', 'TXunits_RO': 'Hidden', 'TXunits__3': 'Hidden', 'TXunits__4': 'Hidden', 'Null': 'TextEdit', });
lyr_GeoStops_2.set('fieldImages', {'COUNTY': 'TextEdit', 'LOCATION': 'TextEdit', 'ACCESS': 'TextEdit', 'AGE': 'TextEdit', 'FEATURE': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Picture': 'TextEdit', });
lyr_Counties_0.set('fieldLabels', {'CNTY_NM': 'inline label', });
lyr_RockUnits_1.set('fieldLabels', {'ORIG_LABEL': 'no label', 'UNIT_AGE': 'header label', 'TXunits__2': 'no label', 'TXunits_ST': 'no label', 'ROCKTYPE1': 'inline label', 'ROCKTYPE2': 'inline label', 'Null': 'no label', });
lyr_GeoStops_2.set('fieldLabels', {'COUNTY': 'inline label', 'LOCATION': 'no label', 'ACCESS': 'no label', 'AGE': 'inline label', 'FEATURE': 'inline label', 'DESCRIPTIO': 'inline label', 'Lat': 'no label', 'Long': 'no label', 'Picture': 'no label', });
lyr_GeoStops_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});