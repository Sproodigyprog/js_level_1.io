// Exercise 1

console.log('Exercise 1')

// Example 1

console.log('Example 1')

function nToObj(n) {
  if (n < 0) n = Math.abs(n)

  let obj = {}
  const nStr = n.toString()
  const nStrLength = nStr.length

  if(n > 9999) {
      console.log('The number is too big!')
      return obj
  }

  for(let i = 1; i <= nStrLength; i++) {
    switch(-i) {
      case -1:
        if ((nStr[nStrLength-1]) === undefined) break
        obj['ones'] = Number(nStr[nStrLength-1])
      case -2:
        if ((nStr[nStrLength-2]) === undefined) break
        obj['tens'] = Number(nStr[nStrLength-2])
      case -3:
        if ((nStr[nStrLength-3]) === undefined) break
        obj['hundreds'] = Number(nStr[nStrLength-3])
      case -4:
        if ((nStr[nStrLength-4]) === undefined) break
        obj['thousands'] = Number(nStr[nStrLength-4])
    }
  }
  return obj
}

console.log(nToObj(3522))

// Example 2

console.log('Example 2')

function nToObj2(n) {
  let obj = {}

  if(n < 0 || n > 999) {
    console.log('The number must be in the range 0 ... 999!')
    return obj
  }

  const hundreds = Math.floor(n / 100)
  const tens = Math.floor((n - hundreds * 100) / 10)
  const ones = n - (hundreds * 100 + tens * 10)

  obj['hundreds'] = hundreds
  obj['tens'] = tens
  obj['ones'] = ones

  return obj
}

console.log(nToObj2(530))

// Exercise 2

console.log('Exercise 2')


const sneakers = {
  name: 'sneakers',
  brand: 'nike',
  article: 'n-s-389',
  color: 'white',
  price: 3999,
}

const shirt = {
  name: 'shirt',
  brand: 'columbia',
  article: 'c-s-890',
  color: 'grey',
  price: 2999,
}

const socks = {
  name: 'socks',
  brand: 'adidas',
  article: 'a-s-330',
  color: 'white',
  price: 999,
}

function fillBasket() {
  const arr = [sneakers, shirt, socks]
  const basket = []

  while (basket.length < 5) {
    basket.push(arr[Math.floor(Math.random() * 3)])
  }
  return basket
}

function countBasketPrice() {
  const basket = fillBasket()
  let basketSum = 0

 for (const item of basket) {
   console.log(`${item.name}: ${item.price}`)
 }

  basket.forEach(function(product) {
    basketSum += product.price
  })

  return basketSum
}

console.log(`Sum of basket: ${countBasketPrice()}`)

// Exercise 3

console.log('Exercise 3')

class Product {
  constructor (name, brand, color, price) {
    this._name = name
    this._brand = brand
    this._color = color
    this._price = price
  }

  get name() {
    return this._name
  }

  get brand() {
    return this._brand
  }

  get color() {
    return this._color
  }

  get price() {
    return this._price
  }
}

class Card extends Product {
  constructor(name, brand, color, price) {
    super(name, brand, color, price)
  }

  showProductData() {
    document.getElementsByClassName('card--name')[0].innerHTML = `Name: ${this._name}`
    document.getElementsByClassName('card--brand')[0].innerHTML = `Brand: ${this._brand}`
    document.getElementsByClassName('card--color')[0].innerHTML = `Color: ${this._color}`
    document.getElementsByClassName('card--price')[0].innerHTML = `Price: ${this._price}`
  }
}

class Basket extends Product {
  constructor(name, brand, color, price) {
    super(name, brand, color, price)
  }

  showBasketData() {
    document.getElementsByClassName('basket--brand')[0].innerHTML = `<b>${this._brand}</b>`
    document.getElementsByClassName('basket--name')[0].innerHTML = `Name: ${this._name}`
    document.getElementsByClassName('basket--price')[0].innerHTML = `Price: ${this._price}`
  }
}

const jacket = new Product('Jacket', 'Nike', 'Lightgreen', '3999')
const shoes = new Card('Sneakers', 'Adidas', 'Lightblue', '4999')
const basket = new Basket('Sneakers', 'Nike', 'White', '6999')

shoes.showProductData()
basket.showBasketData()
