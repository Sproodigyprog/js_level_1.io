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

    if (catalog) {
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
      this._card.appendChild(this._createAddToCartBtn())
      this._card.appendChild(this._createToCartBtn())
      catalog.appendChild(this._card)
    }
  }

  _createAddToCartBtn() {
    const btn = document.createElement('button')

    btn.classList.add('card--btn')
    btn.innerHTML = 'Add to cart'
    btn.addEventListener('click', this.purchase.bind(this))

    return btn
  }

  _createToCartBtn() {
    const link = document.createElement('a')

    link.href = 'cart.html'
    link.classList.add('card--btn', 'card--to-cart-btn')
    link.innerHTML = 'Go to cart'

    return link
  }

  purchase() {
    if (!cart) {
      cart = new Cart()
      cart.addToCart({
        name: this._product._name,
        price: +this._product._price,
        sum: +this._product._price,
        amount: 1,
      })
    }

    if (!cart.getCart.length) {
      cart.addToCart({
        name: this._product._name,
        price: +this._product._price,
        sum: +this._product._price,
        amount: 1,
      })
    } else {
      const matches = cart.getCart.map((product, ind, arr) => {
        return product.name
      })

      const cartLocal = cart.getCart

      for (let i = 0; i < cartLocal.length; i++) {
        if (matches.indexOf(this._product._name) === -1) {
          cart.addToCart({
            name: this._product._name,
            price: +this._product._price,
            sum: +this._product._price,
            amount: 1,
          })
          break
        } else if (cartLocal[i].name === this._product._name) {
          cartLocal[i].amount++
          cartLocal[i].sum = cartLocal[i].amount * cartLocal[i].price
          break
        }
      }
    }
    document.cookie = `cart=${JSON.stringify(cart.getCart)}; sameSite=strict; Secure`
    cart._renderCart()
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

  _animateElement(elem) {
    elem.animate([
  // keyframes
      { left: '0', opacity: '1' },
      { left: '100px', opacity: '0' },
    ], 200)
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

  _createCollapseCartBtn() {
    const btn = document.createElement('a')

    btn.classList.add('cart--collapse-btn')
    btn.href = '#'
    btn.innerHTML = '\u02c5'
    btn.addEventListener('click', this._collapseCart.bind(this))

    return btn
  }

  _collapseCart() {
    event.preventDefault()
    document.querySelectorAll('.cart--item-wrp').forEach(item => {
      item.classList.toggle('cart_collapse')
    })

    const arrow = document.querySelector('.cart--collapse-btn')
    arrow.innerHTML === '\u02c4' ? arrow.innerHTML = '\u02c5' : arrow.innerHTML = '\u02c4'
  }

  _createAddProductAmountBtn(productInd) {
    const btn = document.createElement('button')

    btn.classList.add('cart--btn', 'cart-btn_item')
    btn.innerHTML = '+'
    btn.addEventListener('click', () => {
      this._addProductAmount(productInd)
    })
    return btn
  }

  _addProductAmount(productInd) {
    const elem = document.querySelector('.card--total-data--amount')
    this._cart[productInd].amount++
    this._animateElement(elem)
    setTimeout(this._renderCart.bind(this), 300)
    this._cart[productInd].sum = this._cart[productInd].amount * this._cart[productInd].price
  }

  _createReduceProductAmountBtn(productInd) {
    const btn = document.createElement('button')

    btn.classList.add('cart--btn', 'cart-btn_item')
    btn.innerHTML = '-'
    btn.addEventListener('click', () => {
      this._reduceProductAmount(productInd)
    })
    return btn
  }

  _reduceProductAmount(productInd) {
    const product = this._cart[productInd]
    const elem = document.querySelector('.card--total-data--amount')

    if (product.amount > 0) {
      product.amount--
      this._animateElement(elem)
      setTimeout(this._renderCart.bind(this), 300)
      product.sum = product.amount * product.price
    }
  }

  _createRmProductBtn(productInd) {
    const btn = document.createElement('button')

    btn.classList.add('cart--btn', 'cart-btn_item')
    btn.innerHTML = 'x'
    btn.addEventListener('click', () => {
      this._rmProduct(productInd)
    })
    return btn
  }

  _rmProduct(productInd) {
    const elem = document.querySelector('.card--total-data--amount')
    event.target.parentElement.remove()
    this._cart.splice(productInd, 1)
    this._animateElement(elem)
    setTimeout(this._renderCart.bind(this), 300)
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
    const cartTotalDataAmount = document.createElement('span')
    const cartTotalDataSum = document.createElement('span')
    let cartTotalAmount = 0,
        cartTotalSum = 0

    this._cart.forEach(item => {
      cartTotalAmount+=item.amount
      cartTotalSum += item.sum
    })

    cartTotalData.classList.add('cart--total-data')
    cartTotalDataAmount.classList.add('card--total-data--amount')
    cartTotalDataSum.classList.add('card--total-data--sum')

    cartTotalDataAmount.innerHTML = `${cartTotalAmount}`
    cartTotalDataSum.innerHTML = `${cartTotalSum}`
    cartTotalData.innerHTML = `<b>Total amount: </b>`
    cartTotalData.appendChild(cartTotalDataAmount)
    cartTotalData.innerHTML += `<br><b>Total sum: </b>`
    cartTotalData.appendChild(cartTotalDataSum)

    return cartTotalData
  }

  _renderCart() {
    this._clearRenderedCart()

    const cart = document.querySelector('.cart')
    const totalDataWrp = document.createElement('div')

    totalDataWrp.classList.add('cart--total-data-wrp')
    totalDataWrp.id = 'cart'
    cart.classList.add('cart_rendered')
    cart.appendChild(this._createCartDelimiter())

    this._cart.forEach((item, ind) => {
      const cartItem = document.createElement('p')
      const cartItemWrp = document.createElement('div')

      cartItemWrp.classList.add('cart--item-wrp')
      cartItem.innerHTML = `${ind+1} __________________ <br><b>Name:</b> ${item.name} <b>Price:</b> ${item.price}<br><b>Sum:</b> ${item.sum} <b>Amount:</b> ${item.amount}`
      cartItem.classList.add('cart--item')

      cartItemWrp.appendChild(cartItem)
      cartItemWrp.appendChild(this._createAddProductAmountBtn(ind))
      cartItemWrp.appendChild(this._createReduceProductAmountBtn(ind))
      cartItemWrp.appendChild(this._createRmProductBtn(ind))
      cart.appendChild(cartItemWrp)
    })

    cart.appendChild(this._createCartDelimiter())
    totalDataWrp.appendChild(this._createCartTotalData())
    totalDataWrp.appendChild(this._createClearCartBtn())
    cart.appendChild(this._createCollapseCartBtn())
    cart.appendChild(totalDataWrp)
  }

  get getCart() {
    return this._cart
  }
}

const cart = new Cart()
new Catalog()
