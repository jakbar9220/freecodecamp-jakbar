function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  const range = Array(arr[1]-arr[0]+1).fill(0).map((_,i)=>i+arr[0])
  //console.log(range)
  const findLCM = (a, b) => {
    return (a * b) / findGCD(a, b);
  }
  const findGCD = (a, b) => {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  }
  return range.reduce((lcm, value) => findLCM(lcm, value));
}

smallestCommons([1,5]);
