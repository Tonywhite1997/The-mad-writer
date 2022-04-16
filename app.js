let extend = document.getElementById("extend");
let listItem = document.getElementById("mini-books");
let slideIn = document.getElementById("slide-in");
let navigation = document.getElementById("navigation");
let openNav = document.getElementById("open-nav");
let closeNav = document.getElementById("close-nav")

extend.addEventListener("click", function(){
    listItem.style.top="10vh";
    extend.style.display="none";
    slideIn.style.display="block";
} )

slideIn.addEventListener("click", function(){
    listItem.style.top="-50vh";
    slideIn.style.display="none";
    extend.style.display="block";
})

openNav.addEventListener("click", function(){
    navigation.style.left="0";
    openNav.style.display="none";
    closeNav.style.display="block";
})
closeNav.addEventListener("click", function(){
    navigation.style.left="-100vw";
    closeNav.style.display="none";
    openNav.style.display="block";
})