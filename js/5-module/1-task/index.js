function hideSelf() {
  let button = document.querySelector(".hide-self-button");
  hide = () => {button.hidden = true}
  button.addEventListener("click", hide);
}
