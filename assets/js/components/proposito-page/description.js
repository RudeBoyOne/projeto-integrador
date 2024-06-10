import {getOrCreateMainElement} from '../../renderMain'
import image1 from '../../../imgs/buguela2.png'
import image2 from '../../../imgs/buguela1.png'

export const renderDescription = () => {
    const descriptionHtml = 
    `
    <div class="columns section">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-2by2">
              <img src="${image1}" alt="Placeholder image" />
            </figure>
          </div>
        </div>
      </div>
      <div class="column is-flex is-flex-direction-column is-justify-content-center">
        <h2 class="title is-2">Significado</h2>
        <p class="has-text-justified">Somos um ateliê sustentável dedicado à celebração da cultura afrodescendente e ao empoderamento das mulheres.
          Nossa missão é criar peças de arte e artesanato que honrem as tradições africanas, utilizando práti- cas
          sustentáveis em todo o processo de produção. Valorizamos a riqueza da diversidade cultural e buscamos promover a
          inclusão em todas as nossas atividades. Por meio de nossa arte, buscamos inspirar, educar e pro- mover o diálogo
          sobre questões importantes para a comunidade afrodescendente e para as mulheres.</p>
      </div>
    </div>
    <div class="columns section">
      <div class="column is-flex is-flex-direction-column is-justify-content-center">
        <h2 class="title is-2">Proposta</h2>
        <p class="has-text-justified">Criamos acessórios únicos que homenageiam a rica herança da cultura negra, utilizando mate- riais
          reutilizados para promover um impacto positivo no meio ambiente. Nosso objetivo é oferecer produtos de
          qualidade a preços aces- síveis, tornando a moda e a cultura acessíveis a todos. Junte-se a nós nesta jornada
          para um mundo mais inclusivo e sustentável, um aces- sório de cada vez.</p>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-2by2">
              <img src="${image2}" alt="Placeholder image" />
            </figure>
          </div>
        </div>
      </div>
    </div>`;

    const sectionDescription = document.createElement('section');
    sectionDescription.classList.add('content');
    sectionDescription.innerHTML = descriptionHtml;

    const main = getOrCreateMainElement();

    main.appendChild(sectionDescription);
}