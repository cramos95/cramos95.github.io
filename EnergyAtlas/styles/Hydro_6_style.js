var size = 0;
var placement = 'point';

var style_Hydro_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Total_MW");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value > 0.900000 && value <= 17.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(33,151,255,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 17.000000 && value <= 42.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.5 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(33,151,255,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 42.000000 && value <= 58.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 13.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(33,151,255,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 58.000000 && value <= 80.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 18.5 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(33,151,255,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 80.000000 && value <= 108.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 24.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(33,151,255,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
