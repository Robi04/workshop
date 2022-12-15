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
    return d <= 2 ? '#FF4D2C' :
        d < 5 ? '#FF7737' :
            d < 7 ? '#FF9C43' :
                d < 10 ? '#FFBA4F' :
                    d < 15 ? '#FFD35B' :
                        d< 20 ? '#FFE566' :
                            d <= 80 ? '#FFF172' :
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
  div.innerHTML += '<i style="background: #FF4D2C"></i><span>0-2%</span><br>';
  div.innerHTML += '<i style="background: #FF7737"></i><span>3-5%</span><br>';
  div.innerHTML += '<i style="background: #FF9C43"></i><span>6-7%</span><br>';
  div.innerHTML += '<i style="background: #FFBA4F"></i><span>8-9%</span><br>';
  div.innerHTML += '<i style="background: #FFD35B"></i><span>10-14%</span><br>';
  div.innerHTML += '<i style="background: #FFE566"></i><span>16-19%</span><br>';
  div.innerHTML += '<i style="background: #FFF172"></i><span>+20%</span><br>';
  return div;
};

legend1.addTo(map1);