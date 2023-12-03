//select product &  add to cart :
let basket =JSON.parse(localStorage.getItem("data"))||[];
let sproduct = JSON.parse(localStorage.getItem("data-2"))||[];
let showProduct = document.getElementById("prodetails")
let generatSproduct=()=>{ return( showProduct.innerHTML=sproduct.map((x)=>{
    let {id,image}=x;

    
    return `
    <div class="single-pro-image">
    <img src="${image}" alt="" width="100%" >
    <div class="small-img-group">
        <div class="small-img-col">
            <img   src="img/products/f1.jpg" width="100%" class="small-img" id="s-1" alt="">
        </div>
        <div class="small-img-col">
            <img  src="img/products/f2.jpg" width="100%" class="small-img" id="s-2" alt="">
        </div>
        <div class="small-img-col">
            <img  src="img/products/f3.jpg" width="100%" class="small-img" id="s-3" alt="">
        </div>
        <div class="small-img-col">
            <img  src="img/products/f4.jpg" width="100%" class="small-img" id="s-4" alt="">
        </div>
    </div>
</div>
<div class="single-pro-details">
    <h6>Home / T-shirt</h6>
    <h4>Mens Fashion T shirt</h4>
    <h2>$139.00</h2>
    <select>
        <option>select size</option>
        <option> XL </option>
        <option> XXL</option>
        <option> Small </option>
        <option> Large </option>
    </select>
    <input type="number" value="1" id="count-2">
    <button id="${id}" onclick="addToCart(${id})" class="normal">Add To Cart</button>
    <h4>Product Details</h4>
    <span>The Gilden Ultra Cotton T-shirts is made from substantial 6.0 oz.per
        sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey
        knit provides unmatched comfort with each wear . featuring a taped neck and
        shoulder, and a seamless double -needle collar, and avaible in a range of
        colors, it offers it all in the ultimate head-turning package</span>
</div>`
})

)}


generatSproduct();


// add to cart :
let addToCart = (id)=>{
    const selectitem= id
    let search = basket.find((x) =>x.id ===selectitem.id)

    if(search === undefined){
        basket.push({
            id:selectitem.id,
            item:Number(document.getElementById("count-2").value),
        });
       
    }else {
   
       search.item+=Number(document.getElementById("count-2").value)
       
    }
  
    localStorage.setItem("data",JSON.stringify(basket))
    calculation();
    
}
//  show the number of total  products in basket:
let calculation=()=>{
    let cartIcon=document.querySelector(".num-pro")
    let cartIcon1=document.querySelector("#num-pro")
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
    cartIcon1.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}
window.document.addEventListener("DOMContentLoaded",()=>{
    calculation()
})
// select product :
document.addEventListener("click",(e)=>{
    if(e.target.id=="s-1"){
        sproduct.splice(0, sproduct.length)
        sproduct.push(allproduct[0])
        generatSproduct()
    }else if(e.target.id=="s-2"){
        sproduct.splice(0, sproduct.length)
        sproduct.push(allproduct[1])
        generatSproduct()
    }else if(e.target.id=="s-3"){
        sproduct.splice(0, sproduct.length)
        sproduct.push(allproduct[2])
        generatSproduct()
    }else if(e.target.id=="s-4"){
        sproduct.splice(0, sproduct.length)
        sproduct.push(allproduct[3])
        generatSproduct()
    }

})

document.addEventListener("click",(e)=>{
    if(e.target.id=="select-1"){
        sproduct.splice(0, sproduct.length)
        sproduct.push(allproduct[8])
        generatSproduct()
    }else if(e.target.id=="select-2"){
        sproduct.splice(0, sproduct.length)
        sproduct.push(allproduct[9])
        generatSproduct()
    }else if(e.target.id=="select-3"){
        sproduct.splice(0, sproduct.length)
        sproduct.push(allproduct[10])
        generatSproduct()
    }else if(e.target.id=="select-4"){
        sproduct.splice(0, sproduct.length)
        sproduct.push(allproduct[11])
        generatSproduct()
    }
})

