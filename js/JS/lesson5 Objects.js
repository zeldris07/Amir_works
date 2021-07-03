// Objects
// let car = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// Чтение
// console.log(car.a + car.b)
// Добавление элемента
// car.d = 4
// Изменение элемента
// car.a = 10
// Удаление
// delete car.c

// console.log(car);

// let obj = {
//     a: 'hello',
//     b: {
//         a: {
//             a: 'wrong',
//             b: 'wrong',
//             c: 'wrong',
//             d: 'wrong',
//             e: 'world'
//         }
//     }, // hello world is is me
//     c: {
//         a: {
//             a: {
//                 a: 'it is',
//                 b: 'wrong',
//                 c: ['me']
//             }
//         }
//     }
// }

// obj.a + obj.b.a.e + obj.c.a.a.a + obj.c.a.a.cOject x5
// obj.a.b.a.e

// let obj = {
//     key: ['HELLO', true, false, {
//         a: 'WORLD',
//         b: 'wrong'
//     }],
//     key2: {
//         a: {
//             hello: ['IT IS']
//         }
//     },
//     key3: {
//         a: [{}, {}, {}, 'ME']
//     }
// }

// console.log(obj.key[0] + obj.key[3].a + obj.key2.a.hello[0] + obj.key3.a[3]);

// obj.key[0] + obj.key[3] + obj.key2.a.hello + obj.key3.a[3]
// obj.key[0] + obj.key[3].a + obj.key2.a.hello + obj.key3.a[3]
// obj.key[0] + obj.key[3.a] + obj.key2.a.hello[0] + obj.key3.a[3]
// obj.key[0] + obj.key[3].a + obj.key2.a.hello[0] + obj.key3.a[3]
// obj.key[0].a + obj.key2.a.hello + obj.key3.a[3] x4


let car = {
    a: 1,
    b: 2,
    c: 3
}
// let car_keys_arr = Object.keys(car)
// let car_all_arr = Object.entries(car)

// console.log(car_values_arr)
// console.log(car_keys_arr)
// console.log(car_all_arr)
// console.log(car_values_arr[0] = 'hello')



let arr = Object.values(car)

console.log(arr.indexOf(2))
// console.log(car_values_arr.includes(2));
