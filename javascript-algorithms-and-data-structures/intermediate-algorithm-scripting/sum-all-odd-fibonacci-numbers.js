function sumFibs(num) {
  let fibArray = [0]
  let _new = 1
  while (_new<=num) {
    fibArray.push(_new)
    _new = fibArray[fibArray.length-1]+fibArray[fibArray.length-2]
  }
  //console.log(fibArray)
  return fibArray.reduce((sum,value)=> {
    return value%2!=0?sum+value:sum
  },0)
}

sumFibs(10);
