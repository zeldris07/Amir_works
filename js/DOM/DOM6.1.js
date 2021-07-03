let arr = []
let main = document.querySelector('main')
let api = 'https://reqres.in/api/users'
let auth = document.forms.auth
let edit = document.forms.edit

auth.onsubmit = () => {
    event.preventDefault()

    let fm = new FormData(event.target)
    let obj = {}

    fm.forEach((value, key) => {
        obj[key] = value
    })

    arr.push(obj)

    reload_interface()
}

// Получить данные с Fake API
axios.get(api)
    // Если все отлично
    .then((response) => {
        arr = response.data.data

        reload_interface()
    })
    // Ловим ошибки
    .catch((error) => {
        console.log(error)
    })

let reload_interface = () => {
    main.innerHTML = ''
    // Работа с массивом в интерфейсе
    for (let item of arr) {
        let button_edit = document.createElement('button')
        let button_delete = document.createElement('button')
        let div = document.createElement('div')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let span = document.createElement('p')

        div.setAttribute('id', item.id)
        button_edit.innerText = 'edit'
        button_delete.innerText = 'delete'
        button_edit.setAttribute('onclick', 'button_edit()')
        button_delete.setAttribute('onclick', 'button_delete()')
        p.innerText = `${item.first_name} ${item.last_name}`
        span.innerText = item.email
        img.setAttribute('src', item.avatar)

        div.append(img, p, span, button_edit, button_delete)
        main.append(div)
    }
}

let button_delete = () => {
    let id = event.target.parentNode.getAttribute('id')
    let find = arr.filter(item => item.id == id)[0]
    let index = arr.indexOf(find)

    arr.splice(index, 1)

    reload_interface()
}

let button_edit = () => {
    let id = event.target.parentNode.getAttribute('id')
    let find = arr.filter(item => item.id == id)[0]
    let index = arr.indexOf(find)

    edit.classList.add('active')
    edit.id = id

    for(let item of edit.children) {
        for (let key in find) {
            if(item.name == key) {
                item.value = find[key]
            }
        }
    }

    reload_interface()
}

edit.onsubmit = () => {
    event.preventDefault()

    let id = event.target.getAttribute('id')
    let find = arr.filter(item => item.id == id)[0]
    let fm = new FormData(event.target)
    let obj = {}

    fm.forEach((value, key) => {
        obj[key] = value
    })

    for (let key in find) {
        for(let new_data in obj) {
            if(key == new_data) {
                find[key] = obj[new_data]
            }
        }
    }

    reload_interface()
}
