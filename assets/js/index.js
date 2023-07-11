let bgVideo = document.getElementById('video')
let dark = document.getElementById('dark-mode')
let light = document.getElementById('light-mode')
let body = document.body
let header = document.getElementById('header')
let darkText = document.getElementById('dark')
let lightText = document.getElementById('light')
dark.addEventListener('click',function(){
    dark.style.zIndex='-2'
    light.style.zIndex='2'
    bgVideo.style.visibility='hidden'
    header.style.backgroundColor='#000'
    darkText.style.color='transparent'
    lightText.style.color='#d9af23'
})
light.addEventListener('click',function(){
    light.style.zIndex='-2'
    dark.style.zIndex='2'
    bgVideo.style.visibility='visible'
    header.style.backgroundColor='#011936'
    header.style.color='#011936'
    lightText.style.color='transparent'
    darkText.style.color='#fff'
})