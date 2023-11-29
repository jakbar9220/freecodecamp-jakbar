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

  let origChange = cash- price;
  let change = origChange;
  let returnObj = {change:[], status:''}
  let changeArray = []

  const cidTotal = cid.reduce((sum, [_, value]) => sum + value, 0);

  for(let i=0;i<currencyUnit.length;i++) {
    //console.log('itertaion',i)
    let value = currencyUnit[i].value
    let j=0
    while (change>=value) {
      //console.log('while itertaion',j)
      const index = changeArray.findIndex(obj => obj.unit === currencyUnit[i].unit);
      let cidUnitIndex = cid.findIndex(subArray => subArray.includes(currencyUnit[i].unit))
      if(cid[cidUnitIndex][1]>=value) {
        //console.log(cid[cidUnitIndex])
        cid[cidUnitIndex][1] = (cid[cidUnitIndex][1] - currencyUnit[i].value).toFixed(2);
        if(index!==-1) {
          changeArray[index].value = parseFloat((
            parseFloat(changeArray[index].value) + value
          ).toFixed(2));
        }
        else {
          let obj = { ...currencyUnit[i] }; //Create a new object
          changeArray.push(obj)
        }
      }
      else {
        break;
      }
      change = (change-value).toFixed(2)
      j++;
    }
  }

  // Include zero values in cid into changeArray
  for (let i = 0; i < cid.length; i++) {
    const unit = cid[i][0];
    const value = cid[i][1];
    const index = changeArray.findIndex((obj) => obj.unit === unit);
    if (parseFloat(value) === 0 && index === -1) {
      changeArray.push({ unit, value });
    }
  }
   
  for (let i=0;i<changeArray.length;i++) {
    returnObj['change'].push(Object.values(changeArray[i]))
  }

  const changeArrayTotal = changeArray.reduce((sum, { value }) => sum + value, 0);

  if(cidTotal<origChange || changeArrayTotal<change) {
    returnObj.status = 'INSUFFICIENT_FUNDS'
    returnObj.change = []
  } else if(cidTotal == origChange) {
    returnObj.status = 'CLOSED'
  } else {
    returnObj.status = 'OPEN'
  }
  console.log(returnObj)
  return returnObj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
