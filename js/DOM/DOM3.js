let btns = document.querySelectorAll('button')

for(let item of btns) {
    item.onclick = () => {
        item.style.color = 'red'
    }
}


