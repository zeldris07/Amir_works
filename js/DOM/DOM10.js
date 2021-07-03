window.onload = () => {
    let view_products_btn = document.querySelector('.view-products')
    let maria_1 = document.querySelector('.footer-l')
    let maria_2 = document.querySelector('.f-r-l')
    let maria_3 = document.querySelector('.f-r-r')
    let amir_r = document.querySelector('header')
    let sherkhon = document.querySelector('.description-product')
    let sherkhon_2 = document.querySelector('.product-image')
    let a = document.querySelector(".screen-two")
    let b = document.querySelectorAll(".item")
    let c = document.querySelector(".screen-three")
    let l = document.querySelector(".screen-three .side-left")
    let r = document.querySelector(".screen-three .side-right")
    let btn = document.querySelector(".buy-btn")

    setTimeout(() => {
        maria_3.classList.add('active')

        setTimeout(() => {
            maria_2.classList.add('active')

            setTimeout(() => {
                maria_1.classList.add('active')
                amir_r.classList.add('active')

                setTimeout(() => {
                    sherkhon.classList.add('active')

                    setTimeout(() => {
                        sherkhon_2.classList.add('active')
                    }, 200)
                }, 200)
            }, 200)
        }, 200)
    }, 1000)


    view_products_btn.onclick = () => {
        setTimeout(() => {
            a.classList.add("active")
            setTimeout(() => {
                for (let item of b) {
                    item.classList.add("active")

                    item.onclick = () => {
                        setTimeout(() => {
                            c.classList.add("active")
                            setTimeout(() => {
                                r.classList.add("active")
                                setTimeout(() => {
                                    l.classList.add("active")

                                }, 300)
                            }, 300)
                        }, 200)
                    }
                }
            }, 500)

        }, 500)
        
    }
        btn.onclick = () => {
            
            setTimeout(() => {
                a.classList.add("active")
                setTimeout(() => {
                    for (let item of b) {
                        item.classList.add("active")

                        item.onclick = () => {
                            setTimeout(() => {
                                c.classList.add("active")
                                setTimeout(() => {
                                    r.classList.add("active")
                                    setTimeout(() => {
                                        l.classList.add("active")

                                    }, 300)
                                }, 300)
                            }, 200)
                        }
                    }
                }, 200)

            }, 200)
        }
      
    
}