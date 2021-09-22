let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); // tercer parametro true activar asincronismo por defecto es true
    xhttp.onreadystatechange = function(event){ //Si este cambio sucede hay 5 estados
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){ 
                callback(null, JSON.parse(xhttp.responseText)) //primer parametro es un error y el segundo es un JSON
            }else{
                const error = new Error('Error ' + url_api) // creamos un error y le notificamos que hay un error en la url_api
                return callback(error, null); // pasamos el error y null porque no devolvemos nada en este caso.
            }
        }
    } 
    xhttp.send();
}

fetchData(API, function (error1, data1){
    if(error1) return console.error(error1);
        fetchData(API + data1.results[0].id, function (error2, data2) {
            if(error2) return console.error(error2);
            fetchData(data2.origin.url, function (error3, data3){
                if(error3) return console.error(error3);
                console.log(data1.info.count);
                console.log(data2.name);
                console.log(data3.dimension);
            });
        })
    })
