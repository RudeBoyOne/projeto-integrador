import { getOrCreateMainElement } from "../renderMain";
import imageCategory1 from '../../imgs/bolsas.png'
import imageCategory2 from '../../imgs/bolsa_produto1.png'
import imageCategory3 from '../../imgs/bolsas2.jpeg'

export const renderCategory = () => {
    const category =
    `<div class="grid">
      <div class="cell is-flex is-flex-direction-column">
        <div class="is-flex-grow-1">
          <h4 class="title is-4">Categorias</h4>
        </div>
        <div class="is-flex-grow-1">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="${imageCategory1}" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-footer">
                <h5 class="card-header-title">Popular</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="cell is-flex is-flex-direction-column is-gap-2">
        <div>
          <div class="card">
            <div class="card-header">
                <h5 class="card-header-title">Bolsas</h5>
            </div>
            <div class="card-image">
              <figure class="image">
                <img src="${imageCategory2}" alt="Placeholder image" />
              </figure>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="${imageCategory3}" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-footer">
                <h5 class="card-header-title">Kit's</h5>
            </div>
          </div>
        </div>
    </div>`;

    const sectionCategory = document.createElement('section');
    sectionCategory.classList.add('section');
    sectionCategory.classList.add('fixed-grid');
    sectionCategory.innerHTML = category;

    const main = getOrCreateMainElement();

    main.appendChild(sectionCategory);
}