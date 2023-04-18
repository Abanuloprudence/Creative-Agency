let menu = document.querySelector(".menu")
let navigation = document.querySelector(".navigation")


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navigation.classList.toggle('active')
})