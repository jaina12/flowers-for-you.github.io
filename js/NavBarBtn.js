const navbarToggle = navbar.querySelector('#navbar-toggle')
const navbarMenu = document.querySelector('#navbar-menu')
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links')
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true'

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded)
}

navbarToggle.onclick = () => toggleNavbarVisibility()
navbarLinksContainer.onclick = (event) => event.stopPropagation()
navbarMenu.onclick = () => toggleNavbarVisibility()
