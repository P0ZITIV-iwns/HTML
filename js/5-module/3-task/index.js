function initCarousel() {
  let translate = 0;
  document.querySelector(".carousel__arrow_left").style.display = "none";
  spin = (event) => {
    if (event.target.closest(".carousel__arrow_right")){
      translate -= document.querySelector(".carousel__inner").offsetWidth;
    }
    else if (event.target.closest(".carousel__arrow_left")){
      translate += document.querySelector(".carousel__inner").offsetWidth;
    }
    
    document.querySelector(".carousel__inner").style.transform = `translateX(${translate}px)`;

    if (translate === document.querySelector(".carousel__inner").offsetWidth * -3){
      document.querySelector(".carousel__arrow_right").style.display = "none";
    }
    else if (!translate){
      document.querySelector(".carousel__arrow_left").style.display = "none";
    } else {
      document.querySelector(".carousel__arrow_left").style.display = '';
      document.querySelector(".carousel__arrow_right").style.display = '';
    }
  }

  document.addEventListener("click", spin)
}
