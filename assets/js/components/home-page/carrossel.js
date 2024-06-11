import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import imagemCarrosel from '../../../imgs/buguela2.png';
import imagemCarrosel2 from '../../../imgs/bolsas2.jpeg';
import imagemCarrosel3 from '../../../imgs/buguela1.png';
import imagemCarrosel4 from '../../../imgs/buguela4.png';
import { getOrCreateMainElement } from '../../renderMain';

// Ativa os módulos necessários para o Swiper
Swiper.use([Pagination, Navigation]);

let swiperInstance;

export const renderCarrossel = () => {
  const titleAndCarrossel = `
    <section class="swiper section">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="${imagemCarrosel}" alt="Descrição da imagem 1">
              </figure>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="${imagemCarrosel2}" alt="Descrição da imagem 1">
              </figure>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="${imagemCarrosel3}" alt="Descrição da imagem 1">
              </figure>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="${imagemCarrosel4}" alt="Descrição da imagem 1">
              </figure>
            </div>
          </div>
        </div>
      </div>
      
      <div class="swiper-button-prev has-text-warning"></div>
      <div class="swiper-button-next has-text-warning"></div>
      
      <div class="swiper-pagination"></div>
    </section>`;

  const sectionTitleAndCarrossel = document.createElement('section');
  sectionTitleAndCarrossel.innerHTML = titleAndCarrossel;
  const main = getOrCreateMainElement();

  main.appendChild(sectionTitleAndCarrossel);


  initSwiper();
};

const initSwiper = () => {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }

  swiperInstance = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    },
    on: {
      init: addBulmaClassToBullets,
      slideChange: addBulmaClassToBullets
    }
  });
};

const addBulmaClassToBullets = () => {
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');
  bullets.forEach(bullet => {
    bullet.classList.remove('has-background-warning');
  });

  const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
  if (activeBullet) {
    activeBullet.classList.add('has-background-warning');
  }
};
