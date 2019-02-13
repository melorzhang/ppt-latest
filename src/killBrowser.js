const puppeteer=require('puppeteer');
const util=require('./utils/index');
const getWSAddress=()=>util.readFile(__dirname + '/wsa.txt');
(async ()=>{
    const wsAddress=await getWSAddress();
    const browser=await puppeteer.connect({browserWSEndpoint:wsAddress});
    browser.close();
})().catch(util.errorLogNExit);
