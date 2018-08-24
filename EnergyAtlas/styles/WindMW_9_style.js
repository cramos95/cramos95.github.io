var size = 0;
var placement = 'point';

var style_WindMW_9 = function(feature, resolution){
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
    if (value > 3.000000 && value <= 57.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(50,205,50,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 57.000000 && value <= 135.400000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 13.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(50,205,50,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 135.400000 && value <= 211.200000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 18.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(50,205,50,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 211.200000 && value <= 376.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 23.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(50,205,50,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 376.000000 && value <= 735.500000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 28.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(50,205,50,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
