// show product,search product,add to cart :

//show product:

let totalproduct = document.getElementById("allProduct");
let basket =JSON.parse(localStorage.getItem("data"))||[];
let sproduct = JSON.parse(localStorage.getItem("data-2"))||[];
let generatAllproduct=()=>{
    return(totalproduct.innerHTML=allproduct.map((x)=>{
        let{id,image,name,price}=x;
        return `
        <div  class="pro">
                    <img onclick="window.location.href='sproduct.html'"  id="select" src=${image} alt="">
                    <div class="des">
                        <span >adidas</span>
                        <h5  >${name}</h5>
                        <div  class="star">
                            <i  class="fas fa-star"></i>
                            <i  class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>${price}</h4>
                    </div>
                    <div id="count">
                    <i  onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                    <div id=${id} class="quantity">
                        
                    </div>
                    <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                    <a ><i onclick="increment(${id})" id="basket1" class="fa-solid fa-cart-shopping cart "></i></a>
                </div>
        `
        }).join(""))
}
generatAllproduct();

// get id of product for use in sproduct page :

    

// search product:
let searchIcon = document.getElementById("search-ic");
let searchInput = document.getElementById("search-ip"); 
searchIcon.addEventListener("click",(e)=>{
        filterGenerateAllProduct();
       
})
searchInput.addEventListener("input",(e)=>{
    if(searchInput.value==0){
       generatAllproduct()
    };
    
})
let filterGenerateAllProduct=()=>{
    let productname = searchInput.value.toLowerCase();
    let filterproduct = allproduct.filter((x)=>x.name.toLowerCase().includes(productname))
    if(filterproduct.length!==0){
    return(totalproduct.innerHTML=filterproduct.map((x)=>{
        let{id,image,name,price}=x;
        return `
        <div class="pro">
                    <img onclick="window.location.href='sproduct.html'" id="select" src=${image} alt="">
                    <div class="des">
                        <span>adidas</span>
                        <h5>${name}</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>${price}</h4>
                    </div>
                    <div id="count">
                    <i  onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                    <div  id=${id} class="quantity">
                        0
                    </div>
                    <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                    <a  ><i onclick="increment(${id})" id="basket1" class="fa-solid fa-cart-shopping cart "></i></a>
                </div>
        `
        }).join(""))}else{
         totalproduct.innerHTML=`<div class="no-product"><h3>Your product was not found</h3></div>`
          

        }
}
// add to cart 


let increment =(id)=>{
    const selectitem=id
    let search = basket.find((x)=>x.id===selectitem.id)
    
    if(search === undefined){
        basket.push({
            id:selectitem.id,
            item:1,
        });

    }else{

       search.item+=1;
    }
    localStorage.setItem("data",JSON.stringify(basket))
    update(selectitem.id);
    
};


let decrement =(id)=>{
    const selectitem=id
    let search = basket.find((x)=>x.id===selectitem.id)
    if(search===undefined){
        return
    }
     else if(search.item === 0){
        return
    }else{
        search.item -= 1;
    }
    
    
 
    update(selectitem.id);
    basket=basket.filter((x)=>x.item!==0)
    localStorage.setItem("data",JSON.stringify(basket))
    
}
// show the number of product between + & =:
let update = (id)=>{
    let search=basket.find((x)=>x.id===id)
    document.getElementById(id).innerHTML=search.item;
    calculation();
}
// show the number of total  products in basket :
let calculation=()=>{
    let cartIcon=document.querySelector(".num-pro")
    let cartIcon1=document.querySelector("#num-pro")
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
    cartIcon1.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}
window.document.addEventListener("DOMContentLoaded",()=>{
    calculation()
})
// feature for add to cart and display the product in sproduct page :
window.document.addEventListener("click",(e)=>{
   // hidden & visibility basket icon & + &- :
    if(   e.target.id=="basket1" ){
        e.target.parentNode.previousElementSibling.style.display="flex"
        e.target.parentNode.classList="active"
    }else if(e.target.parentNode.id=="count"){
        if(e.target.nextElementSibling.innerHTML==0){
        e.target.parentNode.style.display="none"
        e.target.parentNode.nextElementSibling.classList.remove("active")}
    }
    // select the poduct for display in sproduct page :
     else if(e.target.id=="select"){
        sproduct.push({
            image:e.target.src,
            id:e.target.parentNode.children[2].children[1].id
            
            
        })
        localStorage.setItem("data-2",JSON.stringify(sproduct))
       

     }
 })
sproduct=[]


   