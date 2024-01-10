// import { Mode } from "../components/Mode.js";
let homePage  = document.querySelector('.home-page')
setTimeout(() => {
    document.querySelector('.loader').style.display="none"
    homePage.style.display="flex"
    document.querySelector('.about-me').style.display="flex"
    document.querySelector('.skills-container').style.display="block"
    document.querySelector('.education').style.display="block"
    document.querySelector('.contact').style.display="flex"
    document.querySelector('.footer-container').style.display="block"
}, 1000);


let educationContainer = document.querySelector('.education-container-item')
let titreEducation = document.querySelector('.titreEducation')
      fetch('./assets/data/formation.json')
      .then(res => res.json())
      .then(data => {
       titreEducation.innerHTML = data.titre
        data.educations.forEach(education => {
            let educationItem = document.createElement('div')
            educationItem.classList.add('education-item')
            educationContainer.appendChild(educationItem)

            let logo = document.createElement('h2')
            let annee = document.createElement('h3')
            let ecole = document.createElement('h4')
            let degre = document.createElement('h5')
            educationItem.append(logo, annee, ecole, degre)
            logo.innerHTML = education.logo
            annee.innerHTML = education.annee
            ecole.innerHTML = education.ecole
            degre.innerHTML = education.degre
        })
    })


let bgVideo = document.getElementById('video')
let bgImg = document.getElementById('img-bg')
let dark = document.getElementById('dark-mode')
let light = document.getElementById('light-mode')
let body = document.body
let header = document.getElementById('header')
let footer = document.querySelector('.footer-container')
let menu=document.querySelector('.menu')
let link = document.querySelector('.link')

let container = document.querySelector('.container')
let iconSkills = document.querySelectorAll('.icon-skills')
dark.addEventListener('click',()=>{
    let educationItems = document.querySelectorAll('.education-item');
    console.log(educationItems);
    dark.style.zIndex='-2'
    light.style.zIndex='2'
    bgVideo.style.visibility='hidden'
    bgImg.style.visibility='visible'
    header.style.backgroundColor='#000'
    link.style.backgroundColor='#000'
    educationItems.forEach((educationItem)=>{
        educationItem.style.background='transparent'
    })
    iconSkills.forEach((iconSkill)=>{
        iconSkill.style.background='transparent'
    })
})
light.addEventListener('click',()=>{
    let educationItems = document.querySelectorAll('.education-item');
    light.style.zIndex='-2'
    dark.style.zIndex='2'
    bgVideo.style.visibility='visible'
    bgImg.style.visibility='hidden'   
    header.style.backgroundColor='#011936'
    link.style.backgroundColor='#011936'
    educationItems.forEach((educationItem)=>{
        educationItem.style.background='#011936'
    })
    iconSkills.forEach((iconSkill)=>{
        iconSkill.style.background='#011936'
    })
})

let i = document.getElementById('i-menu')
const linkFunction = ()=>{
    if(i.classList.contains('fa-bars')){
        i.classList.remove('fa-bars')
        i.classList.add('fa-x')
    }
    else if(i.classList.contains('fa-x')){
        i.classList.remove('fa-x')
        i.classList.add('fa-bars')
    } 
    
     link.classList.toggle('link-toggle')  
}
menu.addEventListener('click',()=>{
    linkFunction()
})
     
let home = document.getElementById('home-link')
let about = document.getElementById('about-link')
let skill = document.getElementById('skill-link')
let educ = document.getElementById('education-link')
let contact = document.getElementById('contact-link')
let nav =[home,about,skill,educ,contact]

let x = window.matchMedia("(max-width: 930px)")
if(x.matches){
    nav.forEach(element => {
        element.addEventListener('click',(event)=>{  
            linkFunction()
         });
     })
}
