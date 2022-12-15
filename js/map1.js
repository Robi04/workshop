var map1 = L.map('map1').setView([45.739695, 4.1871779], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map1);

function onEachFeature(feature, layer) {
    let popupContent = `<h4>Commune : <i>${feature.properties.nom}</i></h4>`;
    if  (feature.properties.count != null){
        popupContent += `<h4>Pourcentage des personnes âgées bénéficiant de  l'APA :<i>${feature.properties.percent_apa} %</i></h4>`;
    }
    // Object.keys(feature.properties).forEach(key => {
    //     popupContent = popupContent += `<p><b>${key}</b> : ${feature.properties[key]}</p>`
    // });
    layer.bindPopup(popupContent);
}

function getColor1(d) {
    return d <= 2 ? '#800026' :
        d < 5 ? '#BD0026' :
            d < 7 ? '#E31A1C' :
                d < 10 ? '#FC4E2A' :
                    d < 15 ? '#FD8D3C' :
                        d< 20 ? '#FEB24C' :
                            d <= 80 ? '#FED976' :
                                    '#FFFFF'
}

function style1(feature) {
    return {
        fillColor: getColor1(feature.properties.percent_apa),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

var loire1 = L.geoJson(geojsonloire, {
    style: style1,
    onEachFeature
}).addTo(map1);

/*Legend specific*/
var legend1 = L.control({ position: "bottomleft" });

legend1.onAdd = function(map1) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Séniors ayant accès aux aides APA(%)</h4>";
  div.innerHTML += '<i style="background: #800026"></i><span>0-2%</span><br>';
  div.innerHTML += '<i style="background: #BD0026"></i><span>3-5%</span><br>';
  div.innerHTML += '<i style="background: #E31A1C"></i><span>6-7%</span><br>';
  div.innerHTML += '<i style="background: #FC4E2A"></i><span>8-9%</span><br>';
  div.innerHTML += '<i style="background: #FD8D3C"></i><span>10-14%</span><br>';
  div.innerHTML += '<i style="background: #FEB24C"></i><span>16-19%</span><br>';
  div.innerHTML += '<i style="background: #FED976"></i><span>+20%</span><br>';
  return div;
};

legend1.addTo(map1);