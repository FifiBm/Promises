// resolve: if it's successful
//reject: if it's not successful

b = 2+4
c = 7-3

const exampleVar = new Promise((resolve, reject) => {
    console.log('Making Reques to location')
    if (b === 7) {
        resolve('success: request was successful')
    } else {
        reject('ERROR: request was unsuccessful')
    }
});

const processVar = new Promise ((resolve, reject) => {
    console.log ('Process response from application')
    if (c === 4) {
        resolve('Response processed')
    } else {
        reject('issue with response')
    }
});

Promise.all([
    exampleVar,
    processVar
]).then((message) => {
    console.log(message)
}).catch((message) => {
    console.log('There is an error with the request or response')
})