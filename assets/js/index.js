import { renderAbout } from "./components/home-page/about";
import { renderCarrossel } from "./components/home-page/carrossel";
import { cleanBody } from "./cleanBody";
import { renderNavbar } from "./components/navbar";
import { renderFooter } from "./components/footer";
import { renderCategory } from "./components/home-page/category";
import { renderDescription } from "./components/proposito-page/description";
function renderContentBasedOnHash() {
    if (location.hash === '#proposito') {
        cleanBody();
        renderDescription();
    } else if (location.hash === '#produtos') {
        cleanBody();
    } else if (!location.hash || location.hash === '#home') {
        cleanBody();
        renderCarrossel();
        renderAbout();
        renderCategory();
    }
}

renderNavbar();
renderFooter();
renderContentBasedOnHash();

window.addEventListener('hashchange', renderContentBasedOnHash);