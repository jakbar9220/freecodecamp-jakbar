function destroyer(arr) {
  let args = []
  for(let i=1;i<arguments.length;i++) {
    args.push(arguments[i])
  }
  return arr.filter(num=>args.includes(num)==false);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
