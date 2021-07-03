// Переменные и константы
let me = "Shakhzod" // Строковый тип / String
let num = 7.5 // Number
let bool = true // Boolean - положительное
let bool1 = false // Boolean - отрицательное
let arr = [] // Array - массив
let obj = {} // Object - объект

let err1 = undefined // Ошибочный тип данных (не найдено)
let err2 = null // Ошибочный тип данных (ноль)
let err3 = NaN // Невозможное выражение

let helloWorld = "Hello" // CamelCase
let hello_world = "Hello" // snake_case

// Конкатенация строк и переменных
console.log('Всем привет, ' + ' ' + me + ' ' + helloWorld + hello_world)
console.log(`Всем привет ${me} ${helloWorld} ${hello_world}`)

let abc = 'hello' // String
let abcd = 10 // Number/Integer
let abcde = true // Boolean
let arr_a = [] // Array
let obj_a = {}

// Проверка на тип
console.log(typeof(abc))
console.log(typeof(abcd))
console.log(typeof(abcde))
console.log(typeof(arr_a)) // object
console.log(typeof(obj_a)) // object

// Вычисления и математика
let z = 3
let y = 3 * z // 9

console.log(z ** y) // Возведение в степень
console.log(z % y) // Остаток от деления
console.log((1 + 1 - 5 * z) / z * 2)

// = == ===
let pop = 1

console.log(1 == '1') // true - нестрогое сравнение
console.log(1 === '1') // false - строгое сравнение
console.log(1 > 1) // false
console.log(1 < 1) // false
console.log(1 >= 1) // true
console.log(1 <= 1) // true
console.log(1 <= 1 + 1) // true

// Объявите две переменные: admin и name. Запишите строку "Джон" в переменную name. Скопируйте значение из переменной name в admin. Выведите в консоль admin
let name = 'John'
let admin

let car_price = 35000
let gov = 5
let spending_month = 20
let tuning = 10000
let total

spending_month = spending_month * 12 // 240
gov = car_price / 100 * gov // 1750

total = car_price + gov + spending_month + tuning

console.log(total)

let cafe = 0

let clients_1 = 10
let clients_1_money = 35

let clients_2 = 28
let clients_2_money = 58.5

let bazar = 160
let coffee = 124

let officiants = 35

let total1

// Сохраняем все доходы
let income = clients_1_money * clients_1 + clients_2 * clients_2_money

// Сохраняем все расходы
let spending = (income / 100 * officiants) + bazar + coffee

total = income - spending

console.log(total)

// общий доход: 702,5
// общий расход: 224,5
// всего: 478-
