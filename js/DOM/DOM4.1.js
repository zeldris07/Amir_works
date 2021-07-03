// let h2 = document.createElement('h2')
// let i = document.createElement('i')
// let main = document.querySelector('main')

// h2.classList.add('active')
// h2.innerText = 'hello'

// h2.append(i)
// main.append(h2)

// .after
// .before

// let btn = document.querySelector('button')
// let main = document.querySelector('main')

// btn.onclick = () => {
//     let div = document.createElement('div') 
//     let h2 = document.createElement('h2') 
//     let p = document.createElement('p') 

//     h2.innerText = 'Alex Adams'
//     p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, tempore.'

//     div.append(h2, p)
//     main.append(div)
// }

let main = document.querySelector('main')

let arr_data = [
    {
        name: 'Alex Adams',
        sex: 'm',
        work: 'Microsoft'
    },
    {
        name: 'Michael Johnes',
        sex: 'm',
        work: 'Apple'
    },
    {
        name: 'Piyozbek Samsoev',
        sex: 'm',
        work: 'Artel'
    },
    {
        name: 'Barbara Adams',
        sex: 'w',
        work: 'Sony'
    },
    {
        name: 'Barbara Adams',
        sex: 'w',
        work: 'Sony'
    },
    {
        name: 'Barbara Adams',
        sex: 'w',
        work: 'Sony'
    },
    {
        name: 'Barbara Adams',
        sex: 'w',
        work: 'Sony'
    },
    {
        name: 'Barbara Adams',
        sex: 'w',
        work: 'Sony'
    },
    {
        name: 'Barbara Adams',
        sex: 'w',
        work: 'Sony'
    },
]

for(let item of arr_data) {
    let div = document.createElement('div') 
    let h2 = document.createElement('h2') 
    let p = document.createElement('p') 

    h2.innerText = item.name
    p.innerText = item.work

    div.append(h2, p)
    main.append(div)
}

