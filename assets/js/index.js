import { renderCarrossel } from "./carrossel";
import { cleanBody } from "./cleanBody";
import { renderNavbar } from "./navbar";

renderNavbar()

location.hash = '#home'

window.addEventListener('hashchange', () => {
    if (location.hash === '#proposito') {
        cleanBody();
    } else if (location.hash === '#produtos') {
        cleanBody()
    } else if (location.hash === '#home') {
        renderCarrossel();
    }
});