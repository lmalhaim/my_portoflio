const swup = new Swup()

function navClick(tab){
    navigation = document.querySelector('#nav_animation')
    navigation.className += ` ${tab}_selected`
    
}