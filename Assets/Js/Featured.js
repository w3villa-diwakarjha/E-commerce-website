function Featured(arr) {
    let main = document.getElementById('product-images1')
    let html = "";
    arr.forEach(element => {
        if (element.type === 'product1') {
            html += `<div class="main-list-view">
        <div class="main-product-image main-image1">
            <div class="product-image" onclick="showProduct(${element.id})">
                 <img src="${element.img}" alt=""> 
                <div class="stars-rating">
                    <i class="fa-solid fa-star" style="color: yellow;"></i>
                    <i class="fa-solid fa-star" style="color: yellow;"></i>
                    <i class="fa-solid fa-star" style="color: yellow;"></i>
                    <i class="fa-solid fa-star" style="color: yellow;"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="discount">
                    <div class="mrp">-10%</div>
                    <div class="hot">Hot</div>
                </div>
            </div>


            <div class="product-img-desc" id="product-img-description1">
                <div class="apple-product">
                    <div class="apple-brand">${element.brand}</div>
                    <div class="product-brand">${element.productId}</div>
                </div>
                <div class="product-desc">
                    <div class="apple-txt">${element.producttext}</div>
                </div>
                <div class="product-price-main">
                    <div class="product-price1">${element.oldprice}</div>
                    <div class="product-price2">${element.newprice}</div>
                </div>
                <div class="main-quantity">
                    <div class="input-box">
                        <input type="number" value="1" class="box">
                    </div>
                    <div id="${element.id}" class="quantity-btn" onclick=count1(this)><button>Add To Cart</button></div>
                    <div class="quantity-icons">
                        <i id="${element.id}" class="fa-regular fa-heart" onclick="count(this)" ></i>
                        <i class="fa-solid fa-right-left"></i>
                    </div>
                </div>
                <div class="main-item-txt">
                    <div class="buy-now"><i class="fa-solid fa-dollar-sign"
                            style="color: #7ed290;"></i>Buy-Now</div>
                    <div class="question"><i class="fa-regular fa-circle-question"
                            style="color:brown"></i>question
                    </div>
                </div>
            </div>
        </div>

        <div class="main-brands-models" id="main-brands-models1">
            <div class="brands-models">
                <div class="brands"> Brands: <span
                        style="color: blue; cursor: pointer; text-decoration: underline;">Apple</span>
                </div>
                <div class="models">Model: ${element.productId}</div>
            </div>
            <div class="main-apple-brands">
                ${element.producttext}
            </div>
            <div class="main-apple-txt-p">
                ${element.desc}
            </div>
            <div class="price-rates">
                <div class="new-price" style="color: red; font-size: 20px;">${element.oldprice}</div>
                <div class="new-price"
                    style=" color: gray; font-size: 20px; padding-left: 5px; text-decoration: line-through;">
                    ${element.newprice}</div>
            </div>
            <div class="tax">Ex-Tax :- $70.61</div>
            <div class="Add-cart">
                <div class="main-add-cart">
                    <input type="number" value="2">
                </div>

               
                <div class="cart-button" onclick=count1(this)><i id="${element.id}" class="fa-solid fa-cart-shopping"></i><button>Add To Cart</button>
                </div>
                <div class="quantity-icons cart-icons">
                    <i id="${element.id}"class="fa-regular fa-heart add-cart-heart-left" onclick="count(this)"style="margin-right: 5px;"></i>
                    <i class="fa-solid fa-right-left add-cart-heart-left"></i>
                </div>
            </div>
            <div class="main-item-product-txt">
                <div class="buy-now-product"><i class="fa-solid fa-dollar-sign"
                        style="color: #7ed290;"></i>Buy-Now</div>
                <div class="question-product"><i class="fa-regular fa-circle-question"
                        style="color:brown"></i>question</div>
            </div>
        </div>

    </div>
    <hr class="main-image-hr actived" id="main-image-hr1">`
        }
    });
    html += `<div class="end-txt">You Have Reached End of The List</div>`
    main.innerHTML = html
}

function showProduct(productId) {
    location.href = 'product.html' + '?' + 'product=' + productId;
}

// ######################### Pagination ###########################

function pagination(length) {
    let n = Math.ceil(length / 3);
    j = 2;
    for (let i = 0; i < n - 1; i++) {
        let page = document.getElementsByClassName('pagination-number')[0];
        let button = document.createElement('button')
        button.classList.add('number');
        button.setAttribute("onclick", "activepage(event)")
        button.innerHTML = j;
        page.append(button);
        j++;
    }
}

let num = document.getElementsByClassName('number');
let currentvalue = 1;
async function activepage(e) {
    if (typeof (e) === "object") {
        for (i of num) {
            console.log("remove")
            i.classList.remove('activepage')
        }
        e.target.classList.add('activepage');
        // currentvalue = parseInt(e.target.textContent);
        currentvalue = e.target.textContent;
    } else {
        currentvalue = e;
    }
    let cartData = await pagenationData(currentvalue);
    // console.log(cartData.cartItem);
    // console.log(cartData.productCount);
    showpage(cartData.cartItem[currentvalue - 1]);
}


// ################################# Card Data #############################
async function cardItem() {
    let cartData = await pagenationData(1);
    showpage(cartData.cartItem[1 - 1]);
    pagination(cartData.productCount);
}
cardItem();

function showpage(cartData) {
    Featured(cartData);

}

async function pagenationData(currentvalue) {
    const urlparams = new URLSearchParams(window.location.search);
    let text = urlparams.get('search');
    let response = await fetch('./Assets/Json/Featured.json');
    let data = await response.json();
    const product = data["Product"].filter(function (user) {
        return (user.name.toLowerCase().includes(text.toLowerCase()))
    })

    let n = product.length;
    let arr2 = [];
    let l = n;
    for (let i = 0; i < n; i += 3) {
        let arr3 = [];
        let k = 0;
        if (l >= 3) {
            for (let j = i; j < (i + 3); j++) {
                arr3[k++] = product[j];
            }
            l = l - 3;
        }
        else {
            for (let j = i; j < (i + l); j++) {
                arr3[k++] = product[j];
            }
        }

        arr2.push(arr3);
    }

    return {
        "cartItem": arr2,
        "productCount": product.length,
    };

}

function prev() {
    if (currentvalue > 1) {
        for (i of num) {
            i.classList.remove('activepage');
        }
        currentvalue--;
        num[currentvalue - 1].classList.add("activepage");
    }
    activepage(currentvalue);
}


function next() {
    let paginationlength = document.querySelectorAll('.pagination-number .number').length;
    if (currentvalue < paginationlength) {
        for (i of num) {
            // console.log(i)
            i.classList.remove('activepage')
        }
        currentvalue++;
        // console.log(num[currentvalue-1])
        num[currentvalue - 1].classList.add("activepage");
    }
    activepage(currentvalue)


}

// ################################# whishlist-section ############################

let k = 1;
function count(e) {
    var userinfo = JSON.parse(localStorage.getItem("username")) || [];
    let arr = JSON.parse(localStorage.getItem("username"))
    if(arr==null){
        document.querySelector('.counting').innerHTML = 1;
    }
    else{
    
        let length = arr.length
        document.querySelector('.counting').innerHTML = length+1;
    }
    // document.querySelector('.counting').innerHTML = length;
    let id = e.id;
    console.log(id)
    let present = 0;
    if (arr && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == id) {
                present = 1;
            }
        }
        if (present == 1) {
            alert('Already Exist');
        }
        else {
            userinfo.push(id);
            let json = JSON.stringify(userinfo);
            localStorage.setItem("username", json);
        }
    }
    else {
        console.log("hello")
        userinfo.push(id);
        let json = JSON.stringify(userinfo);
        localStorage.setItem("username", json);
    }
}
let arr = JSON.parse(localStorage.getItem("username"))
if(arr==null){
    document.querySelector('.counting').innerHTML = 0;
}
else{

    let length1 = arr.length
    document.querySelector('.counting').innerHTML = length1;
}
function showWishlist() {
    window.location.href = "wishlist.html"
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
// ############################# Grid-list View ###################################
function gridvalue() {
    document.getElementById("product-images1").classList.remove("list-direction")
    let a = document.querySelectorAll('#main-image-hr1');
    let b = document.querySelectorAll('#main-brands-models1')
    let c = document.querySelectorAll('#product-img-description1')
    a.forEach(element => {
        element.classList.remove("actived");
    });
    b.forEach(element => {
        element.classList.remove("actived");
    });
    c.forEach(element => {
        element.classList.remove("acitve-none");
    })

}

function listvalue() {
    document.getElementById("product-images1").classList.add("list-direction");
    let a = document.querySelectorAll('#main-brands-models1')
    a.forEach(element => {
        element.classList.add("actived");
        console.log(element)
        // console.log("hi")
    });
}



// ######################### Search-Bar #########################################
const input_bar = document.querySelector('.search-bar')
const search_icon = document.querySelector('.search-icon')
let text;

input_bar.addEventListener('input', function () {
    text = this.value
})

search_icon.addEventListener('click', searchbar)


function searchbar() {
    if ((typeof (text) !== 'undefined') && (text !== '')) {
        location.href = 'search.html' + '?' + 'search=' + text;
    }
}