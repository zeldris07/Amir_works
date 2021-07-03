// // let arr = [
// //     {
// //         card: 1234,
// //         user_money: 12000
// //     },
// //     {
// //         card: 7777,
// //         user_money: 15000
// //     },
// //     {
// //         card: 4444,
// //         user_money: 8500
// //     },
// // ]

// // let people = [
// //     {
// //         name: 'Alex',
// //         my_card: 7777
// //     },
// //     {
// //         name: 'Michael',
// //         my_card: 4444
// //     },
// //     {
// //         name: 'Barbara',
// //         my_card: 1234
// //     },
// // ]

// // // Циклим карты
// // for(let card of arr) {
// //     // Циклим людей
// //     for(let person of people) {
// //         // Сравнение уникальных ключей из разных объектов
// //         if(card.card == person.my_card) {
// //             // Бинго
// //         }
// //     }
// // }

// let beeline = [
//     {
//         phone: 2500001,
//         name: 'Alex',
//         balance: 10000
//     },
//     {
//         phone: 2500002,
//         name: 'Ikrom',
//         balance: 20000
//     },
//     {
//         phone: 2500003,
//         name: 'Barbara',
//         balance: 30000
//     },
//     {
//         phone: 2500004,
//         name: 'Michael',
//         balance: 40000
//     },
// ]

// let users = [2500004, 2500002, 2500003, 2500010, 2500001]

// for(let user of users) {
//     for(let item of beeline) {
//         if(item.phone == user) {
//             console.log(item)
//         }
//     }
// }

// Аргументы/параметры функции
// let func = (arg1) => {
//     let max = 4

//     for(let item of arg1) {
//         if(max < item.length) max = item.length
//     }

//     for(let item of arg1) {
//         if(max == item.length) console.log(item)
//     }
//     console.log(max)
// }
// // Отправление
// func(['Alexdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'Michael', 'Barbarabarabara', 'Dwaodawoidhawjdpiawjd-92ophdj21po'])

let func = (arg1) => {
    console.log(1, Math.max.apply(arg1))
}

func([5, 10, 7, 11])

