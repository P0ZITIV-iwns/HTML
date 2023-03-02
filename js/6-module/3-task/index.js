import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.htmlCarousel();
    this.arrowClick();
    this.addClick();
  }

  htmlCarousel(){
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.innerHTML = 
    `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
    ${this.slides.map(slide =>
      `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `).join('')}
    </div>   
    `;
  }

  arrowClick(){
    let translate = 0;
    let countSlides = this.elem.querySelectorAll('.carousel__slide').length - 1;
    let count = 0;
    if (count === 0){
      this.elem.querySelector(".carousel__arrow_left").style.display = "none";
    }
    this.elem.addEventListener("click", (event) => {
      if (event.target.closest(".carousel__arrow_right")){
        if (count < countSlides){
          count++;
          translate -= this.elem.querySelector(".carousel__inner").offsetWidth;
          if (count === countSlides){
            this.elem.querySelector(".carousel__arrow_right").style.display = "none";
          }else{
            this.elem.querySelector(".carousel__arrow_left").style.display = '';
          }
        }
        
      }
      else if (event.target.closest(".carousel__arrow_left")){
        if (count > 0){
          count--;
          translate += this.elem.querySelector(".carousel__inner").offsetWidth;
          if (count === 0){
            this.elem.querySelector(".carousel__arrow_left").style.display = "none";
          }else{
            this.elem.querySelector(".carousel__arrow_right").style.display = "";
          }
        }
      }
      this.elem.querySelector(".carousel__inner").style.transform = 'translateX(' + translate + 'px)';
    });
  }

  addClick(){
    this.elem.addEventListener('click', (event) => {
      let id = event.target.closest('.carousel__slide')
      if (event.target.closest('.carousel__button')){
        this.elem.dispatchEvent
        (
          new CustomEvent("product-add", { // имя события должно быть именно "product-add"
            detail: id.dataset.id, // Уникальный идентификатора товара из объекта слайда
            bubbles: true // это событие всплывает - это понадобится в дальнейшем
        })
        );
      }
    });
  }
}
