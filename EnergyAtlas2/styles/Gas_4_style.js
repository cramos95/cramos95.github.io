var size = 0;
var placement = 'point';

var style_Gas_4 = function(feature, resolution){
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
    if (value > 1.300000 && value <= 239.400000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(176,106,226,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 239.400000 && value <= 536.500000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.5 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(176,106,226,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 536.500000 && value <= 860.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 13.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(176,106,226,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 860.000000 && value <= 1265.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 18.5 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(176,106,226,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 1265.000000 && value <= 1838.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 24.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(176,106,226,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
