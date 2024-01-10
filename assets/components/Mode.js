export class Mode extends HTMLElement{
    constructor(props) {
        super(props);
        this.renderDark()
        this.addEventListener('click', ()=> {
            this.renderLight()
            this.addEventListener('click' , ()=>{
                this.renderDark()
            })
        })
    }
    renderDark(){
        this.innerHTML = `
            <img src="./assets/img/dark-mode.png" alt="">
        `
    }
    renderLight(){
        this.innerHTML = `
            <img src="./assets/img/exposure.png" alt="">
        `
    }
}
customElements.define('my-mode', Mode)