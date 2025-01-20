const scrollElem = document.querySelector('.scroll')
window.onscroll =()=>{
    Scroll()
}


function Scroll(){
    const top = document.documentElement.scrollTop
    const heigth = document.documentElement.scrollHeight-document.documentElement.clientHeight
    
    const counter = (top/heigth)*100

    console.log(counter)


    scrollElem.style.width = counter+'%'

}