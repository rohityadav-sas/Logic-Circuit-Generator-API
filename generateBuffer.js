const cheerio = require('cheerio');
const axios = require('axios');
const generateImage = require('./generateImage');

async function generateBuffer(data) {
    try {
        const $ = cheerio.load(data);
        const cssUrl = $('link').attr().href;
        const css = await axios.get('http://www.32x8.com/' + cssUrl);
        const style = `<style>${css.data}</style>`;
        $('head').append(style);
        const bufferResult = await generateImage($('html').html());
        return bufferResult;
    } catch (error) {
        console.error('An error occurred while generating the buffer:');
    }
}

module.exports = generateBuffer;