//факториал через рекурсию

function factorial(num) {
  while (num > 0) {
    return num * factorial(num - 1)
  }
  return 1
}
console.log(factorial(7))
