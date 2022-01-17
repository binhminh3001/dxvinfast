//Open cart
    const activeCart = document.querySelector('.js-cart')
    const cart = document.querySelector('.header-cart')

    function opencart(){
      cart.classList.add('open-cart')
    }
    function closecart(){
    cart.classList.remove('open-cart')

    }
    activeCart.addEventListener('click', opencart)

    window.addEventListener("scroll", function(){
      var header = document.querySelector(".header-menu")
        header.classList.toggle("sticky", window.scrollY > 0)
    })


//  Header menu mobile
const openNav = document.querySelector('.nav-icon_nav-menu')
const navMenu = document.querySelector('.menu-header_list')
const closeNav = document.querySelector('.close-menu-mobile')
const openSubNav = document.querySelector('.icon-down-mobile')
const closeSubNav = document.querySelector('.icon-up-mobile')
const subMenu = document.querySelector('.sub-menu')
const subMenuTable = document.querySelectorAll('.sub-menu_table')

// open mobile menu 
function openMenuMobile(){
  navMenu.classList.add('active-mobile');
  openNav.classList.add('emty')
  closeNav.classList.remove('emty')
  
}
// close mobile men
function  closeMenuMobile(){
  
  navMenu.classList.remove('active-mobile');
  openNav.classList.remove('emty')
  closeNav.classList.add('emty')
  
}
function openSubMenu (){
  subMenu.classList.add('active-mobile')
  openSubNav.classList.add('emty')
  closeSubNav.classList.remove('emty')
}
function closeSubMenu (){
  subMenu.classList.remove('active-mobile')
  openSubNav.classList.remove('emty')
  closeSubNav.classList.add('emty')
}

openSubNav.addEventListener('click', openSubMenu)
closeSubNav.addEventListener('click', closeSubMenu)


openNav.addEventListener('click', openMenuMobile);
closeNav.addEventListener('click', closeMenuMobile);
// slider product lightslider

