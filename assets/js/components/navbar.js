import logo from '../../imgs/favicon.png'

let buttonTheme;
let tagHtml;
let navbarBurgers;
const iconSun = `<span class="icon"><i class="fas fa-xl fa-sun"></i></span>`;
const iconMoon = `<span class="icon"><i class="fas fa-xl fa-moon"></i></span>`;

export function renderNavbar() {
    const navbar =
        `<header>
        <nav class="navbar is-warning">
          <div class="navbar-brand is-size-4">
            <img class="logo" src="${logo}" alt="Logo Buguela">
            <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          
          <div class="navbar-menu" id="navMenu">
            <div class="navbar-end">
              <a href="#produtos" class="navbar-item">Produtos</a>
              <a href="#proposito" class="navbar-item">Propósito</a>           
              <div class="navbar-item">
                <div class="buttons">
                  <button type="button" class="button is-warning" id="button-theme" title="button-theme"></button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      `;

    document.body.insertAdjacentHTML('afterbegin', navbar)
}


const addListenerButtonTheme = () => {
    buttonTheme.addEventListener('click', () => {
        tagHtml.classList.toggle('theme-light');

        let isDark = tagHtml.classList.toggle('theme-dark');

        if (isDark) {
            buttonTheme.innerHTML = iconMoon;
        } else {
            buttonTheme.innerHTML = iconSun;
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    buttonTheme = document.getElementById('button-theme');

    tagHtml = document.getElementsByTagName('html')[0];

    tagHtml.classList.add('theme-light');

    buttonTheme.innerHTML = iconSun;

    addListenerButtonTheme();

    navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    addEventMenuHamburguer();
});


const addEventMenuHamburguer = () => {
    navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });
}
