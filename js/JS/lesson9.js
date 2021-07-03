// Document Object Model
let btn = document.querySelector('button')
let body = document.querySelector('body')

body.onscroll = () => {
    console.log('Скролл');
}

btn.onmouseenter = () => {
    console.log('Войти');
}
btn.onmousemove = () => {
    console.log('Двигаемся');
}
btn.onmouseleave = () => {
    console.log('Уходим');
}
// btn.classList.add('active')

