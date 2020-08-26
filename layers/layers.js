var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_bamako_shp_1 = new ol.format.GeoJSON();
var features_bamako_shp_1 = format_bamako_shp_1.readFeatures(json_bamako_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bamako_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bamako_shp_1.addFeatures(features_bamako_shp_1);
var lyr_bamako_shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bamako_shp_1, 
                style: style_bamako_shp_1,
                interactive: true,
    title: 'bamako_shp<br />\
    <img src="styles/legend/bamako_shp_1_0.png" /> Commune I<br />\
    <img src="styles/legend/bamako_shp_1_1.png" /> Commune II<br />\
    <img src="styles/legend/bamako_shp_1_2.png" /> Commune III<br />\
    <img src="styles/legend/bamako_shp_1_3.png" /> Commune IV<br />\
    <img src="styles/legend/bamako_shp_1_4.png" /> Commune V<br />\
    <img src="styles/legend/bamako_shp_1_5.png" /> Commune VI<br />'
        });
var format_mali_gis_produitcopier_2 = new ol.format.GeoJSON();
var features_mali_gis_produitcopier_2 = format_mali_gis_produitcopier_2.readFeatures(json_mali_gis_produitcopier_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mali_gis_produitcopier_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mali_gis_produitcopier_2.addFeatures(features_mali_gis_produitcopier_2);
var lyr_mali_gis_produitcopier_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mali_gis_produitcopier_2, 
                style: style_mali_gis_produitcopier_2,
                interactive: true,
    title: 'mali_gis_produit copier<br />\
    <img src="styles/legend/mali_gis_produitcopier_2_0.png" /> KISS pas disponible<br />\
    <img src="styles/legend/mali_gis_produitcopier_2_1.png" /> KISS disponible<br />'
        });
var format_mali_gis_produit_3 = new ol.format.GeoJSON();
var features_mali_gis_produit_3 = format_mali_gis_produit_3.readFeatures(json_mali_gis_produit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mali_gis_produit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mali_gis_produit_3.addFeatures(features_mali_gis_produit_3);
var lyr_mali_gis_produit_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mali_gis_produit_3, 
                style: style_mali_gis_produit_3,
                interactive: true,
    title: 'mali_gis_produit<br />\
    <img src="styles/legend/mali_gis_produit_3_0.png" /> Produits disponibles<br />\
    <img src="styles/legend/mali_gis_produit_3_1.png" /> Pas de produits<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_bamako_shp_1.setVisible(true);lyr_mali_gis_produitcopier_2.setVisible(true);lyr_mali_gis_produit_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_bamako_shp_1,lyr_mali_gis_produitcopier_2,lyr_mali_gis_produit_3];
lyr_bamako_shp_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'admin3Name': 'admin3Name', 'admin3Pcod': 'admin3Pcod', 'admin3RefN': 'admin3RefN', 'admin3AltN': 'admin3AltN', 'admin3Al_1': 'admin3Al_1', 'admin2Name': 'admin2Name', 'admin2Pcod': 'admin2Pcod', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'admin0Name': 'admin0Name', 'admin0Pcod': 'admin0Pcod', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Publicité': 'Publicité', 'KISS': 'KISS', });
lyr_mali_gis_produitcopier_2.set('fieldAliases', {'2a) Quelle est la commune ou l\'arrondissement ou se trouve la pharmacie ?': '2a) Quelle est la commune ou l\'arrondissement ou se trouve la pharmacie ?', '2b) Adresse de l\'emplacement de la pharmacie': '2b) Adresse de l\'emplacement de la pharmacie', '3) Quelle est le nom de la pharmacie ?': '3) Quelle est le nom de la pharmacie ?', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_latitude': '_4) Merci de prendre les coordonn�es GPS de la pharmacie_latitude', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_longitude': '_4) Merci de prendre les coordonn�es GPS de la pharmacie_longitude', 'field_6': 'field_6', 'Kiss': 'Kiss', 'Postpill': 'Postpill', 'Levodia': 'Levodia', 'Sayana Press': 'Sayana Press', 'Levoplant': 'Levoplant', 'Misofem': 'Misofem', 'Misodia': 'Misodia', 'Mifepack': 'Mifepack', 'Mifedia': 'Mifedia', 'DIU': 'DIU', 'Pas de produit': 'Pas de produit', });
lyr_mali_gis_produit_3.set('fieldAliases', {'2a) Quelle est la commune ou l\'arrondissement ou se trouve la pharmacie ?': '2a) Quelle est la commune ou l\'arrondissement ou se trouve la pharmacie ?', '2b) Adresse de l\'emplacement de la pharmacie': '2b) Adresse de l\'emplacement de la pharmacie', '3) Quelle est le nom de la pharmacie ?': '3) Quelle est le nom de la pharmacie ?', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_latitude': '_4) Merci de prendre les coordonn�es GPS de la pharmacie_latitude', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_longitude': '_4) Merci de prendre les coordonn�es GPS de la pharmacie_longitude', 'field_6': 'field_6', 'Kiss': 'Kiss', 'Postpill': 'Postpill', 'Levodia': 'Levodia', 'Sayana Press': 'Sayana Press', 'Levoplant': 'Levoplant', 'Misofem': 'Misofem', 'Misodia': 'Misodia', 'Mifepack': 'Mifepack', 'Mifedia': 'Mifedia', 'DIU': 'DIU', 'Pas de produit': 'Pas de produit', });
lyr_bamako_shp_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'admin3Name': 'TextEdit', 'admin3Pcod': 'TextEdit', 'admin3RefN': 'TextEdit', 'admin3AltN': 'TextEdit', 'admin3Al_1': 'TextEdit', 'admin2Name': 'TextEdit', 'admin2Pcod': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'admin0Name': 'TextEdit', 'admin0Pcod': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Publicité': 'Range', 'KISS': 'Range', });
lyr_mali_gis_produitcopier_2.set('fieldImages', {'2a) Quelle est la commune ou l\'arrondissement ou se trouve la pharmacie ?': 'TextEdit', '2b) Adresse de l\'emplacement de la pharmacie': 'TextEdit', '3) Quelle est le nom de la pharmacie ?': 'TextEdit', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_latitude': 'TextEdit', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_longitude': 'TextEdit', 'field_6': 'TextEdit', 'Kiss': 'Range', 'Postpill': 'Range', 'Levodia': 'Range', 'Sayana Press': 'Range', 'Levoplant': 'Range', 'Misofem': 'Range', 'Misodia': 'Range', 'Mifepack': 'Range', 'Mifedia': 'Range', 'DIU': 'Range', 'Pas de produit': 'Range', });
lyr_mali_gis_produit_3.set('fieldImages', {'2a) Quelle est la commune ou l\'arrondissement ou se trouve la pharmacie ?': 'TextEdit', '2b) Adresse de l\'emplacement de la pharmacie': 'TextEdit', '3) Quelle est le nom de la pharmacie ?': 'TextEdit', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_latitude': 'TextEdit', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_longitude': 'TextEdit', 'field_6': 'TextEdit', 'Kiss': 'Range', 'Postpill': 'Range', 'Levodia': 'Range', 'Sayana Press': 'Range', 'Levoplant': 'Range', 'Misofem': 'Range', 'Misodia': 'Range', 'Mifepack': 'Range', 'Mifedia': 'Range', 'DIU': 'Range', 'Pas de produit': 'Range', });
lyr_bamako_shp_1.set('fieldLabels', {'OBJECTID': 'inline label', 'admin3Name': 'inline label', 'admin3Pcod': 'no label', 'admin3RefN': 'no label', 'admin3AltN': 'header label', 'admin3Al_1': 'no label', 'admin2Name': 'no label', 'admin2Pcod': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'admin0Name': 'no label', 'admin0Pcod': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Publicité': 'no label', 'KISS': 'no label', });
lyr_mali_gis_produitcopier_2.set('fieldLabels', {'2a) Quelle est la commune ou l\'arrondissement ou se trouve la pharmacie ?': 'no label', '2b) Adresse de l\'emplacement de la pharmacie': 'no label', '3) Quelle est le nom de la pharmacie ?': 'no label', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_latitude': 'no label', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_longitude': 'no label', 'field_6': 'no label', 'Kiss': 'no label', 'Postpill': 'no label', 'Levodia': 'no label', 'Sayana Press': 'no label', 'Levoplant': 'no label', 'Misofem': 'no label', 'Misodia': 'no label', 'Mifepack': 'no label', 'Mifedia': 'no label', 'DIU': 'no label', 'Pas de produit': 'no label', });
lyr_mali_gis_produit_3.set('fieldLabels', {'2a) Quelle est la commune ou l\'arrondissement ou se trouve la pharmacie ?': 'inline label', '2b) Adresse de l\'emplacement de la pharmacie': 'inline label', '3) Quelle est le nom de la pharmacie ?': 'inline label', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_latitude': 'inline label', '_4) Merci de prendre les coordonn�es GPS de la pharmacie_longitude': 'inline label', 'field_6': 'inline label', 'Kiss': 'inline label', 'Postpill': 'inline label', 'Levodia': 'inline label', 'Sayana Press': 'inline label', 'Levoplant': 'inline label', 'Misofem': 'no label', 'Misodia': 'no label', 'Mifepack': 'no label', 'Mifedia': 'no label', 'DIU': 'no label', 'Pas de produit': 'no label', });
lyr_mali_gis_produit_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});