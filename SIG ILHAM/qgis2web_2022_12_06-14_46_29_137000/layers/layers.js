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
    title: 'DATABASE MRK<br />\
    <img src="styles/legend/DATABASEMRK_0_0.png" /> Animha<br />\
    <img src="styles/legend/DATABASEMRK_0_1.png" /> Elikobal<br />\
    <img src="styles/legend/DATABASEMRK_0_2.png" /> Ilwayab<br />\
    <img src="styles/legend/DATABASEMRK_0_3.png" /> Jagebob<br />\
    <img src="styles/legend/DATABASEMRK_0_4.png" /> Kaptel<br />\
    <img src="styles/legend/DATABASEMRK_0_5.png" /> Kimaam<br />\
    <img src="styles/legend/DATABASEMRK_0_6.png" /> Kurik<br />\
    <img src="styles/legend/DATABASEMRK_0_7.png" /> Malind<br />\
    <img src="styles/legend/DATABASEMRK_0_8.png" /> Merauke<br />\
    <img src="styles/legend/DATABASEMRK_0_9.png" /> Muting<br />\
    <img src="styles/legend/DATABASEMRK_0_10.png" /> Naukenjerai<br />\
    <img src="styles/legend/DATABASEMRK_0_11.png" /> Ngguti<br />\
    <img src="styles/legend/DATABASEMRK_0_12.png" /> Okaba<br />\
    <img src="styles/legend/DATABASEMRK_0_13.png" /> Semangga<br />\
    <img src="styles/legend/DATABASEMRK_0_14.png" /> Sota<br />\
    <img src="styles/legend/DATABASEMRK_0_15.png" /> Tabonji<br />\
    <img src="styles/legend/DATABASEMRK_0_16.png" /> Tanah Miring<br />\
    <img src="styles/legend/DATABASEMRK_0_17.png" /> Tubang<br />\
    <img src="styles/legend/DATABASEMRK_0_18.png" /> Ulilin<br />\
    <img src="styles/legend/DATABASEMRK_0_19.png" /> Waan<br />\
    <img src="styles/legend/DATABASEMRK_0_20.png" /> <br />'
        });

lyr_DATABASEMRK_0.setVisible(true);
var layersList = [baseLayer,lyr_DATABASEMRK_0];
lyr_DATABASEMRK_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KOTA': 'KOTA', 'PROVINSI': 'PROVINSI', 'LAKI-LAKI': 'LAKI-LAKI', 'PEREMPUAN': 'PEREMPUAN', 'SD': 'SD', 'SMP': 'SMP', 'SMA': 'SMA', });
lyr_DATABASEMRK_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'LAKI-LAKI': 'TextEdit', 'PEREMPUAN': 'TextEdit', 'SD': 'TextEdit', 'SMP': 'TextEdit', 'SMA': 'TextEdit', });
lyr_DATABASEMRK_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'KOTA': 'inline label', 'PROVINSI': 'inline label', 'LAKI-LAKI': 'header label', 'PEREMPUAN': 'inline label', 'SD': 'inline label', 'SMP': 'inline label', 'SMA': 'inline label', });
lyr_DATABASEMRK_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});