let portfolio = {
    // mode :{

    // }

    link :[
        {
            lien : '#',
            titre : 'Acceuil'
        },

        {
            lien : '#about',
            titre : 'A propos'
        },
        {
            lien : '#competence',
            titre : 'Competence'
        },
         {
            lien : '#education',
            titre : 'Education'
        },
        {
            lien : '#contact',
            titre : 'contact'
        }
    ],

    acceuil :{
        pseudo : "Toandro Mananjara",
        titre :  "Devoloppeleur Web",
        btn : "Voir plus " 
    },

    aboutMe : {
        image:{
            lien : './assets/img/img.png' ,
            alt : 'Photo de Toandro'
        },
        bio : {
            nom:'MAHASALOTRA Toandromananjara',
            texte : 'J\'ai 22 ans et je  suis en 3 eme année de licence en Mathématiques et Informatique à l\'université d\'Antananarivo.Mais en ce moment, j\'apprends en autodidacte la Programmation  et le Developpement Web. ',
            download:{
                lien : './assets/CV_Toandro.pdf',
                texte : 'Telecharger mon CV'
            } 
        }


    },
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
    },
    
    

    contact :{
        GrandTitre : 'Me contacter',
        form :{
            inputNom :{
                type:'text',
                placeholder:'Nom et Prenom'
            },
            inputEmail :{
                type:'email',
                placeholder:'Adresse E-mail'
            },
            inputMessage :{
                cols : "30",
                rows: "10",
                placeholder:'Nom et Prenom'
            },
            boutonEnvoyer:'Envoyer'
        }
    },

    footer :['<i class="fa-solid fa-phone"></i>+261 34 03 121 63','<i class="fa-solid fa-envelope"></i>mahasalotra@gmail.com',
        '<i class="fa-solid fa-location-dot"></i>Nanisana Iadiambola'
    ]
    
}


let link = document.querySelector('.link')
let linkToggle = document.getElementById('link-toggle')

for (let k = 0 ;k<5 ;k++){
    let span = document.createElement('span')

    link.appendChild(span)

    let a = document.createElement('a')
    span.appendChild(a)

    a.innerHTML = portfolio.link[k].titre
    a.href = portfolio.link[k].lien
}

let h2 = document.getElementById('h2')
h2.innerHTML += portfolio.acceuil.pseudo + '<br>' +  '<span id="titre">' + portfolio.acceuil.titre + '</span>'

let btn  = document.getElementById('btn')
btn.innerHTML += portfolio.acceuil.btn + '<i class="fa-solid fa-arrow-down">'+''+'</i>'
 
let userImage = document.getElementById('user-1-img')
userImage.src = portfolio.aboutMe.image.lien
userImage.alt = portfolio.aboutMe.image.alt


let bioh3 = document.getElementById('bio-h3')
    bioh3.innerHTML += 'Je m\'appelle' + ' '+ '<span id="nom">' + portfolio.aboutMe.bio.nom+ '</span>' 

let bioTexte = document.querySelector('.texte')
 bioTexte.innerHTML = portfolio.aboutMe.bio.texte 

 let linkDownloadCv = document.getElementById('download-cv')
 linkDownloadCv.href = portfolio.aboutMe.bio.download.lien
 linkDownloadCv.innerHTML += portfolio.aboutMe.bio.download.texte +' '+ '<i class="fa-solid fa-download">'+''+'</i>'

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

let contactContainer = document.querySelector('.contact-container')
let titreContact = document.createElement('h1')

contactContainer.appendChild(titreContact)
titreContact.innerHTML = portfolio.contact.GrandTitre

let form = document.createElement('form')
contactContainer.appendChild(form)

let inputNom = document.createElement('input')
form.appendChild(inputNom)

inputNom.type = portfolio.contact.form.inputNom.type
inputNom.placeholder= portfolio.contact.form.inputNom.placeholder

let inputEmail = document.createElement('input')
form.appendChild(inputEmail)

inputEmail.type =portfolio.contact.form.inputEmail.type
inputEmail.placeholder= portfolio.contact.form.inputEmail.placeholder

let inputMessage = document.createElement('textarea')


form.appendChild(inputMessage)

inputMessage.placeholder= portfolio.contact.form.inputMessage.placeholder
inputMessage.cols = portfolio.contact.form.inputMessage.cols
inputMessage.rows = portfolio.contact.form.inputMessage.rows

let br = document.createElement ('br')
form.appendChild(br)

let boutonEnvoyer = document.createElement('a')
form.appendChild(boutonEnvoyer)
boutonEnvoyer.classList.add('send')

boutonEnvoyer.innerHTML = portfolio.contact.form.boutonEnvoyer

let divFooter = document.querySelector('.footer')
let ul = document.createElement('ul')
divFooter.appendChild(ul)
for (let i = 0;i<3;i++){
    let li= document.createElement('li')
    ul.appendChild(li)

    li.innerHTML=portfolio.footer[i]
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


