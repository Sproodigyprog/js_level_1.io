// Exercise 1

function createBoard() {
  const board = document.querySelector('.board')
  const boardWidth = board.clientWidth

  for (let k = 1; k <= 9; k++) {
    const row = document.createElement('div')
    const numbers = document.createElement('div')
    numbers.style.width = numbers.style.height = (boardWidth / 9) + 'px'

    if (k !== 9) {
      numbers.innerText = 9 - k
      numbers.classList.add('numbers')
      row.appendChild(numbers)
    }

    row.classList.add('row')

    for (let i = 1; i < 9; i++) {
      const square = letters = document.createElement('div')
      square.style.width = square.style.height = (boardWidth / 9) + 'px'

      if (k !== 9) {
        square.style.fontSize = '2em'
        square.style.color = 'blue'
      }

      if ((k === 1) || (k === 8)) {
        switch (i) {
          case 1:
          case 8:
            square.innerText = 'R'
            break
          case 2:
          case 7:
            square.innerText = 'H'
            break
          case 3:
          case 6:
            square.innerText = 'B'
            break
          case 4:
            square.innerText = 'Q'
            break
          case 5:
            square.innerText = 'K'
            break
        }
      }

      if ((k === 2) || (k === 7)) {
        square.innerText = 'P'
      }

      if ((k % 2 === 0) && (k !== 9)) {
        if (i % 2 === 0) square.classList.add('white')
        else square.classList.add('black')
      } else if (k !== 9){
        if (i % 2 === 0) square.classList.add('black')
        else square.classList.add('white')
      }

      if (k === 9) {
        square.innerText = String.fromCharCode(96 + i)
        row.classList.add('row__last')
        row.appendChild(square)
      }
      row.appendChild(square)
    }
    board.appendChild(row)
  }
}

createBoard()

// Exercise 2 and Exercise 3

class Product {
  constructor(name, brand, color, price) {
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

class productCard extends Product {
  constructor(product) {
    super()
    this._product = product
  }

  render () {
    const catalog = document.querySelector('.catalog')
    const target = document.createElement('div')
    const targetName = document.createElement('p')
    const targetBrand = document.createElement('p')
    const targetColor = document.createElement('p')
    const targetPrice = document.createElement('p')

    target.classList.add('product-card')

    targetName.innerHTML = `<b>Name</b>: ${this._product._name}`
    targetBrand.innerHTML = `<b>Brand:</b> ${this._product._brand}`
    targetColor.innerHTML = `<b>Color:</b> ${this._product._color}`
    targetPrice.innerHTML = `<b>Price:</b> ${this._product._price}`

    target.appendChild(targetName)
    target.appendChild(targetBrand)
    target.appendChild(targetColor)
    target.appendChild(targetPrice)
    catalog.appendChild(target)
  }
}

class Catalog {
  _catalog = []
  _goodsCount = Math.floor(Math.random() * 20)

  constructor(cards) {
    this._cards = cards
  }

  fillCatalog() {
    console.log(this._goodsCount)
    while(this._catalog.length < this._goodsCount) {
      this._catalog.push(this._cards[Math.floor(Math.random() * 4)])
    }
    return this._catalog
  }

  show() {
    this._catalog.forEach(card => card.render())
  }

  get getCatalog() {
    return this._catalog
  }
}

class Cart extends Catalog {
  goodsCount = 0
  totalPrice = 0

  constructor(goods) {
    super()
    this._goods = goods
  }

  calc() {
    const target = document.querySelector('.cart-data')
    console.log(this._goods)
    if (this._goods.length) {
      for (const good of this._goods) {
        this.goodsCount++
        this.totalPrice += parseInt(good._product._price)
      }
      target.innerHTML = `In cart: goods count — ${this.goodsCount}; total price — ${this.totalPrice}`
    } else target.innerHTML = `The cart is empty!`
  }
}

const socks = new Product('Socks', 'Nike', 'White', '999')
const gloves = new Product('Gloves', 'Columbia', 'Blue', '1999')
const tShirt = new Product('T-shirt', 'Adidas', 'Grey', '2999')
const sneakers = new Product('Sneakers', 'Skechers', 'Green', '4999')

const socksCard = new productCard(socks)
const glovesCard = new productCard(gloves)
const sneakersCard = new productCard(sneakers)
const tShirtCard = new productCard(tShirt)

const allCards = [socksCard, glovesCard, sneakersCard, tShirtCard]
const catalog = new Catalog(allCards)
catalog.fillCatalog()
catalog.show()

const cart = new Cart(catalog.getCatalog)
cart.calc()
