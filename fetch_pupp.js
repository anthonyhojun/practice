const puppeteer = require('puppeteer')
const url = 'https://nexuscompendium.com/sales'


const hots = async() => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    
    await page.goto(url);
    await page.waitForSelector('document.querySelector("body > table > tbody > tr:nth-child(3) > td.primary-table > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td:nth-child(1) > br:nth-child(2)")')

    const heroes = await page.evaluate(() => {
    const champions = document.querySelector("body > table > tbody > tr:nth-child(3) > td.primary-table > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td:nth-child(1) > br:nth-child(2)");


    console.log(heroes)
    

})

    await browser.close();
}

hots()