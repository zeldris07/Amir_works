// Работа с формами
let form = document.forms.auth
let main = document.querySelector('main')
let arr = []

form.onsubmit = () => {
    event.preventDefault()

    let fm = new FormData(document.querySelector('button').parentNode)
    let obj = {}

    fm.forEach((value, key) => {
        obj[key] = value
    })

    obj.id = +Math.random().toString().slice(2, 17)
    obj.date = new Date().toLocaleDateString()
    obj.time = new Date().toLocaleTimeString()

    arr.unshift(obj)
    reload_interface()
}

let reload_interface = () => {
    main.innerHTML = ''
    // Работа с массивом в интерфейсе
    for(let item of arr) {
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')
        let btn_1 = document.createElement('button')
        let btn_2 = document.createElement('button')
        
        h3.innerText = item.name
        p.innerText = item.work + ', ' + item.age
        btn_1.innerText = 'Delete'
        btn_2.innerText = 'Edit'

        div.setAttribute('id', item.id)
        btn_1.setAttribute('id', item.id)
        btn_1.setAttribute('onclick', 'delete_item()')
        btn_2.setAttribute('onclick', 'edit_item()')

        div.append(h3, p, btn_1, btn_2)
        main.append(div)
    }
}

let delete_item = () => {
    let id = event.target.parentNode.getAttribute('id')
    let find = arr.filter(item => item.id == id)[0]
    let index = arr.indexOf(find)

    arr.splice(arr[index], 1)
    
    reload_interface()
}

let edit_item = () => {
    let id = event.target.parentNode.getAttribute('id')
    let find = arr.filter(item => item.id == id)[0]
    let index = arr.indexOf(find)

    // Индекс нашего элемента в массиве
    arr[index].name = prompt('Text')

    reload_interface()
}
