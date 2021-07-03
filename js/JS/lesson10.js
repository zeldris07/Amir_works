// Жесткие методы массивов
let arr = [
    { a: 1 },
    { a: 12 },
    { a: 13 },
    { a: 11 },
    { a: 4 },
]
let arr_fitlered = []

// Матисча
for(let item of arr) {
    if(item.a > 1 && item.a < 5) {
        arr_fitlered.push(item)
    }
}

// Ферра
// arr_fitlered = arr.filter(item => )

// Метод MAP
let arr_map = [
    {
        name: 'Milk',
        sale: 4,
        price: '3.25',
        last_prices: [
            4, 8, 14, 11, 18.5
        ]
    },
    {
        name: 'Coffee',
        sale: 9.6,
        price: '1.5',
        last_prices: [
            3.1, 1.4, 1.44, 5.1
        ]
    },
    {
        name: 'Chocolate',
        sale: 9.6,
        price: '1.5',
        last_prices: [
            1, 1, 1, 1
        ]
    },
]

arr_map.map(item => {
    item.price = item.price - (item.price / 100 * item.sale)
    item.average_price = 0

    item.last_prices.map(price => {
        item.average_price += price / item.last_prices.length
    })
})

console.log(arr_map);

// for(let item of arr_map) {
//     item.price = item.price - (item.price / 100 * item.sale)
// }




// for
// push, unshift
// splice, pop, shift
// [5]
// arr.indexOf('b')
// arr[arr.indexOf('d')] = prompt('new data')
// console.log(arr.find('c')) // 

// FILTER
// MAP
// REDUCE
let tasks = [
    {
        name: 'Buy milk from the shop',
        duration: 20,
        priority: 1
    },
    {
        name: 'Clean the house',
        duration: 120,
        priority: 3
    },
    {
        name: 'Study JS functions',
        duration: 180,
        priority: 1
    },
]
let total = 0

total = tasks.map(item => item.duration).reduce((a, b) => a + b)

// console.log(total)

// SORT
let arr_nums = [1, 2, 3, 31, 23, 123, 123, 12, 3, 123, 123, 123, 12, 321, 41, 5124, 12, 512, 412]
let arr_names = ["John", "Abu", "Babu", "Balu", "Antony"]

// console.log(arr_nums.sort()) // От меньшего к большему
// console.log(arr_names.sort()) // По алфавиту

// FUNCTIONS
let func_return = (a, b) => {
    return [{
        a: a + b,
        c: a - b
    }]
}

let a = func_return(5, 8)

let func_check_word = (str) => {
    if(str.includes('a')) {
        console.log('Содержит букву А ' + str)
        return false
    } else {
        console.log('Все ОК ' + str)
        let total_str = ''
        
        for(let symbol of str) {
            total_str += symbol
            total_str += symbol
        }

        console.log(total_str)
    }
}

func_check_word('hello')
func_check_word('dwadawdawdawdawdaw')
