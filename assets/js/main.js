/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== EXPERIENCE ===============*/
document.addEventListener( 'DOMContentLoaded', function() {

    var splide = new Splide( '.splide',{
        type   : 'loop',
        perPage: 1,
        gap: '5vh',
        padding: '5vh',
        // arrows             : false,
        // paginationDirection: 'ttb',
        // breakpoints:{
        //     640: {
        //         perPage: 1,
        //         gap: '5vh'
        //     }
        // }
    } );
    splide.mount();

  } );

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
       // Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // Show message
        contactMessage.textContent = 'Write all the input fields 📧'
    }else{
        // serviceID - tempalteID - #form - publicKey
        emailjs.sendForm('service_y5zdfja','template_3f0bv1d','#contact-form','PLgJzX4A2WzDPopVO')
                .then(() => {
                    // Show message and color
                    contactMessage.classList.add('color-blue')
                    contactMessage.textContent = 'Message sent ✅'

                    // Remove message after five seconds
                    setTimeout(() => {
                        contactMessage.textContent = ''
                    }, 5000)
                }, (error) => {
                    alert('Something Went Wrong! Retry Again.', error)
                    contactMessage.classList.add('color-red')
                    contactMessage.textContent = 'Message not sent ❌'
                    setTimeout(() => {
                        contactMessage.textContent = ''
                    }, 5000)
                })
                // To clear the input field
                contactName.value = ''
                contactEmail.value = ''
                contactProject.value = ''
    }
}     
contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

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

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true /*Animations repeat */ 
})

sr.reveal(`.home__data, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1), .certification__content:nth-child(1), .certification__content:nth-child(3)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2), .certification__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__container`, {interval: 100})
sr.reveal(`.experience__container`, {origin: 'bottom',interval: 100})

