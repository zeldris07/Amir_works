let open1 = document.querySelector('.open1')
let open2 = document.querySelector('.open2')
let open3 = document.querySelector('.open3')
let body = document.querySelector('body')

open1.onclick = () => {
    body.style.backgroundColor = 'red'
    open1.style.width = '200px'
    open2.style.width = '200px'
    open3.style.width = '200px'
}
open2.onclick = () => {
    body.style.backgroundColor = 'yellow'
    open1.style.transform = 'rotate(90deg)'
    open2.style.transform = 'rotate(90deg)'
    open3.style.transform = 'rotate(90deg)'
}
open3.onclick = () => {
    body.style.backgroundColor = 'white'
    open1.style.width = '120px'
    open1.style.transform = 'rotate(0)'
    open2.style.width = '120px'
    open2.style.transform = 'rotate(0)'
    open3.style.width = '120px'
    open3.style.transform = 'rotate(0)'
}
