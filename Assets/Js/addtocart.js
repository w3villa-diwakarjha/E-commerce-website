let localdata = localStorage.getItem("username1")
let id = JSON.parse(localdata);
let price=[]
if (id == null) {
    let product = document.querySelector('.addtocart-products')
    let html = `Oops! Add to Cart is Empty`
    product.innerHTML = html;
    console.log("Add to Cart is empty");
}

else {
    let a = ["Featured", "Latest", "BestSellers", "Specials", "Product"]
    console.log(a)

    async function getdata1() {
        let response = await fetch('./Assets/Json/Featured_products.json');
        let data = await response.json();
        console.log(data)
        let product1 = document.querySelector('.addtocart-products')
        console.log(product1)
        let html = ""
        for (let i = 0; i < id.length; i++) {
            for (let j = 0; j < a.length; j++) {
                let arr = data[a[j]];

                arr.forEach(element => {
                    if (element.id == id[i]) {
                        console.log(element.newprice)
                        html+=`<div id=${element.id}>`
                        html += `<div class="addtocart-product-main">
                        <div class="addtocart-images addtocart-production">
                            <div class="addtocart-image">
                                <img src="${element.img}" alt="">
                            </div>
                        </div>
                        <div class="addtocart-production">
                            <div class="addtocart-product">
                                ${element.product}
                            </div>
                        </div>
                        <div class="addtocart-production">
                            <div class="addtocart-model">
                                ${element.model}
                            </div>
                        </div>
                        <div class="addtocart-production">
                            <div class="addtocart-price">
                                ${element.newprice}
                            </div>
                        </div>
                        <div class="addtocart-production">
                            <div class="addtocart-production1">
                                <div id=${element.id} class="remove1" onclick="removeItems1(this)"><i class="fa-sharp fa-solid fa-trash"></i></div>
                                <div class="addtocart-item">
                                    <input type="number" value="1">
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>`
                    html+=`</div>`
                    }
                });
            }
        }
        product1.innerHTML = html;
    }
    let arr1 = JSON.parse(localStorage.getItem("username1"))
    if (arr1 == null) {
        document.querySelector('.cart-items').innerHTML = 0;
    }
    else {

        let length = arr1.length
        document.querySelector('.cart-items').innerHTML = length;
    }
    function showWishlist1() {
        window.location = 'addtocart.html'
    }

    function removeItems1(e) {
        // console.log(e.id)
        let id = e.id;
        console.log(id)
        let value=document.getElementById(id)
        // let value = document.querySelectorAll('#id')
        console.log(value)
        value.remove()
        let arr1=[]
        let local=JSON.parse(localStorage.getItem("username1"))
        local.filter(item=>{
            if(item!==id){
                arr1.push(item)
            }
        })
        // console.log(arr1.length)
        localStorage.setItem("username1",JSON.stringify(arr1))
        document.querySelector('.cart-items').innerHTML = arr1.length;
    }
    function showaddtoCart() {
        window.location.href = "addtocart.html"
    }
    getdata1();
}

