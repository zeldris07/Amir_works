let buttons = document.querySelectorAll('button')
let i = 0
let inter = 100

let dom = () => {
    buttons[i].classList.add('active')
    i++

    clearInterval(dom)
}

let inteval2 = setInterval(dom, inter = inter + 300)


