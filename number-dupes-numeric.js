/**
  isNumber("1") === true
  isNumber("1c") === false
  isNumber("3.14") === true
  isNumber("3.1.4") === false
*/

let numbers =[0,1,2,3,4,5,6,7,8,9]
let isNumber =[]

function isNumber (arg) {
  var chars = arg.split("")

  if(chars === '.' && chars.count<1) {
    false

  } else {
    true
  }
  for (let i = 0; i < chars; i++) {
    if (numbers.indexOf(item) !== -1) {
      false
    }
  }

}


function isNumeric (args) {
  const numbers =['0','1','2','3','4','5','6','7','8','9']
  const chars = args.split('')

  // Make sure that any '-' show up only once or zero times, and if once, only
  // at the start of the string.
  if (args.lastIndexOf('-') > 0) {
    return false
  }

  // Make sure there's only one or zero "." characters in the argument
  if (args.split('.').length > 2) {
    return false
  }

  for (let i = 0; i < chars.length; i++) {
    if (numbers.indexOf(chars[i]) === -1) {
      return false
    }
  }

  return true
}



dupes = [1, 4, 4, 5, 6, 6, 7, 7, 1]
let outlier = 0

for (let i = 0; i < dupes.length; i++) {
  outlier ^= dupes[i]
}
console.log(outlier) // 5
