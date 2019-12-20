const cheerio = require('cheerio');
const fetch = require('node-fetch');
const url = 'https://nexuscompendium.com/sales.php';

// fetch url
// jquery content


const ping = async () => {
    const response = await fetch(url); 
    const $ = cheerio.load(await response.text())
    console.log($'p');

    // const $ = cheerio.load(await result); 
    // const scrape = $('p')
  
    // console.log(scrape)


}

// const ping = async () => {
//     const response = await fetch(url); 
//     const result = await response.text();
//     console.log(result);

//     const $ = cheerio.load(await result); 
//     const scrape = $('p')
  
//     console.log(scrape)


// }

ping()


// const getData = () => {
//     console.log($('.primary-table'))
// }

// getData()
// //.primary-table td td:nth-child(1) 


