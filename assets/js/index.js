let portfolio = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    competence : {
        titre : 'Skills',

        Skills :[
            
            {
                image : {
                    lien :"./assets/img/icons8-programmation-en-c-240.png"  ,
                    alt :'' 
                },
                titre: 'Language C'
            },
            
            {
                image : {
                    lien :"./assets/img/icons8-html-240.png" ,
                    alt :'' 
                },
                titre: 'HTML'
            },
            
            {
                image : {
                    lien :'./assets/img/icons8-css-240.png' ,
                    alt : ''
                },
                titre: 'CSS'
            },
            
            {
                image : {
                    lien : "./assets/img/icons8-js-240.png",
                    alt :'' 
                },
                titre: 'Javascript'
            }
        ]
           
    },

    formation :{
        GrandTitre : '<i class="fa-solid fa-graduation-cap">'+'</i> Education & Training',
        education :[
            {
                logo : '<i class="fa-solid fa-award">'+''+'</i>',
                annee : '2023',
                ecole : 'Digital Training Center',
                degré : 'Web Development Training'
            },
            {
                logo : '<i class="fa-solid fa-award">'+''+'</i>',
                annee : '2022-2023',
                ecole : 'University of Antananarivo',
                degré : '3rd year of a Bachelor\'s degree in Mathematics and Computer Science '
            },
            {
                logo : '<i class="fa-solid fa-award">'+''+'</i>',
                annee : '2020-2022',
                ecole : 'University of Antananarivo',
                degré : '2nd year of a Bachelor\'s degree in Mathematics and Computer Science '
            },
            {
                logo : '<i class="fa-solid fa-award">'+''+'</i>',
                annee : '2019-2020',
                ecole : 'University of Antananarivo',
                degré : ' 1st year of a Bachelor\'s </br> degree  in Mathematics and Computer Science '
            },
            {
                logo : '<i class="fa-solid fa-award">'+''+'</i>',
                annee : '2018',
                ecole : 'Nanisana High School',
                degré : 'Baccalaureate series C'
            }
    
        ]
    }
    
}

let homePage  = document.querySelector('.home-page')
setTimeout(() => {
    document.querySelector('.loader').style.display="none"
    homePage.style.display="flex"
    document.querySelector('.about-me').style.display="flex"
    document.querySelector('.skills-container').style.display="block"
    document.querySelector('.education').style.display="block"
    document.querySelector('.contact').style.display="flex"
    document.querySelector('.footer-container').style.display="block"


}, 3000);

let GrandTitre = document.querySelector('.competence-titre')
GrandTitre.innerHTML = portfolio.competence.titre


let skills = document.querySelector('.skills')


for (let i = 0 ;i<4;i++){
    let iconSkill = document.createElement('div')
    iconSkill.classList.add('icon-skills')
    skills.appendChild(iconSkill)

    let skillImage = document.createElement('img')
    iconSkill.appendChild(skillImage)
     
    skillImage.src= portfolio.competence.Skills[i].image.lien
    
    let language = document.createElement('div')
    iconSkill.appendChild(language)
    
    language.innerHTML = portfolio.competence.Skills[i].titre

}

let educationContainer = document.querySelector('.education-container-1')

let titreEducation = document.querySelector('.titreEducation')
titreEducation.innerHTML = portfolio.formation.GrandTitre
 
let h2
let h3 
let h4  
let h5 
  
 function educate(){
    let education1 = document.createElement('div')
    education1.classList.add('education1')
    educationContainer.appendChild(education1)
    education1.appendChild(h2)
    education1.appendChild(h3)
    education1.appendChild(h4)
    education1.appendChild(h5)    
  }


for (let i= 0 ;i<portfolio.formation.education.length;i++){
 
    h2= document.createElement('h2')
    h3= document.createElement('h4')
    h4= document.createElement('h5') 
    h5= document.createElement('h6')
    educate()
    h2.innerHTML = portfolio.formation.education[i].logo 
    h3.innerHTML = portfolio.formation.education[i].annee
    h4.innerHTML = portfolio.formation.education[i].ecole
    h5.innerHTML = portfolio.formation.education[i].degré

}

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
 
dark.addEventListener('click',function(){
    dark.style.zIndex='-2'
    light.style.zIndex='2'
    bgVideo.style.visibility='hidden'
    bgImg.style.visibility='visible'
    header.style.backgroundColor='#000'
    link.style.backgroundColor='#000'

})
light.addEventListener('click',function(){
    light.style.zIndex='-2'
    dark.style.zIndex='2'
    bgVideo.style.visibility='visible'
    bgImg.style.visibility='hidden'   
    header.style.backgroundColor='#011936'
    link.style.backgroundColor='#011936'
})

let i = document.getElementById('i-menu')
function linkFunction(){
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
menu.addEventListener('click',function(){
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
        element.addEventListener('click',function(event){  
       
            linkFunction()
         });
     
     })
}
