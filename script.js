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
 * Get Menu button and add click event listener
 * Click - Scroll to the menu section
 */
function menuButtonListeners() {
    const menuButtonElement = document.getElementById("menu-btn");

    // Scroll to the Menu section
    menuButtonElement.addEventListener('click', () => {
        const menuSectionElement = document.getElementById('menu');
        menuSectionElement.scrollIntoView({ behavior: "smooth" });
    });
}

function main() {
    loadPage();
    menuButtonListeners();
};

main();
