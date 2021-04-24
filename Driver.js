
const cheerio = require('cheerio');

let emagDriver = (content) => {
    
    const selector = cheerio.load(content);
    
    const priceDiv = selector('.product-page-pricing');
    const productTitle = selector('.page-title')

    let price = priceDiv.find('.product-new-price');
    let sup = price.find('sup').text();
     
    let tempStr = price.html().replace(/\s/g, ''); 
    tempStr = tempStr
                .substr(0,tempStr.indexOf('<'))
                .match(/\d/g)
                .join('') + '.' + sup;
    tempStr = Number(tempStr);
    let title = productTitle.text().trim();

    return {
        name : title,
        price : tempStr
    }
}

module.exports.emagDriver = emagDriver;