import { renderAbout } from "./about";
import { renderCarrossel } from "./carrossel";
import { cleanBody } from "./cleanBody";
import { renderNavbar } from "./navbar";

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
