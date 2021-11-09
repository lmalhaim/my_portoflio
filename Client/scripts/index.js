let collapseClick = false
/*
function navCollapseStyle(){
    if(!collapseClick){
        document.querySelector('#topBar').style.height = '250px'
    }
    else{
        document.querySelector('#topBar').style.height = '80px'
    }
    collapseClick = !collapseClick
}*/

navLinks.forEach((l) => {
    const navLinks = document.querySelectorAll('.nav-link')
    const menuToggle = document.getElementById('toggleMobileMenu')
    const bsCollapse = new bootstrap.Collapse(menuToggle)
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
