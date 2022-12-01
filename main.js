window.addEventListener('scroll', onScroll)
const $html = document.querySelector('html')

onScroll()

function onScroll() { 

  showBackToTopButtonOnScroll()
  showNavOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const navigation = document.querySelector('#navigation')
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
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

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home header, #home .content, #home img, #home .stats, #home .stat,
  #services header, #services .card,
  #about img, #about header, #about .content,
  #contact header, #contact .content, #contact iframe,
  #team header, #team .swiper
  `,
  { interval: 100 }
)

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,  
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    }
  }
});

function mostrar(e) {
  if ($html.classList.contains('dark-mode')) {
    $html.classList.remove('dark-mode')
  } else { //senão
    $html.classList.add('dark-mode')
  }
}

// Atualizando ano atual
const ano = document.getElementById("ano");
const anoAtual = new Date();

ano.innerHTML = anoAtual.getFullYear();

// Modal Boleto
const openModalButton = document.querySelector("#open-modal")
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fadel = document.querySelector("#fadel")

const toggleModal = () => {
  modal.classList.toggle("hide")
  fadel.classList.toggle("hide")
}

[openModalButton, closeModalButton, fadel].forEach((el) => {
  el.addEventListener("click", () => toggleModal())
})