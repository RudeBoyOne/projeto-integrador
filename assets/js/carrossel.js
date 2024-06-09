import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import imagemCarrosel from '../imgs/bolsaCarroselTwo.png';

// Ativa os módulos necessários para o Swiper
Swiper.use([Pagination, Navigation]);

let swiperInstance;

export const renderCarrossel = () => {
  const carroselHTML = `
    <section class="box-title-principal">
      <h1 class="is-size-1">Buguela</h1>
    </section>

    <section class="swiper section">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="${imagemCarrosel}" alt="Descrição da imagem 1">
        </div>
        <div class="swiper-slide">
          <img src="${imagemCarrosel}" alt="Descrição da imagem 2">
        </div>
        <div class="swiper-slide">
          <img src="${imagemCarrosel}" alt="Descrição da imagem 3">
        </div>
        <div class="swiper-slide">
          <img src="${imagemCarrosel}" alt="Descrição da imagem 4">
        </div>
      </div>
      
      <div class="swiper-button-prev has-text-warning"></div>
      <div class="swiper-button-next has-text-warning"></div>
      
      <div class="swiper-pagination"></div>
    </section>`;

  const mainElement = document.getElementById('main') || document.createElement('main');
  mainElement.id = 'main';
  mainElement.innerHTML = carroselHTML;
  document.body.appendChild(mainElement);

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
      768: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      1216: {
        slidesPerView: 2,
        spaceBetween: 40
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
