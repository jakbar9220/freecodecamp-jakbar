function translatePigLatin(str) {
  let consonantCluster = str.match(/^[^aeiou]+/)
  // console.log(str.replace(consonantCluster,"").concat(consonantCluster).concat("ay"))
  return consonantCluster!=null?str.replace(consonantCluster,"").concat(consonantCluster).concat("ay"):str.concat("way")
}

translatePigLatin("consonant");
