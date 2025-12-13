async function fetchData(full_URL) {
    try {
        const response = await fetch(full_URL);
        const data = response.json();
        console.log(`Fetched from network: ${full_URL}`);

        return data;
    } catch (error) {
        console.error('Error fetching the HTML:', error);
        throw error;
    }
}

export async function getSearchCards(q) {
    const full_URL = `https://ww4.fmovies.co/searching?q=${encodeURIComponent(q)}&limit=40&offset=0`;

    const json_data = await fetchData(full_URL);
    const searchCards = [];

    json_data.data.forEach(element => {
        searchCards.push({
            title: element.t,
            poster_path: `https://img.cdno.my.id/thumb/w_312/h_468/${element.s}.jpg`,
            link: `https://ww4.fmovies.co/film/${element.s}/`
        })
    });

    return searchCards;
}