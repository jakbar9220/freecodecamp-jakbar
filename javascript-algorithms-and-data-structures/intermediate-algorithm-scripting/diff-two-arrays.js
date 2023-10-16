function diffArray(arr1, arr2) {
  let newArr = [];
  let tmp = [];
  tmp = arr1.filter(num=>arr2.includes(num)==false)
  newArr = arr2.filter(num=>arr1.includes(num)==false && tmp.includes(num)==false)

  return tmp.concat(newArr);
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
