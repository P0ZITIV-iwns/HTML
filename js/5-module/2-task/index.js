function toggleText() {
  document.querySelector(".toggle-text-button").onclick = function(){
    let text = document.getElementById("text");
    text.hidden = !text.hidden;
  }
}
