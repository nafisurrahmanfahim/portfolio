
window.addEventListener('scroll', ()=> {
    let nav = document.querySelector('.nav')

    if (window.scrollY > 0) {
        nav.classList.add('scrolled')
        // nav.style.color = "red"
    } else {
        nav.classList.remove('scrolled')
        // nav.style.color = "#000"
    }
})