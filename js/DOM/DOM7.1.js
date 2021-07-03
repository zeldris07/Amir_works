let api = 'https://reqres.in/api/products'
let api_post = 'https://wepro.uz/api/test_api'
let arr = []
let main = document.querySelector('main')
let button = document.querySelector('button.send')
let obj = {
    name: 'Alex',
    age: '38',
    course: 'Frontend'
}

button.onclick = () => {
    axios.post(api_post, obj)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

axios.get(api)
    .then((res) => {
        arr = res.data.data
        
        reload()
    })

let reload = () => {
    main.innerHTML = ''

    for(let item of arr) {
        let div = document.createElement('div')

        div.style.width = '100px'
        div.style.height = '100px'
        div.style.backgroundColor = item.color
        div.id = item.id
        div.innerText = arr.indexOf(item) + 1
        div.setAttribute('onclick', 'edit_item()')

        main.append(div)
    }
}

let edit_item = () => {
    let id = event.target.id
    let find = arr.filter(item => item.id == id)[0]
    let idx = arr.indexOf(find)

    console.log(id, find, idx)

    find.color = prompt('New Color')

    reload()
}


