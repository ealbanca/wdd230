const baseUrl = "https://ealbanca.github.io/wdd230/";
const linksUrl = "https://ealbanca.github.io/wdd230/chamber/data/spotlights.json";

async function getspotlightslink() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    displaySpotlightsLinks(data);
}

const displaySpotlightsLinks = (information) => {
    const infoList = document.querySelector('.spotlights ul');
    information.list.forEach((info) => {

        let informationContent = document.createElement('li');
        informationContent.textContent = `${info.info}: `;

        info.links.forEach((link, index) => {
            let anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.target = "_blank";

            informationContent.appendChild(anchor);
            if (index < info.links.length - 1) {
                informationContent.appendChild(document.createTextNode(" | "));
            }

        });

        infoList.appendChild(informationContent);
    });
}

getLinks();