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
const closeModalButtonBoleto = document.querySelector("#close-modal-boleto")
const openModalButtonBoleto = document.querySelector("#open-modal-boleto")
const modalBoleto = document.querySelector("#modal-boleto")
const fadelBoleto = document.querySelector("#fadel-boleto")

const toggleModalBoleto = () => {
  modalBoleto.classList.toggle("hide")
  fadelBoleto.classList.toggle("hide")
}

[openModalButtonBoleto, closeModalButtonBoleto, fadelBoleto].forEach((el) => {
  el.addEventListener("click", () => toggleModalBoleto())
})

// Modal Suporte
const closeModalButtonSuporte = document.querySelector("#close-modal-suporte")
const openModalButtonSuporte = document.querySelector("#open-modal-suporte")
const modalSuporte = document.querySelector("#modal-suporte")
const fadelSuporte = document.querySelector("#fadel-suporte")

const toggleModalSuporte = () => {
  modalSuporte.classList.toggle("hide")
  fadelSuporte.classList.toggle("hide")
}

[openModalButtonSuporte, closeModalButtonSuporte, fadelSuporte].forEach((el) => {
  el.addEventListener("click", () => toggleModalSuporte())
})

// Modal Chat
const closeModalButtonChat = document.querySelector("#close-modal-chat")
const openModalButtonChat = document.querySelector("#open-modal-chat")
const modalChat = document.querySelector("#modal-chat")
const fadelChat = document.querySelector("#fadel-chat")

const toggleModalChat = () => {
  modalChat.classList.toggle("hide")
  fadelChat.classList.toggle("hide")
}

[openModalButtonChat, closeModalButtonChat, fadelChat].forEach((el) => {
  el.addEventListener("click", () => toggleModalChat())
})

// BATE PAPO
function loadInstantChat(){
  var ICLoader = new RescueInstantChatLoader();
  ICLoader.ICContainer = "ICContainer";
  ICLoader.HostedCSS = "https://secure.logmeinrescue.com/InstantChat/Standard/InstantChat.css";
  ICLoader.HostedLanguagesForChatOnlyMode = "https://secure.logmeinrescue.com/InstantChat/LanguagesForChatOnlyMode.js";
  ICLoader.HostedLanguagesForAppletMode = "https://secure.logmeinrescue.com/InstantChat/LanguagesForAppletMode.js";
  ICLoader.EntryID = "5430464";
  ICLoader.Name = document.getElementById("Name").value; /* optional */
  ICLoader.Comment1 = document.getElementById("Comment1").value; /* optional */
  ICLoader.Tracking0 = ""; /* optional */
  ICLoader.Language = ""; /* optional */
  ICLoader.PostMessageTargetOrigin = ""; /* optional (For implementation details, see the LogMeIn Rescue Customization and Integration Guide) */
  ICLoader.HostedErrorHandler = function(ErrorName){} /* optional */
  ICLoader.Start();}
function handleRebootOrRefresh(){
  if ((window.location + "").indexOf("rescuewebsessionid") != -1){document.getElementById("ICContainer").style.display=""; loadInstantChat();} /* optional */
  if (window.location.hash.length == webSessionIdLength + 1){document.getElementById("ICContainer").style.display=""; loadInstantChat();} /* optional */
}