function spinalCase(str) {
  // console.log(((str.split(/\s|_|(?=[A-Z])/)).map(s=>s=s.toLowerCase())).join("-"))
  return ((str.split(/\s|_|(?=[A-Z])/)).map(s=>s=s.toLowerCase())).join("-")
}

spinalCase('This Is Spinal Tap');
