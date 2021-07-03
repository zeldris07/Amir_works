let open = document.querySelector('button.open')
let menu = document.querySelector('.menu')
let all_links = document.querySelectorAll('.menu-main a')

open.onclick = () => {
    let i = 0
    menu.classList.add('active')

    let show_elements = setInterval(() => {
        all_links[i].classList.add('active')

        i++

        if(i > all_links.length) clearInterval(show_elements)
    }, 250)
}

// let inter = setInterval(() => {
//     console.log('INTERVAL IS ACTIVE');
// }, 300)

// let timeout = setTimeout(() => {
//     console.log('TIMEOUT IS ACTIVE')

//     clearInterval(inter)
// }, 1500)
