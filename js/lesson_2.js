// Exercise №3

const a = +prompt('Input first number:')
const b = +prompt('Input second number:')

if (a >= 0 && b >=0) alert('Subtraction result: ' + (a - b))
else if (a < 0 && b < 0) alert('Multiplication result: ' + (a * b))
else if (a >= 0 && b < 0 || a < 0 && b >= 0) alert('Addition result: ' + (a + b))

// Exercise №4

let n = Math.floor(Math.random() * 16)
console.log('n = ' + n)

function x(n) {
  if (n > 15) return // To avoid infinite recursion when testing in console
  if (n === 16) return

  switch (n) {
    case n:
    console.log(n)
    break;
  }

  return x(n + 1)
}

x(n)

// Exercise №5

function add(a, b) {
  return (a / b)
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

  if (pow === 1) return val

  return val * power(val, pow-1)
}

alert ('Exponentiation result: ' + power(val, pow))
