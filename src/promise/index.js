//algo va pasar

const somethingWhillHappend = () => {
    return new Promise((resolve, reject) => {
        if (true) resolve('Ok!');
        else reject('ups!');
    });
};

somethingWhillHappend()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWhillHappend2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('ok');
            }, 2000) // 2 segundos de espera
        } else {
            const error = new Error('ups!')
            reject(error);
        }
    });
}

somethingWhillHappend2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


// ejecutar varias promesas al tiempo

Promise.all([somethingWhillHappend(), somethingWhillHappend2()])
    .then(response => {
        console.log('Array Results: ', response);
    })
    .catch(err => {
        console.error(err);
    })