const myPromise = new Promise((resolve, reject) => {
    reject('resolved text')
})

myPromise.then(
    done => {console.log(done)},
    notdone => {console.log('rejected')}
)