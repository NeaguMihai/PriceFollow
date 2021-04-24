const puppeteer = require('puppeteer');

const fs = require('fs');
const drivers = require('./Driver')



async function scrap(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.emag.ro/scaun-gaming-corsair-t3-rush-textil-charcoal-cf-9010029-ww/pd/DRYVS2MBM/?ref=graph_profiled_similar_reordered_1_3&provider=rec&recid=rec_49_7a1c6954b26719f3cff30b7ecc94866482099d7eec6e9978357bd7450a1bc23b_1619226434&scenario_ID=49');
    
    const htmlPage = await page.content();
    
    page.close();
    browser.close();
    
    let res = drivers.emagDriver(htmlPage);
    console.log(res.name);
    console.log(res.price);

    // fs.writeFile('target.txt',price , (err) => {
    //     if(err) {
    //       console.log(err);
    //     }  
    //     console.log('yayy');
    //   })
  };
  
  scrap();