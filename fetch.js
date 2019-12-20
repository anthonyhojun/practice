//$ npm install node-fetch --save
const fetch = require('node-fetch');
//const url = 'https://jsonplaceholder.typicode.com/posts'
const url = 'https://nexuscompendium.com/sales.php'

const request = async () => {
    console.log('starting');
    response = await fetch(url);
    json = await response.json();
    console.log(json)
    //console.log(JSON.stringify(json))
}

request()