let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

obj.a
obj["a"] // вернуть значение ключа "a" - 1

// Цикл по объектам
for(let item in obj) {
    console.log(item) // key
    console.log(obj[item]) // value
}
