// -- ---------- SHOW MENU ---------- --
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

//----- MENU SHOW -----
/* Validate if constant exists */
if(navToggle){
        navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
//----- MENU HIDDEN -----
/* Validate if constant exists */ 
if(navClose){
        navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// -- ---------- REMOVE MENU MOBILE ---------- --

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
const navMenu = document.getElementById('nav-menu')
// When we click on each nav_link, we remove the show-menu class
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction)) 


// -- ---------- ADD BLUR TO HEADER ---------- --

const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
    }
    window.addEventListener('scroll', blurHeader)

// -- ---------- EMAIL JS ---------- --
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_2po8pyl', 'template_ak4u8yp', '#contact-form', 'ThaZvz4Zz3yYXfspm')
        .then(() =>{
            contactMessage.textContent = 'Message Sent Successfully! ✅'

            setTimeout(()=>{
                contactMessage.textContent = ''
            },5000)

            contactForm.reset()

        }, ()=>{
            contactMessage.textContent = 'Service Error! Mail not sent. ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)
// -- ---------- SHOW SCROLL UP ---------- --

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrolly >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// -- ---------- SCROLL SECTIONS ACTIVE LINK ---------- --
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
// -- ---------- SCROLL REVEAL ANIMATION ---------- --