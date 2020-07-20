// Exercise №3

const a = +prompt('Input first number:')
const b = +prompt('Input second number:')

if (a >= 0 && b >=0) alert('Subtraction result: ' + (a - b))
if (a < 0 && b < 0) alert('Multiplication result: ' + (a * b))
if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) alert('Addition result: ' + (a + b))

// Exercise №4

let n = Math.floor(Math.random() * 16)

console.log('n = ' + n)

function x(n) {
  switch (n) {
    case 0:
      console.log(0)
    case 1:
      console.log(1)
    case 2:
      console.log(2)
    case 3:
      console.log(3)
    case 4:
      console.log(4)
    case 5:
      console.log(5)
    case 6:
      console.log(6)
    case 7:
      console.log(7)
    case 8:
      console.log(8)
    case 9:
      console.log(9)
    case 10:
      console.log(10)
    case 11:
      console.log(11)
    case 12:
      console.log(12)
    case 13:
      console.log(13)
    case 14:
      console.log(14)
    case 15:
      console.log(15)
  }
}

x(n)

// Exercise №5

function add(a, b) {
  return (a + b)
}

function subtr(a, b) {
  return (a - b)
}

function mul(a, b) {
  return (a * b)
}

function div(a, b) {
  return (a / b)
}

// Exercise №6

const c = +prompt('Input first number:')
const d = +prompt('Input second number:')
const oper = prompt('Input operation:', '+ - * /')

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case '+':
      alert('Addition result: ' + add(arg1, arg2))
      break
    case '-':
      alert('Subtraction result: ' + subtr(arg1, arg2))
      break
    case '*':
      alert('Multiplication result: ' + mul(arg1, arg2))
      break
    case '/':
      alert('Division result: ' + div(arg1, arg2))
      break
    default:
      alert('No such operation exists!')
  }
}

mathOperation(c, d, oper)

// Exercise №8

const val = +prompt('Input number:')
const pow = +prompt('Input power:')

function power(val, pow) {

  if (val === 0 && pow === 0) {
    return ('The result is undefined!')
  }

  if (pow === 0){
    val = 1
    return val
  }

  if (pow === 1) return val

  return val * power(val, pow-1)
}

alert('Exponentiation result: ' + power(val, pow))
