/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/

function checkCashRegister(price, cash, cid) {
  const currencyUnit = [
     {unit:"ONE HUNDRED", value:100},
     {unit:"TWENTY", value:20},
     {unit:"TEN", value:10},
     {unit:"FIVE", value:5},
     {unit:"ONE", value:1},
     {unit:"QUARTER", value:0.25},
     {unit:"DIME", value:0.1},
     {unit:"NICKEL", value:0.05},
     {unit:"PENNY", value:0.01}
  ];
  //  const currencyUnit = [
  //    ["ONE HUNDRED", 100],
  //    ["TWENTY", 20],
  //    ["TEN", 10],
  //    ["FIVE", 5],
  //    ["ONE", 1],
  //    ["QUARTER", 0.25],
  //    ["DIME", 0.1],
  //    ["NICKEL", 0.05],
  //    ["PENNY", 0.01]
  // ];

  let change = cash- price;
  let returnObj = {change:[], status:''}
  let changeArray = []

  for(let i=0;i<currencyUnit.length;i++) {
    let value = currencyUnit[i].value
    while (change>=value) {
      const index = changeArray.findIndex(obj => obj.unit === currencyUnit[i].unit);
      if(index!==-1) {
        changeArray[index].value += value;
      }
      else {
        changeArray.push(currencyUnit[i])
      }
      change-=value
      console.log(change)
    }
  }
   
  for (let i=0;i<changeArray.length;i++) {
    returnObj['change'].push(Object.values(changeArray[i]))
  }
  
  console.log(returnObj)
  return returnObj;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
