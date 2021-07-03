// Объекты и массивы
// let arr = ['Alex', 'Barbara', 'Michael', [1, 2, 3]]

// console.log(arr[0].toUpperCase())

// arr[0] = 'John'

// console.log(arr[0] + arr[1])

// let arr = [3, 4, 5, 'World', 1, 2, 'Hello', 'It', 'is', 123, 13, 123, true, 'Me']
// // Hello World It is Me

// console.log(arr[6] + ' ' + arr[3])

// Добавление, удаление, изменение элементов из массива
// let cart = [1, 2, 3, 4, 5, 6, 7]

// удаление конкретных элементов
// cart.splice(1, 3) // (start, count)

// Добавление
// cart.push('ends', 'and') // to end
// cart.unshift('start') // to start

// Изменение
// cart[1] = 'hello'

// Удаление
// cart.pop() // delete last
// cart.shift() // delete first

// console.log(cart)

// let arr = [1, 2, 3, 4, 5]
// arr[0] = arr[0] - arr[1 + 1]
// arr[5] = arr[1 - 1] + arr[5]

// arr.push(14)
// arr.shift()
// arr.unshift(08)
// arr.unshift(12 - arr[3])
// arr[1] = 14 - arr[1]
// arr.splice(0, 3)
// // [3, 4, 5, NaN]
// arr.pop()

// 3, 4, 5, -2
// 4, 5, 0, 1, 4 x3
// 3, 4, 5, 4
// 3, 4, 5, 0
// 8, 8, 12, 14

// console.log(arr)

// let arr = []
// arr[3] = 8
// arr.shift()
// arr.push(4 - 2)
// arr[5] = 12
// arr.shift()
// arr[1 - 1] = arr[3] / 2
// arr.push(4)
// arr.pop()
// arr.slice(0, 2)
// arr.unshift(arr[0] + arr[1])
// [NaN, NaN, 2, e, 12]

// e, e, e, 12, 4
// NaN, 2, e, 12 x4
// 2, 8, e, e, 12
// NaN, 2, 4, 12, 8
// 8, 2, 12, 12

// console.log(arr);

let a = 'hello'
let c = 'world'
let b = 'bye'
let d = 'ikrom'
let arr = ['help']


arr[10] = c[0] + d
arr.pop()
arr[9] = arr[10] + a
arr.push(d.length + +'14' - 2)
arr.unshift(1)
arr.splice(4, 1)
// [1, 'help', e x6, undefinedhello, 17]
// arr[a.length] = c
// d = d + d.length - +'4'
// c = a.length * c.length
// arr.push(a + 'omg')

// help, e x8, NaN, world, 1, 25, helloomg x3
// help, e x7, NaN, world, 1, 17, 25, helloomg x3
// 
// 1, help, e x3, world, e x3, NaN, 17, helloomg x2
// 1, e x7, NaN, 17, e, e, 1, helloomg
// 1, hello, e, e, world, e x4, NaN, 16, helloomg
// 1, e x6, world, NaN, 17, helloomg
// 1, x4, world, e, e, NaN, 18, helloomg

console.log(arr);
