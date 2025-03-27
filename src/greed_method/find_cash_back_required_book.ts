function findCashRequired_b(moneyBack: number) {
  debugger;
  console.log("Input:", moneyBack);
  // All Available Cash Denominations
  const C = [1, 2, 5, 10, 20, 50, 200, 500];

  let find = moneyBack;
  let choice = C.length - 1;

  const coins = [];

  while (choice >= 0 && find > 0) {
    if (C[choice] <= find) {
      coins.push(C[choice]);
      find = find - C[choice];
    } else {
      choice = choice - 1;
    }
  }

  console.log(coins);
  let sum = 0;
  coins.forEach((item) => (sum += item));
  console.log("Sum:", sum);
}

findCashRequired_b(791);
