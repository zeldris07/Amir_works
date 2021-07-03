// Клонирование элементов
// let header = document.querySelector('header')
// let cloned = header.cloneNode(true)

// cloned.children[0].innerText = 'Cloned left'
// cloned.children[1].innerText = 'Cloned right'

// cloned.children[1].innerHTML = '<i>ITALIC</i>'

// header.after(cloned)

let btn = document.querySelector('button')

btn.onclick = () => {
    let aside_inner = document.createElement('aside')
    
    aside_inner.innerHTML = `    <ul>
    <li>INNERHTML</li>
    <li>INNERHTML</li>
    <li>INNERHTML</li>
    </ul>`

    let aside_clone = aside_inner.cloneNode(true)
   
    for(let item of aside_clone.children[0].children) {
        item.innerText = 'CLONED'
    }

    document.body.append(aside_inner, aside_clone)
}

{/* <aside>
    <ul>
        <li>INNERHTML</li>
        <li>INNERHTML</li>
        <li>INNERHTML</li>
    </ul>
</aside>
<aside>
    <ul>
        <li>CREATE</li>
        <li>CREATE</li>
        <li>CREATE</li>
    </ul>
</aside>
<aside>
    <ul>
        <li>CLONED</li>
        <li>CLONED</li>
        <li>CLONED</li>
    </ul>
</aside> */}
