//$ npm install node-fetch --save
const fetch = require('node-fetch');
//const url = 'https://jsonplaceholder.typicode.com/posts'
const cheerio = require('cheerio');



// const request = async () => {
//     console.log('starting');
//     const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States'

//     const response = await fetch(url);
//     const json = await response.text();
//     const $ = cheerio.load(json);
//     //console.log($('big > a'));

//     const wikiUrls = [];
//     for (let i = 0; i < 45; i++) {
//       wikiUrls.push($('big > a')[i].attribs.title);
//     }
//     console.log(wikiUrls)

//     //console.log(json);
//     //console.log(JSON.stringify(json))
// }

// request()


const requestHeroes = async() => {
    console.log('starting');

    const url = ('https://nexuscompendium.com/sales');
    const response = await fetch(url);
    const json =  await response.text();
    
    const $ = cheerio.load(json);

    const saleHeroes = [];
    const totalHeroes = $('.primary-table td > a');


    for(i = 0; i < totalHeroes.length; i++) {
        saleHeroes.push($('.primary-table td > a')[i].attribs.href)
    }

    //console.log(totalHeroes)
    console.log(saleHeroes)
    //console.log($('.primary-table td > a')[2].attribs.href)
    // console.log($('.primary-table td > a').length); 
    // console.log($('.primary-table td > a')[9]); 
    //console.log($('.primary-table td > a')[0].children[2].data)
}


const requestSkins = async() => {
    const url = ('https://nexuscompendium.com/sales');
    const response = await fetch(url);
    const result = await response.text();

    const $ = cheerio.load(result);
    const totalSkins = ($('.primary-table td > ul > li > a'));

    const skinsHero = [];
    
    for(i = 0; i < totalSkins.length; i++) {
        skinsHero.push($('.primary-table td > ul > li > a')[i].children[0].data);
    }

    console.log(skinsHero)
}

requestHeroes()
requestSkins()