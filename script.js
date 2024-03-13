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
 * Get Menu button and change the text
 */
function changeMenuButtonText() {
    const menuButtonElement = document.getElementById("menu-btn");

    menuButtonElement.addEventListener('mouseover', (event) => {
        menuButtonElement.textContent = "Click here";
    });

    menuButtonElement.addEventListener('mouseout', (event) => {
        menuButtonElement.textContent = "See menu";
    });
}

function main() {
    loadPage();
    changeMenuButtonText();
};

main();
