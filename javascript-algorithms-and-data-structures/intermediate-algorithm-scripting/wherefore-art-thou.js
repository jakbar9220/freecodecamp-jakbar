function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source)
  // console.log(collection.filter(collectionObject=>sourceKeys.every(sourceKey=>collectionObject[sourceKey]==source[sourceKey])))
  return collection.filter(collectionObject=>sourceKeys.every(sourceKey=>collectionObject[sourceKey]==source[sourceKey]))

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
