let basket =JSON.parse(localStorage.getItem("data"))||[];
let cartItems = document.querySelector("#bodyy")
// display items in basket :
let generateCartItems=()=>{
    if(basket.length!==0){
    return ( cartItems.innerHTML=basket.map((x)=>{
        let {item,id}=x;
        let search = allproduct.find((x)=>x.id===id) || [];
        return `
        <tr>
            <td><a onclick="remove(${id})" class="remove"  href="#"><i  class="fa-regular fa-circle-xmark"></i></a></td>
            <td><img src=${search.image} alt=""></td>
            <td>Cartoon Astronaut T-shirts</td>
            <td>$${search.price}</td>
            <td  class="cart-count"> <i  onclick="decrement(${id})" class="fa-solid fa-minus"></i><div id=${id}  >${item} </div><i onclick="increment(${id})" class="fa-solid fa-plus"></i></td>
            <td>${search.price * item}</td>
        </tr>
        
    `
    }))}else{
       cartItems.innerHTML= `<div class=empty >please select your product</div>`
    }
}
generateCartItems()


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
    generateCartItems();
    totalAmount()
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
    generateCartItems();
    totalAmount()
    removeCondition()
}
//  show the number of product between + & =
let update = (id)=>{
    let search=basket.find((x)=>x.id===id)
    document.getElementById(id).innerHTML=search.item;
    calculation();
}
// show the total price for all products :
let totalAmount = ()=>{
 let amount =  basket.map((x)=>{
        let {item,id}=x;
        let search = allproduct.find((x)=>x.id===id)
        return search.price * item
    }).reduce((x,y)=>x+y,0)
    document.querySelector("#Totalprice").innerHTML=amount
    document.querySelector("#Totalprice-2").innerHTML=amount
}
//show the number of total  products in basket:
let calculation=()=>{
    let cartIcon=document.querySelector(".num-pro")
    let cartIcon1=document.querySelector("#num-pro")
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
    cartIcon1.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}
window.document.addEventListener("DOMContentLoaded",()=>{
    calculation()
})
// remove one product when we click on remove icon :
function remove(id){
    let selectitem=id;
    basket = basket.filter((x)=>x.id!==selectitem.id)
    localStorage.setItem("data",JSON.stringify(basket))
    generateCartItems();
    totalAmount();
    calculation();
    removeCondition();
}
// remove all of products when we click on button icon :
const removeall = document.querySelector("#removeall")
removeall.addEventListener("click",(e)=>{
    basket=[]
    localStorage.setItem("data",JSON.stringify(basket))
    e.target.remove()
    generateCartItems();
    totalAmount();
    calculation();
    
})
// condition for remove product:
function removeCondition (){
    if(basket.length==0){
        removeall.remove()
     }
}
removeCondition()



totalAmount()

