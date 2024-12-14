const baseURL = "https://ealbanca.github.io/wdd230/";
const linksURL = "https://ealbanca.github.io/wdd230/chamber/data/events.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (information) => {
    const infoList = document.querySelector('.events ul');
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