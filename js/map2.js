var map2 = L.map('map2').setView([45.739695, 4.1871779], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2);

function onEachFeature(feature, layer) {
    let popupContent = `<h4>Commune : <i>${feature.properties.nom}</i></h4>`;
    popupContent += `<h4>Personne ayant accès à un prestataire :<i>${feature.properties.count_apa}</i></h4>`;
    // Object.keys(feature.properties).forEach(key => {
    //     popupContent = popupContent += `<p><b>${key}</b> : ${feature.properties[key]}</p>`
    // });
    layer.bindPopup(popupContent);
}

function getColor(d) {
    return d > 100 ? '#800026' :
        d > 50 ? '#BD0026' :
            d > 40 ? '#E31A1C' :
                d > 20 ? '#FC4E2A' :
                    d > 10 ? '#FD8D3C' :
                        d> 5 ? '#FEB24C' :
                            d <= 5 ? '#FED976' :
                                    '#FFFFF'
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.percent_apa),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

var loire = L.geoJson(geojsonloire, {
    style: style,
    onEachFeature
}).addTo(map2);