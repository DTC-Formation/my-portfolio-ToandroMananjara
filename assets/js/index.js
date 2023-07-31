let portfolio = {
    // mode :{

    // }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    competence : {
        titre : 'Competence',

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
        GrandTitre : '<i class="fa-solid fa-graduation-cap">'+'</i> Education & Formation',
        education :[
            {
                logo : '<i class="fa-solid fa-award">'+''+'</i>',
                annee : '2023',
                ecole : 'Digital Training Center',
                degré : 'Formation en developpement web'
            },
            {
                logo : '<i class="fa-solid fa-award">'+''+'</i>',
                annee : '2022-2023',
                ecole : 'Université d\'Antananarivo',
                degré : '3ème année de licence <br>en Mathématiques et Informatique '
            },
            {
                logo : '<i class="fa-solid fa-award">'+''+'</i>',
                annee : '2020-2022',
                ecole : 'Université d\'Antananarivo',
                degré : '2ème année de licence <br>en Mathématiques et Informatique '
            },
            {
                logo : '<i class="fa-solid fa-award">'+''+'</i>',
                annee : '2019-2020',
                ecole : 'Université d\'Antananarivo',
                degré : '3ème année de licence <br>en Mathématiques et Informatique '
            },
            {
                logo : '<i class="fa-solid fa-award">'+''+'</i>',
                annee : '2018',
                ecole : 'Lycee Nanisana',
                degré : 'Baccamauréat serie C'
            }
    
        ]
    }
    
}

let homePage  = document.querySelector('.home-page')
setTimeout(() => {
    document.querySelector('.loader').style.display="none"
    homePage.style.display="flex"

}, 5000);

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
 
let h3
let h4 
let h5  
let h6 
  
 function educate(){
    let education1 = document.createElement('div')
    education1.classList.add('education1')
    educationContainer.appendChild(education1)
    education1.appendChild(h3)
    education1.appendChild(h4)
    education1.appendChild(h5)
    education1.appendChild(h6)    
  }


for (let i= 0 ;i<portfolio.formation.education.length;i++){
 
    h3= document.createElement('h2')
    h4= document.createElement('h4')
    h5= document.createElement('h5') 
    h6= document.createElement('h6')
    educate()
    h3.innerHTML = portfolio.formation.education[i].logo 
    h4.innerHTML = portfolio.formation.education[i].annee
    h5.innerHTML = portfolio.formation.education[i].ecole
    h6.innerHTML = portfolio.formation.education[i].degré

}

let bgVideo = document.getElementById('video')
let bgImg = document.getElementById('img-bg')
let dark = document.getElementById('dark-mode')
let light = document.getElementById('light-mode')
let body = document.body
let header = document.getElementById('header')
let footer = document.querySelector('.footer-container')
let menu1=document.getElementById('menu-1')
let menu2=document.getElementById('menu-2')

let container = document.querySelector('.container')
let linkToogle = document.querySelector('.menu-toogle')

let acceuil = document.getElementById('acceuil')
let about = document.getElementById('Apropos')
let competence = document.getElementById('skill')
let education = document.getElementById('etude')
let contact = document.getElementById('mecontacter')
let nav = [acceuil,about,competence,education,contact]

 
dark.addEventListener('click',function(){
    dark.style.zIndex='-2'
    light.style.zIndex='2'
    bgVideo.style.visibility='hidden'
    bgImg.style.visibility='visible'
    header.style.backgroundColor='#000'

})
light.addEventListener('click',function(){
    light.style.zIndex='-2'
    dark.style.zIndex='2'
    bgVideo.style.visibility='visible'
    bgImg.style.visibility='hidden'   
    header.style.backgroundColor='#011936'
})

menu1.addEventListener('click',function(){
    
    footer.classList.toggle('footer-toogle')
    linkToogle.classList.toggle('menu-click')
    container.classList.toggle('container-toogle') 


     
})
for(let n in nav){
    nav[n].addEventListener('click',function(){

        linkToogle.classList.toggle('menu-click')
        container.classList.toggle('container-toogle')  
         footer.classList.toggle('footer-toogle')
    })
    
}

