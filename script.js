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
        const loaderElement = document.getElementById("loader");
        loaderElement.classList.add('hidden');
    }, 2000);
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
    menuButtonElement.addEventListener('mouseover', (event) => {
        buttonElement.textContent = "Click here";
    });

    // Change the button text
    menuButtonElement.addEventListener('mouseout', (event) => {
        buttonElement.textContent = "See menu";
    });
}

function main() {
    loadPage();
    menuButtonListeners();
};

main();
