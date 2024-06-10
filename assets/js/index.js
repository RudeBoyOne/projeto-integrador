import { renderAbout } from "./components/about";
import { renderCarrossel } from "./components/carrossel";
import { cleanBody } from "./cleanBody";
import { renderNavbar } from "./components/navbar";

function renderContentBasedOnHash() {
    if (location.hash === '#proposito') {
        cleanBody();
    } else if (location.hash === '#produtos') {
        cleanBody();
    } else if (!location.hash || location.hash === '#home') {
        renderCarrossel();
        renderAbout();
    }
}

renderNavbar();
renderContentBasedOnHash();

window.addEventListener('hashchange', renderContentBasedOnHash);
