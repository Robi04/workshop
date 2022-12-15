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

function getColor2(d) {
    return d < 5 ? '#57D3F2' :
    d < 20 ? '#62BBE7' :
    d < 50 ? '#548BCC' :
    d < 100 ? '#4660B1' :
    d < 500 ? '#393C95' :
    d >= 500 ? '#3A2C78' :
            '#FFFFF'
}

function style2(feature) {
    return {
        fillColor: getColor2(feature.properties.count_apa),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

var loire2 = L.geoJson(geojsonloire, {
    style: style2,
    onEachFeature
}).addTo(map2);


/*Legend specific*/
var legend2 = L.control({ position: "bottomleft" });

legend2.onAdd = function(map2) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Sénior ayant accès aux aides APA</h4>";
  div.innerHTML += '<i style="background: #57D3F2"></i><span>0-4</span><br>';
  div.innerHTML += '<i style="background: #62BBE7"></i><span>5-19</span><br>';
  div.innerHTML += '<i style="background: #548BCC"></i><span>20-49</span><br>';
  div.innerHTML += '<i style="background: #4660B1"></i><span>50-99</span><br>';
  div.innerHTML += '<i style="background: #393C95"></i><span>100-499</span><br>';
  div.innerHTML += '<i style="background: #3A2C78"></i><span>+500</span><br>';
  return div;
};

legend2.addTo(map2);