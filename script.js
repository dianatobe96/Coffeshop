// Constants
const SECTION_IDS = ['home', 'about', 'why-choose-us', 'categories', 'menu', 'team', 'clients', 'contact'];
const PRIMARY_COLOR = "#bc9a6c";
// end Constants

/**
 * Simulate the loading of the page
 */
function loadPage() {
    setTimeout(() => {
        // Get Header and Main elements to remove the "hidden" class
        const headerContentElement = document.getElementById("header-content");
        headerContentElement.classList.remove('hidden');
        const mainContentElement = document.getElementById("main-content");
        mainContentElement.classList.remove('hidden');

        // Get loader element to add "hidden" class
        const loaderElement = document.getElementById("loading");
        loaderElement.classList.add('hidden');
    }, 2000);
}

/**
 * Add clients' logo to the Clients section
 */
function addClientsLogo() {
    const clientsSection = document.querySelector('#clients .client-list');

    for (let index = 1; index < 7; index++) {
        const clientImg = document.createElement('img');
        clientImg.src = `./assets/images/client${index}.png`;
        clientImg.alt = 'Client Logo';
        clientImg.classList.add('margin-1');

        clientsSection.appendChild(clientImg);
    }
}

/**
 * Get the element of each section and change the color of its title
 */
function changeSectionTitlesColor() {
    const sectionTitleElements = SECTION_IDS
        .map(sectionId => document.querySelector(`#${sectionId} .title`))
        .filter(titleElement => !!titleElement);

    sectionTitleElements.forEach(sectionTitleElement => sectionTitleElement.style.color = PRIMARY_COLOR);
}

/**
 * After 4 seconds, get the welcome-text element and change its text
 */
function changeWelcomeText() {
    setTimeout(() => {
        document.getElementById('welcome-text').textContent = 'Welcome to coffee hut';
    }, 4000);
}

/**
 * Add listener to the home image element
 * Mouseover - Add border
 * Mouseout - Remove border
 */
function homeImageHoverListener() {
    const homeImageElement = document.querySelector('#home .right-side img');

    // Change the button text
    homeImageElement.addEventListener('mouseover', () => {
        homeImageElement.style.border = 'solid 12px #bc9a6c';
    });

    // Change the button text
    homeImageElement.addEventListener('mouseout', () => {
        homeImageElement.style.border = 'none';
    });
}

/**
 * Get Menu button and add click, mouseover, and mouseout event listeners
 * Click - Scroll to the menu section
 * Mouseover - Update button text
 * Mouseout - Update button text
 */
function menuButtonListeners() {
    const menuButtonElement = document.getElementById("menu-btn");

    // Scroll to the Menu section
    menuButtonElement.addEventListener('click', () => {
        const menuSectionElement = document.getElementById('menu');
        menuSectionElement.scrollIntoView({ behavior: "smooth" });
    });

    // Change the button text
    menuButtonElement.addEventListener('mouseover', () => {
        menuButtonElement.textContent = "Click here";
    });

    // Change the button text
    menuButtonElement.addEventListener('mouseout', () => {
        menuButtonElement.textContent = "See menu";
    });
}

function main() {
    loadPage();

    addClientsLogo();
    changeSectionTitlesColor();
    changeWelcomeText();
    homeImageHoverListener();
    menuButtonListeners();
};

main();
