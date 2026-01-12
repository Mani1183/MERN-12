let principal = [100, 200, 300];
let rate = 5;
let time = 1;

let compoundInterest = principal.map(p => {
  let amount = p;
  for (let i = 1; i <= time; i++) {
    amount += amount * rate / 100;
  }
  return amount - p;
});

console.log(compoundInterest);
