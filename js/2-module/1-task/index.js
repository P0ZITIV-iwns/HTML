function sumSalary(salaries) {
  let sum = 0;
  for (element in salaries){
    if (Number.isFinite(salaries[element])){
      sum += salaries[element];
    }
  }
  return sum;
}
