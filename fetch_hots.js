const fetch = require('node-fetch')
const cheerio = require('cheerio')
const fs = require('fs')

const url = 'https://nexuscompendium.com/sales'

const hotstxtfile = fs.readFile('hots.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

    const $ = cheerio.load(data)
    console.log($("td.primary-table > ul:nth-child(n) > li:nth-child(n) > a").text())



  });



// const hots = async() => {
//     const response = await fetch(url);
//     const result = await response.text()

//     console.log('starting')

//     fs.writeFile('hots.txt', result, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!')
//     }


//const $ = cheerio.load(hotstxtfile)
//     // console.log($("td.primary-table > ul:nth-child(n) > li:nth-child(n) > a").text())

//     )}

// hots()

//console.log(hotstxtfile)