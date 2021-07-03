// Document Object Model

// Поиск одного элемента
let btn = document.querySelector('.btn') // string
// let btn_id = document.getElementById('btn') // string

// Поиск массива элементов
// let btn_class = document.getElementsByClassName('btn') // array
// let btn_tag = document.getElementsByTagName('button') // array
// let btn_universal = document.querySelectorAll('button') // array

// Классы
btn.classList.add('hello', 'a') // Добавить класс
btn.classList.remove('hello') // Удаление
btn.classList.toggle('hello') // Переключение
btn.classList.contains('hello') // Существует ли?

// Аттрибуты
// btn.getAttribute('id') // Чтение
// btn.setAttribute('id', 'hello-world') // Новое значение
// let input = document.querySelector('input')
// input.setAttribute('value', prompt('Введите значение'))

// Стили
btn.style.backgroundColor = 'red'
btn.style.color = 'red'

// События
btn.onclick = () => {
    btn.classList.toggle('active')
}
// btn.onmouseenter = () => { 
//     console.log('Вход')
// }
// btn.onmouseleave = () => { 
//     console.log('Выход')
// }
// btn.onmousemove = () => { 
//     console.log('Движение')
// }
