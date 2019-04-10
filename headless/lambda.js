exports.handler = function(event, context, callback) {
    (async () => {
    const puppeteerLambda = require('puppeteer-lambda');
    const browser = await puppeteerLambda.getBrowser({
    headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    const image = await page.screenshot({path: 'example.png'});
 
    callback(null, image);

    await browser.close(); 
})();
}