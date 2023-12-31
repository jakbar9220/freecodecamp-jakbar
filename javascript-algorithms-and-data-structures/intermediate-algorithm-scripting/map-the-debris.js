function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const result = arr.map((obj) => {
    return { name: obj.name, orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt((earthRadius + obj.avgAlt) ** 3 / GM))};
  });

  console.log(result)
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
