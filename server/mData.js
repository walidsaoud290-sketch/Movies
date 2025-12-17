import * as cheerio from 'cheerio';
import { getEmbeds } from './decode_and_watch.js';

const base_URL = "https://ww4.fmovies.co/film/";

async function fetchHTML(URL) {
    try {
        const response = await fetch(URL);
        const data = response.text();
        console.log(`Fetched from network: ${URL}`);

        return data;
    } catch (error) {
        console.error('Error fetching the HTML:', error);
        throw error;
    }
}

export async function getMovieData(id) {
    const html = await fetchHTML(base_URL + id);

    const $ = cheerio.load(html);
    const MovieData = { embed: '', meta: {} };

    MovieData.embed = await getEmbeds(id.split('-').at(-1))[0];

    const mainDiv = $(".card-body");
    MovieData.meta.title = mainDiv.find('h1').text();
    MovieData.meta.desc = mainDiv.find('p').eq(0).text();

    const deeper = mainDiv.find(".col-md-5");
    MovieData.meta.quality = deeper.children().eq(1).find('span').text();
    MovieData.meta.year = deeper.children().eq(2).find('a').text();

    return MovieData;
}