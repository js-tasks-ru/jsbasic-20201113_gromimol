/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lowerCase = str.toLowerCase()
  if (lowerCase.includes('1xbet') || str.includes('xxx')) {
    return true
  }
  return false
}
