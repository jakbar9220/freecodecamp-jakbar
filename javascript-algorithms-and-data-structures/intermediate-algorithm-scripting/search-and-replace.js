function myReplace(str, before, after) {
  const regex = new RegExp(before, "i");
  if(str.match(regex) && (/^[^A-Z]/).test(str.match(regex)[0])) {
    // console.log(str.match(regex)[0])
    return str.replace(before,after.toLowerCase())
  }
  else {
    // console.log(after[0].toUpperCase().concat(after.slice(1)))
    return str.replace(before,after[0].toUpperCase().concat(after.slice(1)))
  }
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
