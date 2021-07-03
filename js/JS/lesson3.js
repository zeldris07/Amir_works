// Вопросы пользователю и валидация
// alert('Hello, user')
// let age = confirm('Есть 18?')
// let ask = prompt('Как Вас зовут?')

// console.log(ask)

let arr = [1, 2, 3, 4, 5]
arr[0] = arr[0] - arr[1 + 1]
arr[5] = arr[1 - 1] + arr[5]

arr.push(14)
arr.shift()
arr.unshift(08)
arr.unshift(12 - arr[3])
arr[1] = 14 - arr[1]
arr.splice(0, 3)
arr.pop()

// 3, 4, 5, -2
// 4, 5, 0, 1, 4 x3
// 3, 4, 5, 4
// 3, 4, 5, 0
// 8, 8, 12, 14

console.log(arr)
