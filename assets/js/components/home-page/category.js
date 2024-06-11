import { getOrCreateMainElement } from "../../renderMain";
import imageCategory1 from '../../../imgs/bolsas.png'
import imageCategory2 from '../../../imgs/bolsa_produto1.png'
import imageCategory3 from '../../../imgs/bolsas2.jpeg'

export const renderCategory = () => {
    const category =
    `<div class="grid">
      <div class="cell is-flex is-flex-direction-column">
        <div class="is-flex-grow-1">
          <h3 class="title is-3">Catálogo</h3>
        </div>
        <div class="is-flex-grow-1">
          <a href="#produtos">
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
          </a>
        </div>
      </div>
      <div class="cell is-flex is-flex-direction-column is-gap-2">
        <div>
          <a href="#produtos">
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
          </a>
        </div>
        <div>
          <a href="#produtos">
            <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <img src="${imageCategory2}" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-footer">
                    <h5 class="card-header-title">Bolsas</h5>
                </div>
            </div>
          </a>
        </div>
    </div>`;

    const sectionCategory = document.createElement('section');
    sectionCategory.classList.add('section');
    sectionCategory.classList.add('fixed-grid');
    sectionCategory.innerHTML = category;

    const main = getOrCreateMainElement();

    main.appendChild(sectionCategory);
}