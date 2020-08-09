// Exercise 1

// Product

class Product {
  constructor (name, brand, color, price) {
    this._name = name
    this._brand = brand
    this._color = color
    this._price = price
  }
}

// Catalog

class Catalog {
  _names = ['sneakers', 't-shirt', 'socks', 'gloves', 'shorts', 'jacket']
  _brands = ['adidas', 'nike', 'columbia', 'skechers', 'reebok', 'didriksons']
  _colors = ['white', 'black', 'gray', 'blue', 'orange', 'green', 'brown']
  _prices = ['999', '1999', '2999', '3999', '4999', '5999', '6999']
  _catalog = []

  constructor() {
    this._fillCatalog()
    this._renderCatalog()
  }

  _fillCatalog() {
    while(this._catalog.length < 8) {
      this._catalog.push(
        new Product(
          this._names[Math.floor(Math.random() * this._names.length)],
          this._brands[Math.floor(Math.random() * this._brands.length)],
          this._colors[Math.floor(Math.random() * this._colors.length)],
          this._prices[Math.floor(Math.random() * this._prices.length)],
        )
      )
    }
  }

  _renderCatalog() {
    this._catalog.forEach(product => {
      new Card(product)
    })
  }
}

// Card

class Card {
  _card = null
  _name = null
  _brand = null
  _color = null
  _price = null

  constructor(product) {
    this._product = product
    this._renderCatalog()
  }

  _addImg(productName) {
    const img = document.createElement('img')

    img.width = 50
    img.height = 50
    img.classList.add('card--img')
    img.addEventListener('click', this._showModalSlider.bind(this))

    switch (productName) {
      case 'gloves':
        img.src = '../img/gloves/gloves_1.png'
        img.alt = 'gloves'
        break
      case 'sneakers':
        img.src = '../img/sneakers/sneakers_1.png'
        img.alt = 'sneakers'
        break
      case 't-shirt':
        img.src = '../img/tshirts/t-shirt_1.png'
        img.alt = 't-shirt'
        break
      case 'socks':
        img.src = '../img/socks/socks_1.png'
        img.alt = 'socks'
        break
      case 'jacket':
        img.src = '../img/jackets/jacket_1.png'
        img.alt = 'jacket'
        break
      case 'shorts':
        img.src = '../img/shorts/shorts_1.png'
        img.alt = 'shorts'
        break
    }
    return img
  }

  _createSliderArrow(vector) {
    const arrow = document.createElement('a')
    const block = document.querySelector('.modal--slider')

    if (vector === 'left') {
      arrow.innerHTML = '&#10094'
      arrow.classList.add('modal--arrow-left')
      arrow.addEventListener('click', this._showSlide.bind(this, -1))
    }

    if (vector === 'right') {
      arrow.innerHTML = '&#10095;'
      arrow.classList.add('modal--arrow-right')
      arrow.addEventListener('click', this._showSlide.bind(this, 1))
    }

    return arrow
  }

  _createSliderCloseBtn() {
    const btn = document.createElement('button')

    btn.classList.add('modal--close-btn')
    btn.innerHTML = 'X'
    btn.addEventListener('click', this._closeModalSlider.bind(this))

    return btn
  }

  _showSlide(n) {
    const slide = document.querySelector('.modal--block_active')
    const slides = document.querySelectorAll('.modal--block')

    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('modal--block_active')) {
        slides[i].classList.remove('modal--block_active')

        if (n >= 0) {
          if ((i + 1) === slides.length) slides[0].classList.add('modal--block_active')
          else slides[i + 1].classList.add('modal--block_active')

          break
        }

        if (n < 0) {
          if ((i - 1) < 0) slides[slides.length-1].classList.add('modal--block_active')
          else slides[i - 1].classList.add('modal--block_active')

          break
        }
      }
    }
  }

  _createModalSlider(event, count) {
    const block = document.createElement('div')
    const leftArrow = this._createSliderArrow('left')
    const rightArrow = this._createSliderArrow('right')
    const closeBtn = this._createSliderCloseBtn()

    block.classList.add('modal--slider')

    for (let i = 0; i < count; i++) {
      let blockName = `modalBlock_${i+1}`
      let imgName = `modalImg_${i+1}`,
          imgAlt = `modalImg_${i+1}`

      blockName = document.createElement('div')
      imgName = document.createElement('img')

      if (i === 0) blockName.classList.add('modal--block_active')

      blockName.classList.add('modal--block')
      imgName.src = event.target.src.replace(/_1.png/g, `_${i+1}.png`);
      imgName.alt = imgAlt
      imgName.classList.add('modal--img')

      blockName.appendChild(imgName)
      block.appendChild(blockName)
    }

    document.body.style.overflow = 'hidden'

    block.appendChild(leftArrow)
    block.appendChild(rightArrow)
    block.appendChild(closeBtn)
    document.body.appendChild(block)

    return block
  }

  _showModalSlider(event) {
    this._createModalSlider(event, 3)
  }

  _closeModalSlider() {
    const slider = document.querySelector('.modal--slider')

    if (slider) {
      slider.remove()
      document.body.style.overflow = 'visible'
    }
  }

  _renderCatalog() {
    const catalog = document.querySelector('.catalog')
    this._card = document.createElement('div')
    this._name = document.createElement('p')
    this._brand = document.createElement('p')
    this._color = document.createElement('p')
    this._price = document.createElement('p')

    this._name.innerHTML = `<b>Name: </b>${this._product._name}`
    this._brand.innerHTML = `<b>Brand: </b>${this._product._brand}`
    this._color.innerHTML = `<b>Color: </b>${this._product._color}`
    this._price.innerHTML = `<b>Price: </b>${this._product._price}`

    this._card.classList.add('card')
    this._name.classList.add('card--data', 'card_name')
    this._brand.classList.add('card--data', 'card_brand')
    this._color.classList.add('card--data', 'card_color')
    this._price.classList.add('card--data', 'card_price')

    this._card.appendChild(this._addImg(this._product._name))
    this._card.appendChild(this._name)
    this._card.appendChild(this._brand)
    this._card.appendChild(this._color)
    this._card.appendChild(this._price)
    this._card.appendChild(this._createBtn())
    catalog.appendChild(this._card)
  }

  _createBtn() {
    const btn = document.createElement('button')

    btn.classList.add('card--btn')
    btn.innerHTML = 'Add to cart'

    btn.addEventListener('click', this.purchase.bind(this))

    return btn
  }

  purchase() {
    if (!cart) {
      cart = new Cart()
      cart.addToCart({
        name: this._product._name,
        price: +this._product._price,
      })
      cart._renderCart()
    } else {
      cart.addToCart({
        name: this._product._name,
        price: +this._product._price,
      })
      cart._renderCart()
    }
  }
}

// Cart

class Cart {
  _cart = []

  constructor() {
    this._renderCart()
  }

  addToCart(data) {
    this._cart.push(data)
  }

  _clearRenderedCart() {
    const cartChildren = document.querySelector('.cart').children
    let childrenLength = cartChildren.length

    while(childrenLength) {
      cartChildren[0].remove()
      childrenLength--
    }
  }

  _clearCart() {
    this._cart = []
    this._renderCart()
  }

  _createClearCartBtn() {
    const btn = document.createElement('button')

    btn.classList.add('cart--btn')
    btn.innerHTML = 'Clear cart'
    btn.addEventListener('click', this._clearCart.bind(this))

    return btn
  }

  _createCartDelimiter() {
    const delimiter = document.createElement('hr')

    delimiter.classList.add('cart--delimiter')

    return delimiter
  }

  _createCartTotalData() {
    const cartTotalData = document.createElement('p')
    let cartTotalAmount = 0,
        cartTotalPrice = 0

    this._cart.forEach(item => {
      cartTotalAmount++
      cartTotalPrice += item.price
    })

    cartTotalData.innerHTML = `<b>Total amount:</b> ${cartTotalAmount}<br><b>Total price:</b> ${cartTotalPrice}`

    return cartTotalData
  }

  _renderCart() {
    this._clearRenderedCart()

    const cart = document.querySelector('.cart')
    const wrp = document.createElement('div')

    wrp.classList.add('cart--wrp')
    cart.classList.add('cart_rendered')

    this._cart.forEach((item, ind) => {
      const cartItem = document.createElement('p')
      cartItem.innerHTML = `${ind+1} — <b>Name:</b> ${item.name} <b>Price:</b> ${item.price}`
      cart.appendChild(cartItem)
    })

    cart.appendChild(this._createCartDelimiter())
    wrp.appendChild(this._createCartTotalData())
    wrp.appendChild(this._createClearCartBtn())
    cart.appendChild(wrp)
  }
}

const cart = new Cart()
new Catalog()
