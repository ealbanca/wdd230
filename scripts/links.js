const baseURL = "https://ealbanca.github.io/wdd230/";
const linksURL = "https://ealbanca.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (weeks) => {
    const assignmentList = document.querySelector('.card ul');
    weeks.lessons.forEach((lesson) => {

        let weekAssignment = document.createElement('li');
        weekAssignment.textContent = `${lesson.lesson}: `;

        lesson.links.forEach((link, index) => {
            let anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.target = "_blank";

            weekAssignment.appendChild(anchor);

            if (index < lesson.links.length - 1) {
                weekAssignment.appendChild(document.createTextNode(" | "));
            }
        });

        assignmentList.appendChild(weekAssignment);
    });
}

getLinks();