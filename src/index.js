module.exports = function check(str, bracketsConfig) {
  let arr = str.split('')
  let pairs = []
  let current
  let next

  bracketsConfig.forEach(element => {
    pairs.push(element.join(''))
    })
  for (let i = 0; i < arr.length; i++) {
      current = arr[i]
      next = arr[i+1]
      if (pairs.includes(current+next)) {
        arr.splice(i, 2)
        i -= 2
      }
  }
  if (arr.length === 0) {
    return true
  } else {
    return false
  }
}