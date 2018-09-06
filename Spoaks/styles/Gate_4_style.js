var size = 0;
var placement = 'point';

var style_Gate_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'The Aeroplane Flies High\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Location") !== null && resolution > 0 && resolution < 1) {
        labelText = String(feature.get("Location"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [700, 700],
                  scale: 0.0642857142857,
                  anchor: [22, 22],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/red-marker.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
