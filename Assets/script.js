const linkers = document.querySelectorAll('.linker')
linkers.forEach((linker => {

    linker.addEventListener('click' , () => {
        removeActiveClasses()
        linker.classList.add('active')
    })
}))

function removeActiveClasses() {
    linkers.forEach(linker => {
        linker.classList.remove('active')
    })
}