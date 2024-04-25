const showHaku = document.getElementById('showHaku');
showHaku.addEventListener('submit', async function (event) {
    event.preventDefault();
    const haku = document.getElementById('query').value;
    try {
        const vastaus = await fetch(
            `https://api.tvmaze.com/search/shows?q=${haku}`
        );
        const jsonData = await vastaus.json();

        const resultElement = document.querySelector('#results');
        resultElement.innerHTML = "";
        // console.log(jsonData);
        jsonData.forEach((item) => {
            // nimi -> h2
            const showName = item.show.name;
            const h2Element = document.createElement('h2');
            h2Element.innerHTML = showName;

            const showUrl = item.show.url;
            const anchorElement = document.createElement('a');
            anchorElement.href = showUrl;
            anchorElement.innerHTML = 'Link to show details';
            anchorElement.target = '_blank';

            // kuva
            const showImage = item.show.image?.medium;
            const imageElement = document.createElement('img');
            imageElement.src = showImage;

            // yhteenveto
            const showSummary = item.show.summary;
            const divElement = document.createElement('div');
            divElement.innerHTML = showSummary;

            // kaikki osiot
            const articleElement = document.createElement('article');
            articleElement.appendChild(h2Element);
            articleElement.appendChild(anchorElement);
            articleElement.appendChild(imageElement);
            articleElement.appendChild(divElement);

            // results
            resultElement.appendChild(articleElement);
        });
    } catch (error) {
        console.log(error.message);
    }
});