// Exercise 1

function createBoard() {
  const board = document.querySelector('.board')
  const cellWidth = '5vw'

  for (let rowCount = 1; rowCount <= 10; rowCount++) {
    const row = document.createElement('div')
    const numbers = document.createElement('div')

    row.classList.add('row')

    for (let cell = 1; cell <= 10; cell++) {
      const square = document.createElement('div')
      square.style.width = square.style.height = cellWidth

      if ((rowCount > 1 && rowCount < 10) && (cell > 1 && cell < 10)) {
        square.classList.add('square')
      }

      if ((rowCount > 1 && rowCount < 10) && (cell === 1 || cell === 10)) {
        square.innerText = 10 - rowCount
        square.style.width = '3vw'
        square.classList.add('numbers')
        if (cell === 10) square.classList.add('numbers_rotate')
      }

      if ((rowCount === 2) || (rowCount === 9)) {
        switch (cell) {
          case 2:
          case 9:
            square.innerText = 'R'
            break
          case 3:
          case 8:
            square.innerText = 'H'
            break
          case 4:
          case 7:
            square.innerText = 'B'
            break
          case 5:
            square.innerText = 'Q'
            break
          case 6:
            square.innerText = 'K'
            break
        }
      }

      if (((rowCount === 3) || (rowCount === 8)) && (cell > 1 && cell < 10)) {
        square.innerText = 'P'
      }

      if ((rowCount % 2 === 0 && rowCount > 1 && rowCount < 10) && (cell > 1 && cell < 10)) {
        (cell % 2 === 0) ? square.classList.add('black') : square.classList.add('white')
      } else if ((rowCount > 1 && rowCount < 10) && (cell > 1 && cell < 10)){
        (cell % 2 === 0) ? square.classList.add('white') : square.classList.add('black')
      }

      if (((rowCount === 1 || rowCount === 10) && cell === 1) ||
          ((rowCount === 1 || rowCount === 10) && cell === 10)) {
        square.style.height = '3vw'
        square.style.width = '3vw'
      }

      if ((rowCount === 1 || rowCount === 10) && (cell > 1 && cell < 10)) {
        square.innerText = String.fromCharCode(95 + cell)
        square.style.height = '3vw'
        square.classList.add('letters')
        if (rowCount === 1) square.classList.add('letters_rotate')
        row.classList.add('row')
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
