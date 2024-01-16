let menu=document.querySelector(".list-none")
let x=document.querySelector(".x")
let nav2=document.querySelector(".nav2");
menu.addEventListener("click",function(){
    nav2.classList.toggle("showmenu")
})
x.addEventListener("click",function(){
    nav2.classList.remove("showmenu")
});
