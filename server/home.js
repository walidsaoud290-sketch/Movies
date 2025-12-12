import * as cheerio from 'cheerio';

const URL = "https://ww4.fmovies.co/home";

async function fetchHTML() {
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

export async function getHomepageCards() {
    const html = await fetchHTML();

    const $ = cheerio.load(html);
    const SuggestedCards = [];

    const suggestionsList = $(".card-body.p-0").eq(1).children().children();

    suggestionsList.each((index, element) => {
        SuggestedCards.push({
            title: $(element).find("h2").text(),
            poster_path: $(element).find("source").attr('data-srcset').split(',')[1].slice(0, -3),
            link: $(element).find("a").attr('href')
        })
    });

    return SuggestedCards;
}