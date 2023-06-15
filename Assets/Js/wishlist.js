let localdata = localStorage.getItem("username")
let id = JSON.parse(localdata);
if (id == null) {
    let product = document.querySelector('.wishlists-products')
    let html = `OOps! Wishlist is Empty`
    product.innerHTML = html;
    console.log("Wishlist is empty");
}

else {
    let a = ["Featured", "Latest", "BestSellers", "Specials", "Product"]
    console.log(a)

    async function getdata() {
        let response = await fetch('./Assets/Json/Featured_products.json');
        let data = await response.json();
        console.log(data)
        let product = document.querySelector('.wishlists-products')
        console.log(product)
        let html = ""
        for (let i = 0; i < id.length; i++) {
            for (let j = 0; j < a.length; j++) {
                let arr = data[a[j]];

                arr.forEach(element => {
                    if (element.id == id[i]) {
                        html+=`<div id=${element.id}>`
                        html += `<div class="wishlist-product-main">
                        <div class="wishlist-images wishlist-production">
                            <div class="wishlist-image">
                                <img src="${element.img}" alt="">
                            </div>
                        </div>
                        <div class="wishlist-production">
                            <div class="wishlist-product">
                                ${element.product}
                            </div>
                        </div>
                        <div class="wishlist-production">
                            <div class="wishlist-model">
                                ${element.model}
                            </div>
                        </div>
                        <div class="wishlist-production">
                            <div class="wishlist-production1">
                                <div id=${element.id} class="remove" onclick="removeItems(this)"><i class="fa-sharp fa-solid fa-trash"></i></div>
                                <div class="wishlist-item">
                                    <input type="number" value="1">
                                </div>
                                <div id=${element.id} class="add-to-cart" onclick=count1(this)><i class="fa-solid fa-cart-shopping"></i></div>
                            </div>
                        </div>
                    </div>
                    <hr>`
                    html+=`</div>`
                    }
                });
            }
        }
        product.innerHTML = html;
    }
    let arr = JSON.parse(localStorage.getItem("username"))
    if (arr == null) {
        document.querySelector('.counting').innerHTML = 0;
    }
    else {

        let length = arr.length
        document.querySelector('.counting').innerHTML = length;
    }
    function showWishlist() {
        window.location = 'wishlist.html'
    }

    function removeItems(e) {
        // console.log(e.id)
        let id = e.id;
        console.log(id)
        let value=document.getElementById(id)
        // let value = document.querySelectorAll('#id')
        console.log(value)
        value.remove()
        // username.filter(item=>{
        //     console.log(item)
        // })
        let arr1=[]
        let local=JSON.parse(localStorage.getItem("username"))
        local.filter(item=>{
            if(item!==id){
                arr1.push(item)
            }
        })
        // console.log(arr1.length)
        localStorage.setItem("username",JSON.stringify(arr1))
        document.querySelector('.counting').innerHTML = arr1.length;
    }
    getdata();
}


function showaddtoCart() {
    window.location.href = "addtocart.html"
}

// ################################# Add to cart section ############################

let k1= 1;
function count1(e) {
    console.log("Hello")
    var userinfo = JSON.parse(localStorage.getItem("username1")) || [];
    let arr1 = JSON.parse(localStorage.getItem("username1"))
    if(arr1==null){
        document.querySelector('.cart-items').innerHTML = 1;
    }
    else{
    
        let length1 = arr1.length
        document.querySelector('.cart-items').innerHTML = length1+1;
    }
    // document.querySelector('.counting').innerHTML = length;
    let id = e.id;
    console.log(id)
    let present1 = 0;
    if (arr1 && arr1.length > 0) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] == id) {
                present1 = 1;
            }
        }
        if (present1 == 1) {
            alert('Already Exist');
        }
        else {
            userinfo.push(id);
            let json = JSON.stringify(userinfo);
            localStorage.setItem("username1", json);
        }
    }
    else {
        console.log("hello")
        userinfo.push(id);
        let json = JSON.stringify(userinfo);
        localStorage.setItem("username1", json);
    }
}
let arr1 = JSON.parse(localStorage.getItem("username1"))

if(arr1==null){
    document.querySelector('.cart-items').innerHTML = 0;
}
else{

    let length1 = arr1.length;
    document.querySelector('.cart-items').innerHTML = length1;
}

function showaddtoCart() {
    window.location.href = "addtocart.html"
}