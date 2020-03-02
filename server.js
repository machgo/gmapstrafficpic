const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage'
        ]
    });

    const page = await browser.newPage();
    await page.goto('file:///app/trafficmap.html', {"waitUntil" : "networkidle0"});
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();


var express = require("express");
var app = express();
app.get("/url", (req, res, next) => {
    res.sendFile("/app/example.png");
   });
app.listen(3000, () => {
 console.log("Server running on port 3000");
});