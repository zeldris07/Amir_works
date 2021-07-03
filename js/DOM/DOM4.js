let all_tr = document.querySelectorAll('tr')

for(let item of all_tr) {
    let button = item.lastElementChild.children[0]
    
    button.onclick = () => {
        let total = 0
        let el = item.lastElementChild.previousElementSibling.children[0]

        for(let td of item.children) {
            el.value = 0
            total += +td.children[0].value
        }

        el.value = total
    }
}
