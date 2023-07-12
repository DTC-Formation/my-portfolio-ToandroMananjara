let bgVideo = document.getElementById('video')
let bgImg = document.getElementById('img-bg')
let dark = document.getElementById('dark-mode')
let light = document.getElementById('light-mode')
let body = document.body
let header = document.getElementById('header')
let footer = document.getElementById('footer')
let menu1=document.getElementById('menu-1')
let menu2=document.getElementById('menu-2')

let container = document.querySelector('.container')
let linkToogle = document.querySelector('.menu-toogle')

let acceuil = document.getElementById('acceuil')
let about = document.getElementById('Apropos')
let competence = document.getElementById('skill')
let education = document.getElementById('etude')
let contact = document.getElementById('mecontacter')


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
    
    linkToogle.classList.toggle('menu-click')
    container.classList.toggle('container-toogle')  

    footer.style.display='none'
})
function menu(a){
    a.addEventListener('click',function(){

    linkToogle.classList.toggle('menu-click')
    container.classList.toggle('container-toogle')  
    footer.style.display='block'

})

}

menu(acceuil)
menu(about)
menu(competence)
menu(education)
menu(contact)
