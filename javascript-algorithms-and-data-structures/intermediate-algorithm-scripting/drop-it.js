function dropElements(arr, func) {
  let i = 0
  while(i<arr.length && !func(arr[i])) {
    i++
  }
  //console.log(i==arr.length?[]:arr.slice(i))
  return i==arr.length?[]:arr.slice(i);
}

dropElements([1, 2, 3], function(n) {return n < 3; });
