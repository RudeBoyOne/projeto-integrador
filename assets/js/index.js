import { renderAbout } from "./components/about";
import { renderCarrossel } from "./components/carrossel";
import { cleanBody } from "./cleanBody";
import { renderNavbar } from "./components/navbar";
import { renderFooter } from "./components/footer";
import { renderCategory } from "./components/category";

function renderContentBasedOnHash() {
    if (location.hash === '#proposito') {
        cleanBody();
    } else if (location.hash === '#produtos') {
        cleanBody();
    } else if (!location.hash || location.hash === '#home') {
        renderCarrossel();
        renderAbout();
        renderCategory();
    }
}

renderNavbar();
renderFooter();
renderContentBasedOnHash();

window.addEventListener('hashchange', renderContentBasedOnHash);