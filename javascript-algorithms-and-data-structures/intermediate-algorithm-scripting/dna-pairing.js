function pairElement(str) {
  let basePairs = {'A':'T','T':'A','C':'G','G':'C'}
  let result = []
  str.split("").map(s=>result.push([s,basePairs[s]]))
  console.log(result)
  return result;
}

pairElement("GCG");
