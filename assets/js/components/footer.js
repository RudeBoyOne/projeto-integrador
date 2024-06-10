import logo from '../../imgs/favicon.png'

export const renderFooter = () => {
    const footerHtml = 
    `
    <section class="columns mb-5">
        <div class="column is-flex is-justify-content-center is-align-items-center">
            <figure class="image is-1by1 is-128x128">
                <img src="${logo}" alt="Placeholder image"/>
            </figure>
        </div>
        <div class="column is-two-thirds grid">
            <ul class="is-flex is-flex-direction-column">
                <li>
                    <h4 class="title is-4">Contatos</h4>
                </li>
                <li>
                    <a class="navbar-item" href="https://www.instagram.com/ateliebuguela/" target="_blank">@ATELIEBUGUELA</a>
                </li>
                <li>
                    <p class="navbar-item">+55 11 98056-2136</p>
                </li>
                <li>
                    <a class="navbar-item" href="mailto:annasantosbuguela@gmail.com?subject=Quero%20comprar%20um%20produto&body=Olá%20como%20posso%20adquirir%20um%20produto?%20" target="_blank">annasantosbuguela@gmail.com</a>
                </li>
                <li>
                    <p class="navbar-item" href="#">SÃO PAULO - SP | BRASIL</p>
                </li>
            </ul>

            <ul>
                <li>
                    <h4 class="title is-4">Sobre</h4>
                </li>
                <li>
                    <a class="navbar-item" href="#">Nossa História</a>
                </li>
                <li>
                    <a class="navbar-item" href="#">Sustentabilidade</a>
                </li>
                <li>
                    <a class="navbar-item" href="#">Eventos</a>
                </li>
            </ul>
        </div>
    </section>
    <section class="">
        <section>
            <ul class="is-flex is-justify-content-center is-gap-3 mb-2">
                <li>
                <span class="icon">
                    <a class="navbar-item" href="https://www.linkedin.com/in/anna-santos-buguela-b11350250/?originalSubdomain=br" target="_blank">
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                </span>
                </li>
                <li>
                <span class="icon">
                    <a class="navbar-item" href="mailto:annasantosbuguela@gmail.com?subject=Quero%20comprar%20um%20produto&body=Olá%20como%20posso%20adquirir%20um%20produto?%20" target="_blank">
                        <i class="fa-solid fa-envelope fa-2xl"></i>
                    </a>
                </span>
                </li>
                <li>
                <span class="icon">
                    <a class="navbar-item" href="https://www.instagram.com/ateliebuguela/" target="_blank">
                        <i class="fa-brands fa-solid fa-instagram fa-2xl"></i>
                    </a>
                </span>
                </li>
                <li>
                <span class="icon">
                    <a class="navbar-item" href="https://api.whatsapp.com/send/?phone=5511980562136&text&type=phone_number&app_absent=0" target="_blank">
                        <i class="fa-brands fa-square-whatsapp fa-2xl"></i>      
                    </a>
                </span>
                </li>
                <li>
                <span class="icon">
                    <a class="navbar-item" href="https://www.facebook.com/buguela.art/" target="_blank">
                        <i class="fa-brands fa-square-facebook fa-2xl"></i>      
                    </a>
                </span>
                </li>
            </ul>
        </section>
    </section>
    <div class="content has-text-centered">
      <small>2024 Buguela. Todos os direitos reservados | Projeto Integrador</small>
    </div>`;

    const footerElement = document.createElement('footer');
    footerElement.classList.add('footer');
    footerElement.classList.add('pb-6');
    footerElement.innerHTML = footerHtml;

    document.body.insertAdjacentElement('beforeend', footerElement)
}