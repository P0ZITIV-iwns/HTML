function highlight(table) {
  let tbody = table.getElementsByTagName('tbody')[0];
  let row = tbody.getElementsByTagName('tr');
  
  for (let i = 0; i < row.length; i++){
    let status = row[i].cells[3];

    if (status.hasAttribute("data-available")){
      if (status.dataset.available === "true"){
        row[i].classList.add("available");
      }else{
        row[i].classList.add("unavailable");
      }
    }else{
      row[i].setAttribute("hidden", "");
    }
    
    let gender = row[i].cells[2];
    if (gender.innerHTML === "m"){
      row[i].classList.add("male");
    }else{
      row[i].classList.add("female");
    }

    let age = row[i].cells[1];
    if (age.innerHTML < 18){
      row[i].style.textDecoration = "line-through";
    }
  }
}
