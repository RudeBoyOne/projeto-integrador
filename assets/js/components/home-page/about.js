import { getOrCreateMainElement } from "../../renderMain";
import imageAbout from "../../../imgs/buguela3.png"

export const renderAbout = () => {
    const about =
        `
    <div class="columns">
        <div class="content column">
            <h2>Sobre nós</h2>
            <p class="has-text-justified">
            Somos mais do que um espaço de arte; somos um movimento criativo comprometido com a sustentabilidade e a celebração da cultura afrodescendentre. No coração do nosso ateliê, encontramos inspiração na riqueza de tradições e na diversidade de histórias que moldam nossa identidade. <br>
            No Ateliê Buguela, acreditamos que a arte não apenas inspira, mas também transforma. É por isso que nos dedicamos a criar não apenas belas obras, mas também a promover práticas sustentáveis. Utilizando tecidos que seriam descartados como sobras de materiais, damos vida a novas criações, ressignificando o que outros considerariam desperdício.<br>
            Nossa missão vai além da expressão artística; é também um compromisso com o meio ambiente e com as comunidades que servimos. Ao reutilizar materiais, reduzimos o impacto ambiental da indústria têxtil e promovemos uma abordagem mais consciente em relação ao consumo. <br>
            Além disso, estamos orgulhosos de celebrar a riqueza da cultura afrodescendente em cada obra que produzimos. De inspirações ancestrais a temas contemporâneos, nossas criações refletem a diversidade e a vitalidade da herança africana, enriquecendo o diálogo cultural e promovendo a inclusão. <br>
            No Ateliê Buguela, somos mais do que artistas; somos agentes de mudança, impulsionados pelo poder da criatividade e pelo compromisso com um mundo mais sustentável e igualitário. Junte-se a nós nesta jornada de descoberta, inspiração e impacto positivo. <br><br>
            Seja parte do movimento, Seja parte do Ateliê Buguela!
            </p>
        </div>
        <div class="column is-flex is-flex-direction-column is-justify-content-center">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-2by2">
                    <img src="${imageAbout}" alt="Placeholder image"/>
                    </figure>
                </div>
            </div>
        </div>
    </div> `;

    const sectionAbout = document.createElement('section');
    sectionAbout.classList.add('section')
    sectionAbout.innerHTML = about;

    const main = getOrCreateMainElement();

    main.appendChild(sectionAbout);
};