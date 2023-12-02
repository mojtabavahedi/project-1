// slider 
const Open = document.querySelector("#bar")
const Close = document.querySelector("#close")
Open.addEventListener(("click"),()=>{
    document.querySelector(".navbar").classList.toggle("active");
    document.getElementById("bar").style.display="none";
    document.getElementById("mobile-basket").style.visibility="hidden"

})
Close.addEventListener(("click"),()=>{
    document.querySelector(".navbar").classList.remove("active")
    document.getElementById("bar").style.display="block";
    document.getElementById("mobile-basket").style.visibility="visible"
})



