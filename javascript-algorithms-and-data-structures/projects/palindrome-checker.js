function palindrome(str) {
  let resultStr = str.toLowerCase().replace(/[^a-z0-9]/g,"")
  //console.log(resultStr)
  //console.log(resultStr == resultStr.split('').reverse().join(''))
  return resultStr == resultStr.split('').reverse().join('')
}

palindrome("My age is 0, 0 si ega ym.");