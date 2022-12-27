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
var format_DATABASEMRK_0 = new ol.format.GeoJSON();
var features_DATABASEMRK_0 = format_DATABASEMRK_0.readFeatures(json_DATABASEMRK_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATABASEMRK_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DATABASEMRK_0.addFeatures(features_DATABASEMRK_0);var lyr_DATABASEMRK_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DATABASEMRK_0, 
                style: style_DATABASEMRK_0,
                title: '<img src="styles/legend/DATABASEMRK_0.png" /> DATABASE MRK'
            });

lyr_DATABASEMRK_0.setVisible(true);
var layersList = [baseLayer,lyr_DATABASEMRK_0];
lyr_DATABASEMRK_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KOTA': 'KOTA', 'PROVINSI': 'PROVINSI', 'LAKI-LAKI': 'LAKI-LAKI', 'PEREMPUAN': 'PEREMPUAN', 'SD': 'SD', 'SMP': 'SMP', 'SMA': 'SMA', });
lyr_DATABASEMRK_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'LAKI-LAKI': 'TextEdit', 'PEREMPUAN': 'TextEdit', 'SD': 'TextEdit', 'SMP': 'TextEdit', 'SMA': 'TextEdit', });
lyr_DATABASEMRK_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'KOTA': 'inline label', 'PROVINSI': 'inline label', 'LAKI-LAKI': 'inline label', 'PEREMPUAN': 'inline label', 'SD': 'inline label', 'SMP': 'inline label', 'SMA': 'inline label', });
lyr_DATABASEMRK_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});