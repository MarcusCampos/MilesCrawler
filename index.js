const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
 
  //await page.setRequestInterception(tr await page.setViewport({width: 1520, height: 755})ue)
  const initialURL = "https://www.smiles.com.br/"+
                     "emissao-com-milhas?" +
                     "tripType=1&"+
                     "originAirport=BCN&"+
                     "destinationAirport=GRU&"+
                     "departureDate=1576659600000&"+
                     "returnDate=1577264400000&"+
                     "adults=1&children=0&"+
                     "infants=0&"+
                     "searchType=congenere&"+
                     "segments=1&"+
                     "isElegible=false&"+
                     "originCity=Barcelona&"+
                     "originCountry=Espanha&"+
                     "destinCity=Rio%20de%20Janeiro&"+
                     "destinCountry=Brasil&"+
                     "originAirportIsAny=false&"+
                     "destinationAirportIsAny=true&"+
                     "isFlexibleDateChecked=false";
                     console.log("Hello")
    await page.goto(initialURL)
    await page.screenshot({path: 'example0.png'});
    const allResultsSelector = '#smiles_carousel_SEGMENT_1';
    await page.waitForSelector(allResultsSelector, {timeout: 40000});
    await page.screenshot({path: 'example1.png'});
    await page.waitForSelector("#inputOrigin");
    await page.type("#inputOrigin", "BCN",  {delay: 4})
    await page.click("#ulOriginAirport")
    await page.type("#inputDestination", "GRU",  {delay: 4})
    await page.click("#ulDestinationAirport")
    //await page.click("#ui-datepicker-div > div.ui-datepicker-group.ui-datepicker-group-last > table > tbody > tr:nth-child(3) > td:nth-child(4) > a");
    await page.click("#submitFlightSearch")
    await page.screenshot({path: 'example0.png'});
    const allResultsSelector = '#smiles_carousel_SEGMENT_1';
    await page.waitForSelector(allResultsSelector, {timeout: 40000});
    await page.screenshot({path: 'example1.png'});
    await browser.close();
})();