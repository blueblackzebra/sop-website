const navButton=document.querySelector("#nav-button")
const arrowButton=document.querySelector("#arrow-button")
const navBar=document.querySelector("#nav-bar")
const navList=document.querySelector(".navbar-list")
const logo=document.querySelector("#logo-div")

let check=1;

navButton.addEventListener('click',(e)=> {
    navBar.style.width="40%"
    navButton.style.display="none"
    arrowButton.style.display="block"
    logo.style.display="block"
    navList.style.display="block"
    check=0;
})

arrowButton.addEventListener('click', (e)=> {
    navBar.style.width="10%"
    navButton.style.display="block"
    arrowButton.style.display="none"
    logo.style.display="none"
    navList.style.display="none"
    check=0;
})

window.onresize= () => {
    const mq=window.matchMedia("(min-width: 700px)");
    if (mq.matches && check==0) {
        window.location.reload();
    }
}