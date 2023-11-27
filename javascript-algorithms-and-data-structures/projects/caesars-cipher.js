// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {
  let resultStr = ''
  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      //console.log(char.charCodeAt(0))
      let charShift = (char.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26 + 'A'.charCodeAt(0)
      char = String.fromCharCode(charShift)
    }
    resultStr+=char
  }
  console.log(resultStr)
  return resultStr;
}

rot13("SERR PBQR PNZC");
