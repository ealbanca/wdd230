const baseURL = "https://yourgithubusername.github.io/wdd230/";
const linksURL = "https://yourgithubusername.github.io/wdd230/data/links.json";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {

        const linksContainer = document.querySelector(`#linksAssignments`);
        let lessonNum = document.createElement('p');
        let links = document.createElement('p');


        lessonNum.textContent = `${lesson}`;
        links.textContent = `${links}`;

        linksContainer.appendChild(lessonNum);
        linksContainer.appendChild(links);


        //lesson.links.map(link => `<a href="${link.url}" target="blank"> ${link.title}</a>`).join(" | ");
        //let fullLesson = document.createElement('p');
        //fullLesson.innerHTML = `${lessonNum}: ${links}`;

        //linksContainer.appendChild(fullLesson);
    })
}

getLinks();