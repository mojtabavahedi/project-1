// show the number of product in basket :
let basket =JSON.parse(localStorage.getItem("data"))||[];
let calculation=()=>{
    let cartIcon=document.querySelector(".num-pro")
    let cartIcon1=document.querySelector("#num-pro")
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
    cartIcon1.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}
window.document.addEventListener("DOMContentLoaded",()=>{
    calculation()
})
