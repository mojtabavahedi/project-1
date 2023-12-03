// show products and option for add to cart :

// show product:


let prd1= document.getElementById("product-f")
let prd2= document.getElementById("product-n")
let basket =JSON.parse(localStorage.getItem("data"))||[];
let generateProduct1=()=>{
    return(prd1.innerHTML=Product1.map((x)=>{
        let{id,image,name,price}=x;
        return `
        <div class="pro">
                    <img id="select" onclick="window.location.href='sproduct.html'" src=${image} alt="">
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
                    <div  id="count" >
                    <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                    <div id=${id} class="quantity">
                        
                    </div>
                    <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                    <a  ><i onclick="increment(${id})" id="basket1" class="fa-solid fa-cart-shopping cart "></i></a>
                </div>
        `
        }).join(""))
      
}
let generateProduct2=()=>{
    return(prd2.innerHTML=product2.map((x)=>{
        let{id,image,name,price}=x;
        return `
        <div class="pro">
                    <img id="select" onclick="window.location.href='sproduct.html'" src=${image} alt="">
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
                    <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                    <div id=${id} class="quantity">
                        0
                    </div>
                    <i  onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                    <a>  <i onclick="increment(${id})" id="basket1" class="fa-solid fa-cart-shopping cart "></i></a>
                </div>
        `
        }).join(""))
    }
generateProduct1();
generateProduct2();

// search product:

let searchIcon = document.getElementById("search-ic");
let searchInput = document.getElementById("search-ip"); 
searchIcon.addEventListener("click",(e)=>{
        filterGenerateProduct1();
        filterGenerateProduct2();
})
searchInput.addEventListener("input",(e)=>{
    if(searchInput.value==0){
        generateProduct1()
    };
    if(searchInput.value==0){
        generateProduct2()
    }
})
let filterGenerateProduct1=()=>{
    let productname = searchInput.value.toLowerCase();
    let filterproduct1 = Product1.filter((x)=>x.name.toLowerCase().includes(productname))
    if(filterproduct1.length!==0){
    return(prd1.innerHTML=filterproduct1.map((x)=>{
        let{id,image,name,price}=x;
        return `
        <div class="pro">
                    <img id="select" onclick="window.location.href='sproduct.html'" src=${image} alt="">
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
                    <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                    <div id=${id} class="quantity">
                        0
                    </div>
                    <i  onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                    <a ><i onclick="increment(${id})" id="basket1" class="fa-solid fa-cart-shopping cart "></i></a>
                </div>
        `
        }).join(""))}else{
            prd1.innerHTML=`<div class="no-product" ><h3>Your product was not found</h3></div>`
        }
}
let filterGenerateProduct2=()=>{
    let productname = searchInput.value.toLowerCase();
    let filterproduct2 = product2.filter((x)=>x.name.toLowerCase().includes(productname))
    if(filterproduct2.length!==0){
    return(prd2.innerHTML=filterproduct2.map((x)=>{
        let{id,image,name,price}=x;
        return `
        <div class="pro">
                    <img id="select" onclick="window.location.href='sproduct.html'" src=${image} alt="">
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
                    <div id=${id} class="quantity">
                        0
                    </div>
                    <i  onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                    <a  ><i onclick="increment(${id})" id="basket1" class="fa-solid fa-cart-shopping cart "></i></a>
                </div>
        `
        }).join(""))}else{
            prd2.innerHTML=`<div class="no-product" ><h3>Your product was not found</h3></div>`
        }
}
// add t o cart :




let increment =(id)=>{
    const selectitem = id;
    let search = basket.find((x)=>x.id===selectitem.id)
        
    if(search === undefined ){
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
    const selectitem = id;
    let search = basket.find((x)=>x.id===selectitem.id)
    if(search===undefined){
        return
    }
    
     else if(search.item === 0  ){
        return
        
    }
    
    else{
        search.item -= 1;
        
        
        
    }

    update(selectitem.id);
    basket=basket.filter((x)=>x.item!==0)
    localStorage.setItem("data",JSON.stringify(basket))
    
    
}
  // show the number of product between + & -:  
let update = (id)=>{
    let search=basket.find((x)=>x.id===id)
  let Show=   document.getElementById(id).innerHTML=search.item;
    calculation();
    return Show
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




    window.document.addEventListener("click",(e)=>{
   
        if(   e.target.id=="basket1" ){
            e.target.parentNode.previousElementSibling.style.display="flex"
            e.target.parentNode.classList="active"
        }else if(e.target.parentNode.id=="count"){
            if(e.target.nextElementSibling.innerHTML==0){
            e.target.parentNode.style.display="none"
            e.target.parentNode.nextElementSibling.classList.remove("active")}
        }
         else if(e.target.id=="select"){
            sproduct.push({
                image:e.target.src,
                id:e.target.parentNode.children[2].children[1].id
                
                
            })
            localStorage.setItem("data-2",JSON.stringify(sproduct))
           
    
         }
     })
    sproduct=[]