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

      if (k % 2 === 0 && k !== 9) {
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

// Exercise 2



// Exercise 3
