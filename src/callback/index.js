function sum(a, b){
    return a + b;
}

//

function calc(a, b, callback){
    return callback(a, b);
}


// Crear el llamado
console.log(calc(100, 2, sum));


// ejemplo dos tiempos esperar

function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);