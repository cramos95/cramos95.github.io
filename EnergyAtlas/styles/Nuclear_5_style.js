var size = 0;
var placement = 'point';

var style_Nuclear_5 = function(feature, resolution){
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
    if (value > 2400.000000 && value <= 2560.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 26.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 2560.000000 && value <= 2400.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 30.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.796078431373)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.796078431373)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
