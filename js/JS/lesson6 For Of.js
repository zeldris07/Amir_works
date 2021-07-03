// Циклы массивов
let a = [7, 10, 1.5, 1, 2, 3, 4, 0, 5, 6]

// Цикл for of
for(let item of a) { // Настройки цикла
    // Тело цикла
    // if(item > 2) console.log(item)
    // else console.log('Меньше 2')
}

// Массив String
let group = ['Amir', 'Sherkhon', 'Javohir', 'Samir', 'Mariya', 'Khojiakbar', 'Munis', 'Amir']

for(let item of group) {
    // берем индекс элемента и принудительно заменяем его в массиве
    group[group.indexOf(item)] = item.slice(0, 1)
}

// Массив с цифрами 2
// let arr_nums_2 = [15000, 20000, 40000]
// let total = 0

// for(let item of arr_nums_2) {
//     console.log(total)
    
//     total += item
    
// }

// console.log(total)

// Массив с цифрами 3
// let arr_nums_3 = [1, 2, 3]

// for(let item of arr_nums_3) {
//     let ask = +prompt('Умножение')

//     console.log(item * ask)
// }

// let arr = [1, 2, 3]

// for(let item of arr) {
//     if(item % 2 == 0) console.log('Четное ' + item)
//     else console.log('Нч ' + item)
// }

let arr_objects = [
    {
        name: 'Молоко',
        price: 14500,
        sale: 3
    },
    {
        name: 'Батон',
        price: 4000,
        sale: 10
    },
    {
        name: 'Яблоки',
        price: 20000,
        sale: 30
    }
]
let total = 0
let average = 0

for(let item of arr_objects) {
    // Цена со скидкой
    item.sale_price = item.price - (item.price / 100 * item.sale)
    // Плюсуем чек
    total += item.sale_price
    // Для средней цены
    average += item.sale
}

// Найти среднее
average = average / arr_objects.length
total = total / arr_objects.length

let transactions = [
    {
        sent: 159,
        get: 114,
        cashback: 14
    },
    {
        sent: 212,
        get: 154,
        cashback: 1.5
    },
    {
        sent: 214,
        get: 815,
        cashback: 41
    },
]

let total_2 = {
    sent: 0,
    get: 0,
    cashback: 0,
}

for(let item of transactions) {
    total_2.sent += item.sent
    total_2.get += item.get 
    total_2.cashback += item.sent / 100 * item.cashback
}

console.log(total_2)
