window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  onShowNavOnScroll()
  onShowBackToTopButtonOnScroll()
}

function onShowNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  } 
}

function onShowBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  } 
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content
`)