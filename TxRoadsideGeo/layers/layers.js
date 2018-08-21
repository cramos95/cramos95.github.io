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
            });var format_Rock_Units_1 = new ol.format.GeoJSON();
var features_Rock_Units_1 = format_Rock_Units_1.readFeatures(json_Rock_Units_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rock_Units_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rock_Units_1.addFeatures(features_Rock_Units_1);var lyr_Rock_Units_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rock_Units_1, 
                style: style_Rock_Units_1,
    title: 'Rock_Units<br />\
    <img src="styles/legend/Rock_Units_1_0.png" /> Ch<br />\
    <img src="styles/legend/Rock_Units_1_1.png" /> Clc<br />\
    <img src="styles/legend/Rock_Units_1_2.png" /> Cpw<br />\
    <img src="styles/legend/Rock_Units_1_3.png" /> Cs<br />\
    <img src="styles/legend/Rock_Units_1_4.png" /> Ed<br />\
    <img src="styles/legend/Rock_Units_1_5.png" /> Ehh<br />\
    <img src="styles/legend/Rock_Units_1_6.png" /> Ei<br />\
    <img src="styles/legend/Rock_Units_1_7.png" /> EPAc<br />\
    <img src="styles/legend/Rock_Units_1_8.png" /> Es<br />\
    <img src="styles/legend/Rock_Units_1_9.png" /> Ev<br />\
    <img src="styles/legend/Rock_Units_1_10.png" /> IPcn<br />\
    <img src="styles/legend/Rock_Units_1_11.png" /> IPd<br />\
    <img src="styles/legend/Rock_Units_1_12.png" /> IPgt<br />\
    <img src="styles/legend/Rock_Units_1_13.png" /> IPh<br />\
    <img src="styles/legend/Rock_Units_1_14.png" /> IPmf<br />\
    <img src="styles/legend/Rock_Units_1_15.png" /> IPMt<br />\
    <img src="styles/legend/Rock_Units_1_16.png" /> IPsw<br />\
    <img src="styles/legend/Rock_Units_1_17.png" /> Ka<br />\
    <img src="styles/legend/Rock_Units_1_18.png" /> Kag<br />\
    <img src="styles/legend/Rock_Units_1_19.png" /> Kau<br />\
    <img src="styles/legend/Rock_Units_1_20.png" /> Kbd<br />\
    <img src="styles/legend/Rock_Units_1_21.png" /> Kbi<br />\
    <img src="styles/legend/Rock_Units_1_22.png" /> Kbo<br />\
    <img src="styles/legend/Rock_Units_1_23.png" /> Kbu<br />\
    <img src="styles/legend/Rock_Units_1_24.png" /> Kcs<br />\
    <img src="styles/legend/Rock_Units_1_25.png" /> Kdg<br />\
    <img src="styles/legend/Rock_Units_1_26.png" /> Kdr<br />\
    <img src="styles/legend/Rock_Units_1_27.png" /> Kdv<br />\
    <img src="styles/legend/Rock_Units_1_28.png" /> Keb<br />\
    <img src="styles/legend/Rock_Units_1_29.png" /> Kec<br />\
    <img src="styles/legend/Rock_Units_1_30.png" /> Ked<br />\
    <img src="styles/legend/Rock_Units_1_31.png" /> Kef<br />\
    <img src="styles/legend/Rock_Units_1_32.png" /> Kem<br />\
    <img src="styles/legend/Rock_Units_1_33.png" /> Kfr<br />\
    <img src="styles/legend/Rock_Units_1_34.png" /> Kg<br />\
    <img src="styles/legend/Rock_Units_1_35.png" /> Kgr<br />\
    <img src="styles/legend/Rock_Units_1_36.png" /> Kgt<br />\
    <img src="styles/legend/Rock_Units_1_37.png" /> Kh<br />\
    <img src="styles/legend/Rock_Units_1_38.png" /> Ki<br />\
    <img src="styles/legend/Rock_Units_1_39.png" /> Knb<br />\
    <img src="styles/legend/Rock_Units_1_40.png" /> Knm<br />\
    <img src="styles/legend/Rock_Units_1_41.png" /> Knt<br />\
    <img src="styles/legend/Rock_Units_1_42.png" /> Ko<br />\
    <img src="styles/legend/Rock_Units_1_43.png" /> Kp<br />\
    <img src="styles/legend/Rock_Units_1_44.png" /> Kpg<br />\
    <img src="styles/legend/Rock_Units_1_45.png" /> Kpgr<br />\
    <img src="styles/legend/Rock_Units_1_46.png" /> Kpt<br />\
    <img src="styles/legend/Rock_Units_1_47.png" /> Ksa<br />\
    <img src="styles/legend/Rock_Units_1_48.png" /> Kse<br />\
    <img src="styles/legend/Rock_Units_1_49.png" /> Kst<br />\
    <img src="styles/legend/Rock_Units_1_50.png" /> Ksu<br />\
    <img src="styles/legend/Rock_Units_1_51.png" /> Kt<br />\
    <img src="styles/legend/Rock_Units_1_52.png" /> Ktp<br />\
    <img src="styles/legend/Rock_Units_1_53.png" /> Kw<br />\
    <img src="styles/legend/Rock_Units_1_54.png" /> Kwa<br />\
    <img src="styles/legend/Rock_Units_1_55.png" /> Kwfr<br />\
    <img src="styles/legend/Rock_Units_1_56.png" /> Mb<br />\
    <img src="styles/legend/Rock_Units_1_57.png" /> MD<br />\
    <img src="styles/legend/Rock_Units_1_58.png" /> MDc<br />\
    <img src="styles/legend/Rock_Units_1_59.png" /> O<br />\
    <img src="styles/legend/Rock_Units_1_60.png" /> OC<br />\
    <img src="styles/legend/Rock_Units_1_61.png" /> Ocm<br />\
    <img src="styles/legend/Rock_Units_1_62.png" /> Ode<br />\
    <img src="styles/legend/Rock_Units_1_63.png" /> OEc<br />\
    <img src="styles/legend/Rock_Units_1_64.png" /> OEd<br />\
    <img src="styles/legend/Rock_Units_1_65.png" /> OEg<br />\
    <img src="styles/legend/Rock_Units_1_66.png" /> Og<br />\
    <img src="styles/legend/Rock_Units_1_67.png" /> Oh<br />\
    <img src="styles/legend/Rock_Units_1_68.png" /> Oi<br />\
    <img src="styles/legend/Rock_Units_1_69.png" /> Oj<br />\
    <img src="styles/legend/Rock_Units_1_70.png" /> Opf<br />\
    <img src="styles/legend/Rock_Units_1_71.png" /> Or<br />\
    <img src="styles/legend/Rock_Units_1_72.png" /> Os<br />\
    <img src="styles/legend/Rock_Units_1_73.png" /> Ot<br />\
    <img src="styles/legend/Rock_Units_1_74.png" /> PAbp<br />\
    <img src="styles/legend/Rock_Units_1_75.png" /> PAh<br />\
    <img src="styles/legend/Rock_Units_1_76.png" /> PAkj<br />\
    <img src="styles/legend/Rock_Units_1_77.png" /> PAmi<br />\
    <img src="styles/legend/Rock_Units_1_78.png" /> PAs<br />\
    <img src="styles/legend/Rock_Units_1_79.png" /> Pc<br />\
    <img src="styles/legend/Rock_Units_1_80.png" /> pCb<br />\
    <img src="styles/legend/Rock_Units_1_81.png" /> pCc<br />\
    <img src="styles/legend/Rock_Units_1_82.png" /> pCl<br />\
    <img src="styles/legend/Rock_Units_1_83.png" /> pCm<br />\
    <img src="styles/legend/Rock_Units_1_84.png" /> Pcm<br />\
    <img src="styles/legend/Rock_Units_1_85.png" /> pCp<br />\
    <img src="styles/legend/Rock_Units_1_86.png" /> pCr<br />\
    <img src="styles/legend/Rock_Units_1_87.png" /> pCt<br />\
    <img src="styles/legend/Rock_Units_1_88.png" /> pCv<br />\
    <img src="styles/legend/Rock_Units_1_89.png" /> pCy<br />\
    <img src="styles/legend/Rock_Units_1_90.png" /> Pln<br />\
    <img src="styles/legend/Rock_Units_1_91.png" /> Pobo<br />\
    <img src="styles/legend/Rock_Units_1_92.png" /> Pof<br />\
    <img src="styles/legend/Rock_Units_1_93.png" /> Pow<br />\
    <img src="styles/legend/Rock_Units_1_94.png" /> Psh<br />\
    <img src="styles/legend/Rock_Units_1_95.png" /> Pts<br />\
    <img src="styles/legend/Rock_Units_1_96.png" /> Pw<br />\
    <img src="styles/legend/Rock_Units_1_97.png" /> Qal<br />\
    <img src="styles/legend/Rock_Units_1_98.png" /> Qao<br />\
    <img src="styles/legend/Rock_Units_1_99.png" /> Qc<br />\
    <img src="styles/legend/Rock_Units_1_100.png" /> Qf<br />\
    <img src="styles/legend/Rock_Units_1_101.png" /> Qhg<br />\
    <img src="styles/legend/Rock_Units_1_102.png" /> Qle<br />\
    <img src="styles/legend/Rock_Units_1_103.png" /> Qls<br />\
    <img src="styles/legend/Rock_Units_1_104.png" /> Qo<br />\
    <img src="styles/legend/Rock_Units_1_105.png" /> Qp<br />\
    <img src="styles/legend/Rock_Units_1_106.png" /> Qt<br />\
    <img src="styles/legend/Rock_Units_1_107.png" /> QT<br />\
    <img src="styles/legend/Rock_Units_1_108.png" /> QTb<br />\
    <img src="styles/legend/Rock_Units_1_109.png" /> QTu<br />\
    <img src="styles/legend/Rock_Units_1_110.png" /> Qu<br />\
    <img src="styles/legend/Rock_Units_1_111.png" /> Ti<br />\
    <img src="styles/legend/Rock_Units_1_112.png" /> Water<br />\
    <img src="styles/legend/Rock_Units_1_113.png" /> <br />'
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

lyr_Counties_0.setVisible(true);lyr_Rock_Units_1.setVisible(false);lyr_GeoStops_2.setVisible(true);
var layersList = [baseLayer,lyr_Counties_0,lyr_Rock_Units_1,lyr_GeoStops_2];
lyr_Counties_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTY_NM': 'CNTY_NM', 'CNTY_NBR': 'CNTY_NBR', 'FIPS': 'FIPS', 'CREATE_USE': 'CREATE_USE', 'CREATE_DT': 'CREATE_DT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Rock_Units_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TXGEOL_DD_': 'TXGEOL_DD_', 'TXGEOL_DD1': 'TXGEOL_DD1', 'STRAT_CODE': 'STRAT_CODE', 'SGMC_LABEL': 'SGMC_LABEL', 'UNIT_LINK': 'UNIT_LINK', 'SOURCE': 'SOURCE', 'UNIT_AGE': 'UNIT_AGE', 'FEATURE': 'FEATURE', 'DESC': 'DESC', 'ROCKTYPE1': 'ROCKTYPE1', 'ROCKTYPE2': 'ROCKTYPE2', 'TXunits_OR': 'TXunits_OR', 'TXunits_MA': 'TXunits_MA', 'TXunits_UN': 'TXunits_UN', 'TXunits__1': 'TXunits__1', 'TXunits_RO': 'TXunits_RO', 'TXunits__3': 'TXunits__3', 'TXunits__4': 'TXunits__4', });
lyr_GeoStops_2.set('fieldAliases', {'COUNTY': 'COUNTY', 'LOCATION': 'LOCATION', 'ACCESS': 'ACCESS', 'AGE': 'AGE', 'FEATURE': 'FEATURE', 'DESCRIPTIO': 'DESCRIPTIO', 'Lat': 'Lat', 'Long': 'Long', 'Picture': 'Picture', });
lyr_Counties_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'CNTY_NM': 'TextEdit', 'CNTY_NBR': 'TextEdit', 'FIPS': 'TextEdit', 'CREATE_USE': 'TextEdit', 'CREATE_DT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Rock_Units_1.set('fieldImages', {'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'TXGEOL_DD_': 'Hidden', 'TXGEOL_DD1': 'Hidden', 'STRAT_CODE': 'TextEdit', 'SGMC_LABEL': 'Hidden', 'UNIT_LINK': 'Hidden', 'SOURCE': 'Hidden', 'UNIT_AGE': 'TextEdit', 'FEATURE': 'TextEdit', 'DESC': 'TextEdit', 'ROCKTYPE1': 'TextEdit', 'ROCKTYPE2': 'TextEdit', 'TXunits_OR': 'Hidden', 'TXunits_MA': 'Hidden', 'TXunits_UN': 'Hidden', 'TXunits__1': 'Hidden', 'TXunits_RO': 'Hidden', 'TXunits__3': 'Hidden', 'TXunits__4': 'Hidden', });
lyr_GeoStops_2.set('fieldImages', {'COUNTY': 'TextEdit', 'LOCATION': 'TextEdit', 'ACCESS': 'TextEdit', 'AGE': 'TextEdit', 'FEATURE': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Picture': 'TextEdit', });
lyr_Counties_0.set('fieldLabels', {'OBJECTID': 'no label', 'CNTY_NM': 'no label', 'CNTY_NBR': 'no label', 'FIPS': 'no label', 'CREATE_USE': 'no label', 'CREATE_DT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Rock_Units_1.set('fieldLabels', {'STRAT_CODE': 'inline label', 'UNIT_AGE': 'inline label', 'FEATURE': 'inline label', 'DESC': 'inline label', 'ROCKTYPE1': 'inline label', 'ROCKTYPE2': 'inline label', });
lyr_GeoStops_2.set('fieldLabels', {'COUNTY': 'inline label', 'LOCATION': 'inline label', 'ACCESS': 'inline label', 'AGE': 'inline label', 'FEATURE': 'inline label', 'DESCRIPTIO': 'inline label', 'Lat': 'inline label', 'Long': 'inline label', 'Picture': 'no label', });
lyr_GeoStops_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});