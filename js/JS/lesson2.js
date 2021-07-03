// Методы работ с простыми типами данных
let a = '                              Hello World                 '

a = a.toUpperCase() // CAPS LOCK
a = a.toLowerCase() // no caps lock

a.slice(0, 5) // вырезать буквы
a.length // количество символов
a = a.trim() // убрать пробелы по бокам

console.log(a.length)



let name = '   ALEXANDRA     ' // Alex

name = name.trim().toLowerCase()
name = name.slice(0, 1).toUpperCase() + name.slice(1)

console.log(name)

let year = '20.95'

parseInt(year) // целые числа
parseFloat(year) // любые числа
+year // любые числа
Number(year) // любые числа

let year1 = 2021

year1.toString() // Перевод в String

let num = 10.6

Math.floor(num) // Вниз
Math.ceil(num) // Вверх
Math.round(num) // Логичное

console.log(Math.max(1, 5, 18, 11, 15.5, 255.9)) // Максимальное
console.log(Math.min(+'-3', 1, 5, 18, 11, 15.5, 255.9)) // Минимальное

console.log(Math.pow(3, 3)) // Степень

let ab = 'hello world'

console.log(a.search('hello')) // Номер элемента
console.log(a.includes('hello')) // True/false

let id = Math.random().toString()

console.log(id.slice(0, 1) + id.slice(2))


