function sumPrimes(num) {
  let primes = []
  for(let i = 2;i<=num;i++) {
    primes.every(prime=>i%prime!=0)?primes.push(i):null
  }
  //console.log(primes)
  return primes.reduce((sum,value)=> {
    return sum+value
  })
}

sumPrimes(10);
