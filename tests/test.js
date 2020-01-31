const test = require('ava')


test('sum', t => {
  t.is(sum(1, 1), 2)
  t.is(sum(2, 2), 4)
  t.is(sum(1, 2, 3, 4, 5), 15)
  t.is(sum(1, -1), 0)
  t.is(sum(-1, -2), -3)
  t.log('um log')
})


function sum (...n) {
  return n.reduce((r, v) => r + v)
}

function division (a, b) {
  return a / b
}

function concat (...s) {
  return s[0]
}
