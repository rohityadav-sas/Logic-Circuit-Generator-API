const puppeteer = require('puppeteer');

async function generateImage(content) {
    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setContent(content, { waitUntil: 'networkidle0' });
        const selector = '#sop div div:nth-child(6) div';
        await page.waitForSelector(selector);
        const element = await page.$(selector);
        const boundingbox = await element.boundingBox();
        const buffer = await element.screenshot({
            clip: {
                x: -10,
                y: -15,
                width: boundingbox.width,
                height: boundingbox.height
            }
        });
        await browser.close();
        return buffer;
    } catch (error) {
        console.error('An error occurred while generating the image:');
    }
}

module.exports = generateImage;