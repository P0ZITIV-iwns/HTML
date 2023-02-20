function factorial(n) {
  let fact = 1.0;
  while(n){
    fact *= n;
    n--;
  }
  return fact;
}