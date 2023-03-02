import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.htmlCard();
    this.addClick();
  }

  htmlCard(){
    this.elem = document.createElement('div');
    this.elem.classList.add('card');
    this.elem.innerHTML = 
    `
      <div class="card__top">
          <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
          <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `;
  }
  
  addClick(){
    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.card__button')){
        this.elem.dispatchEvent
        (
          new CustomEvent("product-add", { // имя события должно быть именно "product-add"
            detail: this.product.id, // Уникальный идентификатора товара из объекта товара
            bubbles: true // это событие всплывает - это понадобится в дальнейшем
          })
        );
      }
    });
  }
}
