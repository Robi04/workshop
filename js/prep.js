//Projection map 1 

var apaers=[];
for (var i = 0; i < apa.length; i++) {
    if(!apaers.some(ob => ob.Commune == apa[i].Commune)){
        var obj = new Object();
        obj.Commune = apa[i].Commune;
        if(apa[i].Âge > 65){
            obj.count_apa  = 1;
        }
        else{
            obj.count_apa = 0;
        }
        var jsonString= JSON.stringify(obj);
        apaers.push(obj)
    }
    if(apaers.some(ob => ob.Commune == apa[i].Commune) & parseInt(apa[i].Âge) > 64){
        for (var j = 0; j < apaers.length; j++) {
            if (apaers[j].Commune == apa[i].Commune){
                apaers[j].count_apa +=1
            }
        }
    }
}

for (var i = 0; i < personne_par_tranche_age_loire.length; i++) {
    if(apaers.some(ob => ob.Commune == personne_par_tranche_age_loire[i].libelle.toUpperCase())){
        for (var j = 0; j < apaers.length; j++) {
            if (apaers[j].Commune == personne_par_tranche_age_loire[i].libelle.toUpperCase()){
                apaers[j].count_tot = personne_par_tranche_age_loire[i]["65plus"]
            }
        }
    }
}

for (var j = 0; j < apaers.length; j++) {
    apaers[j].percent_apa = Math.round((apaers[j].count_apa/apaers[j].count_tot)*100)/100 * 100
}

var min = 10000
var max = 0
var count_inf_20 = 0
moye = 0
for (var i = 0; i < geojsonloire.features.length; i++){
    for (var j = 0; j < apaers.length; j++) {
        if (apaers[j].Commune == geojsonloire.features[i].properties.nom.toUpperCase()){
            geojsonloire.features[i].properties.percent_apa = Math.round(apaers[j].percent_apa)
            geojsonloire.features[i].properties.count_apa = apaers[j].count_apa
        }
    }
    if(geojsonloire.features[i].properties.percent_apa === undefined || isNaN(geojsonloire.features[i].properties.percent_apa)){
        geojsonloire.features[i].properties.percent_apa = 0
    }
    if(geojsonloire.features[i].properties.count_apa === undefined || isNaN(geojsonloire.features[i].properties.count_apa)){
        geojsonloire.features[i].properties.count_apa = 0
    }
    if (geojsonloire.features[i].properties.count_apa > max){
        max = geojsonloire.features[i].properties.count_apa
    }
    if (geojsonloire.features[i].properties.count_apa < min){
        min = geojsonloire.features[i].properties.count_apa
    }
    if (geojsonloire.features[i].properties.percent_apa < 21 || isNaN(geojsonloire.features[i].properties.count_apa) || geojsonloire.features[i].properties.count_apa === undefined){
        count_inf_20 += 1
    }
    moye += geojsonloire.features[i].properties.count_apa
}
moye = moye/geojsonloire.features.length