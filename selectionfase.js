const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 800 // slow down by 250ms
      });
    const page = await browser.newPage()
    await page.viewport({weight: 411, height: 731});
    await page.setUserAgent("User-Agent: Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3844.0 Mobile Safari/537.36")
    //await page.setRequestInterception(true)
    const initialURL = "https://www.smiles.com.br/emissao-com-milhas?tripType=1&originAirport=BCN&destinationAirport=GRU&departureDate=1576659600000&returnDate=1577264400000&adults=1&children=0&infants=0&searchType=congenere&segments=1&isElegible=false&originCity=Barcelona&originCountry=Espanha&destinCity=S%C3%A3o%20Paulo&destinCountry=Brasil&originAirportIsAny=false&destinationAirportIsAny=false&isFlexibleDateChecked=false";    
    const selector = "#inputOrigin";  
    await page.setDefaultNavigationTimeout(80000);
    await page.setRequestInterception(true);
    var xhrRequests = new Array();
    await page.on('request', request => {
        if (request.method() === 'GET' && request.url().indexOf("flightavailability-prd.smiles.com.br") > 0){
            console.log("Alo Alo Graças a deus ");
            xhrRequests.push(request);
        }
        else
            request.continue();
        });
    await page.goto(initialURL);
    await browser.close();
    Promise.resolve(xhrRequests).then((aver) => {
        debugger;
        xhrRequests.forEach(request => {
            debugger;
            request;
        })
    }).catch(E => {
        console.log(e);
    });
})();