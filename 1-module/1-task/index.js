function factorial(n) {
  let result = n
  if (result === 0) {
    result = 1
  }
  for (let i = n - 1; i > 1; i--){
    result *= i
  }

  return result
}
