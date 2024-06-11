import { getOrCreateMainElement } from '../../renderMain'
import { dataProducts } from '../../mockData'

export const renderProdutos = () => {

    const section = document.createElement('section');
    section.classList.add('section')
    
    const divColumns = document.createElement('div');
    divColumns.classList.add('columns');
    divColumns.classList.add('is-multiline');


    dataProducts.forEach((product) => {

        const produtoHtml =
        `
            <div>
                <div class="card">
                    <div class="card-image">
                    <figure class="image is-1by1">
                        <img src="${product.imagem}" alt="Placeholder image" />
                    </figure>
                    </div>
                    <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                        <p class="title is-4">${product.title}</p>
                        <p class="subtitle is-6">${product.subtitle}</p>
                        </div>
                        <div class="media-right">
                        <figure class="image">
                            <i class="fa-regular fa-star fa-lg"></i>
                        </figure>
                        </div>
                    </div>
                    </div>
                    <div class="card-footer is-justify-content-flex-end">
                    <button>
                        <h5 class="card-header-title ">Comprar</h5>
                    </button>
                    </div>
                </div>
            </div>
        `;

        const divContainerCard = document.createElement('div');
        divContainerCard.classList.add('column');
        divContainerCard.classList.add('is-one-third');

        divContainerCard.innerHTML = produtoHtml;

        divColumns.appendChild(divContainerCard);

    });


    section.appendChild(divColumns);

    const main = getOrCreateMainElement();
    main.appendChild(section);


};