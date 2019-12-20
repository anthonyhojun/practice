const cheerio = require('cheerio');
const fetch = require('node-fetch');
const url = 'https://buttercms.com/docs/api/';


// fetch url
// jquery content


const ping = async () => {
    const response = await fetch(url); 
    const result = await response.text();
   // console.log(result);

    const $ = cheerio.load(await result); 
    const scrape = $('pre.highlight.shell')
  
    console.log($('pre.highlight.shell'))


}

ping()


// const getData = () => {
//     console.log($('.primary-table'))
// }

// getData()
// //.primary-table td td:nth-child(1) 


