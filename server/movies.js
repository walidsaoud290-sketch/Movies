import * as cheerio from 'cheerio';

const base_URL = "https://ww4.fmovies.co/movies";

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

export async function getMoviesCards(page) {
    const html = await fetchHTML((page > 1) ? base_URL + `/page/${page}/` : base_URL);

    const $ = cheerio.load(html);
    const MovieCards = [];

    const movieList = $(".card-body.p-0").children().eq(0).children();

    movieList.each((index, element) => {
        MovieCards.push({
            title: $(element).find("h2").text(),
            poster_path: parseSrcset($(element).find("img").attr('data-srcset'))[2].url,
            link: $(element).find("a").attr('href')
        })
    });

    return MovieCards;
}

function parseSrcset(srcset) {
    // Splits the string by commas, then trims whitespace
    return srcset.split(',').map(src => {
        const parts = src.trim().split(/\s+/); // Splits URL and descriptor by space
        return {
            url: parts[0],
            descriptor: parts[1] || '' // Descriptor might be missing in some cases
        };
    });
}