let month = document.querySelector('.month')
let month_word = document.querySelector('.month_word')
let price = document.querySelector('.price')

let courses = [
    {
        id: 1,
        name: 'Frontend',
        month: 1000001,
        price: 540000
    },
    {
        id: 2,
        name: 'Python',
        month: 5,
        price: 550000
    },
    {
        id: 3,
        name: 'SMM',
        month: 4,
        price: 560000
    },
    {
        id: 4,
        name: 'Graphic Design',
        month: 4,
        price: 570000
    },
]

let select = document.querySelector('select')

for(let item of courses) {
    let option = document.createElement('option')

    option.value = item.id
    option.innerText = item.name

    select.append(option)
}

select.onchange = () => {
    let id = event.target.value
    let find = courses.filter(item => item.id == id)[0]
    let idx = courses.indexOf(find)

    find.month = find.month.toString()

    if(find.month.slice(-1) == 1) {
        if(find.month.slice(-2) == 11) {
            month_word.innerText = 'месяцев'
        } else {
            month_word.innerText = 'месяц'
        }
    }

    month.innerText = find.month
    price.innerText = find.price
}
