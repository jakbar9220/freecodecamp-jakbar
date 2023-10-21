function steamrollArray(arr, flatArr=[]) {
  arr.map(elem => {
    Array.isArray(elem)?steamrollArray(elem, flatArr):flatArr.push(elem)
  })
  console.log(flatArr)
  return flatArr
}

steamrollArray([1, [2], [3, [[4]]]]);
