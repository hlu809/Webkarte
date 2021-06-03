var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ladesulen_1 = new ol.format.GeoJSON();
var features_Ladesulen_1 = format_Ladesulen_1.readFeatures(json_Ladesulen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladesulen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladesulen_1.addFeatures(features_Ladesulen_1);
var lyr_Ladesulen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ladesulen_1, 
                style: style_Ladesulen_1,
                interactive: true,
    title: 'Ladesäulen<br />\
    <img src="styles/legend/Ladesulen_1_0.png" /> belegt<br />\
    <img src="styles/legend/Ladesulen_1_1.png" /> frei<br />\
    <img src="styles/legend/Ladesulen_1_2.png" /> teilweise belegt<br />\
    <img src="styles/legend/Ladesulen_1_3.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Ladesulen_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Ladesulen_1];
lyr_Ladesulen_1.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'standort': 'standort', 'anzahl_ladepunkte': 'anzahl_ladepunkte', 'ladesaeule_status': 'Ladesäulenstatus', 'adresse': 'Adresse', 'koordinaten': 'koordinaten', 'typ': 'typ', 'ladepunkt': 'ladepunkt', 'stecker': 'stecker', 'status': 'status', 'authmethod_1': 'authmethod_1', 'authmethod_2': 'authmethod_2', 'aggregated_fids': 'aggregated_fids', 'aggregation_fids_2': 'aggregation_fids_2', 'aggregation_stecker': 'aggregation_stecker', 'aggregation_ladepunkte': 'aggregation_ladepunkte', });
lyr_Ladesulen_1.set('fieldImages', {'fid': 'Hidden', 'gml_id': 'Hidden', 'standort': 'TextEdit', 'anzahl_ladepunkte': 'Hidden', 'ladesaeule_status': 'TextEdit', 'adresse': 'TextEdit', 'koordinaten': 'Hidden', 'typ': 'Hidden', 'ladepunkt': 'Hidden', 'stecker': 'Hidden', 'status': 'Hidden', 'authmethod_1': 'Hidden', 'authmethod_2': 'Hidden', 'aggregated_fids': 'Hidden', 'aggregation_fids_2': 'Hidden', 'aggregation_stecker': 'Hidden', 'aggregation_ladepunkte': 'Hidden', });
lyr_Ladesulen_1.set('fieldLabels', {'standort': 'inline label', 'ladesaeule_status': 'inline label', 'adresse': 'inline label', });
lyr_Ladesulen_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});