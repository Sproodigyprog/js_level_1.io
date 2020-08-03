// Exercise 1

console.log('Exercise 1')
let n = 0
while (n <= 100) {
  let m = 2
  while((m < n) && (n % m !== 0)) {
    m++
    if (m === n) {
      console.log(n)
    }
  }
  n++
}

// Exercise 3

console.log('Exercise 3')
function fillBasket() {
  let basket = []
  while (basket.length < 5) {
    basket.push(Math.floor(Math.random() * 50))
  }
  return basket
}

function countBasketPrice() {
  const basket = fillBasket()
  console.log(`Basket: ${basket.join(',')}`)
  return basket.reduce((initial, value) => (initial + value), 0)
}

console.log(`Sum of basket: ${countBasketPrice()}`)

// Exercise 4

console.log('Exercise 4')
for (let i = 0; i < 10; console.log(i++)) {}

// Exercise 5

// Example 1

console.log('Exercise 5')
console.log('Example 1')
let x = ''
for (let k = 0; k < 20; k++) {
  console.log(x += 'x')
}

// Example 2

console.log('Example 2')
let arr = []
for (let k = 0; k < 20; k++) {
  arr.push('x')
  console.log(arr.join(''))
}

// Example 3

console.log('Example 3')
for (let k = 2; k < 22; k++) {
  console.log(new Array(k).join('x'))
}
