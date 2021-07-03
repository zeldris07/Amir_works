// Работа с формами
let form = document.forms.auth
let arr = []
let main = document.querySelector('main')

// Срабатывает только button или input type="submit"
form.onsubmit = () => {
    // Остановить событие
    event.preventDefault()

    // Работа с формой. Обработка данных
    let fm = new FormData(event.target)
    let obj = {}

    fm.forEach((value, key) => {
        obj[key] = value
    })

    arr.push(obj)

    main.innerHTML = ''
    // Работа с массивом в интерфейсе
    for(let item of arr) {
        let div = document.createElement('div')
        let img = document.createElement('img')

        img.setAttribute('src', item.image)

        div.append(img)
        main.append(div)
    }
}
