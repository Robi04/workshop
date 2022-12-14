var map = L.map('map').setView([45.739695, 4.1871779], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onEachFeature(feature, layer) {
    let popupContent = `<h4>Commune : <i>${feature.properties.nom}</i></h4>`;
    if  (feature.properties.count != null){
        popupContent += `<h4>Pourcentage des personnes âgées qui s'ousrivent à l APA :<i>${feature.properties.percent_apa} %</i></h4>`;
    }
    // Object.keys(feature.properties).forEach(key => {
    //     popupContent = popupContent += `<p><b>${key}</b> : ${feature.properties[key]}</p>`
    // });
    layer.bindPopup(popupContent);
}

function getColor(d) {
    return d < 2 ? '#800026' :
        d < 5 ? '#BD0026' :
            d < 7 ? '#E31A1C' :
                d < 10 ? '#FC4E2A' :
                    d < 15 ? '#FD8D3C' :
                        d< 25 ? '#FEB24C' :
                            d <= 80 ? '#FED976' :
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
}).addTo(map);