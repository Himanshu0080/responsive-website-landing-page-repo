

burger=document.querySelector(".burger")
navbar=document.querySelector(".navbar")
navList=document.querySelector(".nav-list")
rightNav=document.querySelector(".rightNav")


burger.addEventListener("click",()=>{
    rightNav.classList.toggle("v-classResp")
    navList.classList.toggle("v-classResp")
    navbar.classList.toggle("h-navResp")

})