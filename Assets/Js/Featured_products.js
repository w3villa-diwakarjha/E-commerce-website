let value2 = "Featured";

function showbutton1(e) {
    let element = e.target;
    value2 = e.target.textContent;
    console.log(value2)
    let p = document.getElementsByClassName('actived1')[0];
    console.log(p)
    p.classList.remove('actived1');
    element.classList.add('actived1');
    Featured_products();
}

async function Featured_products() {
    let response = await fetch('./Assets/Json/Featured_products.json');
    let data = await response.json();
    let arr = data[value2];
    let owl = document.getElementById('main-carousel1');
    let html = `<div id="owl-carousel-2" class="owl-carousel owl-theme">`

    arr.forEach(element => {
        if (element.brand == 'Ericksson') {
            html += `<div class="item1">
        <div class="item1-img">
        <img src="${element.img}" alt="">
        </div>
        <div class="text-main-owl">
            <div class="main-item-txt">
                <div class="ericksson">${element.brand}</div>
                <div class="model-519">${element.model}</div>
            </div>
            <div class="headphone">${element.product}</div>

            <div class="dollar">
                <div class="dollar-price">$999.0</div>
                <div class="new-price">$1000.000</div>
            </div>
            <div class="main-quantity">
                <div class="input-box">
                    <input type="number" value="1" class="box">
                </div>
                <div id=${element.id} class="quantity-btn" onclick=count1(this)><button>Add To Cart</button></div>
                <div class="quantity-icons">
                    <i id=${element.id} class="fa-regular fa-heart"onclick=count(this)></i>
                    <i class="fa-solid fa-right-left"></i>
                </div>
            </div>
            <div class="main-item-txt">
                <div class="buy-now"><i class="fa-solid fa-dollar-sign"
                        style="color: #7ed290;"></i>Buy-Now</div>
                <div class="question"><i class="fa-regular fa-circle-question"
                        style="color:brown"></i>question</div>
            </div>
        </div>
    </div>`
        }
    });
    html += `</div>`;
    html += `<div class="all-product main-btn"><button class="btn-blue all-product-btn">See All Product-></button></div>`
    owl.innerHTML = html;

    // ############################### Feature Section ########################

    $('#owl-carousel-2').owlCarousel({
        loop: true,
        margin: 10,
        // autoplay: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
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

function mouseOver() {
    document.querySelector('.overlay-layer').style.display = 'block';
}
function mouseOut() {
    document.querySelector('.overlay-layer').style.display = 'none';
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

    let length = arr.length
    document.querySelector('.counting').innerHTML = length;
}


// ################################# Addtocart-section ############################

// let k1 = 1;
function count1(e) {
    var userinfo = JSON.parse(localStorage.getItem("username1")) || [];
    let arr1 = JSON.parse(localStorage.getItem("username1"))
    if(arr1==null){
        document.querySelector('.cart-items').innerHTML = 1;
    }
    else{
    
        let length = arr1.length
        document.querySelector('.cart-items').innerHTML = length+1;
    }
    
    let id = e.id;
    console.log(id)
    let present1 = 0;
    if (arr1 && arr1.length > 0) {
        console.log(arr1.length)
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] == id) {
                present1 = 1;
            }
        }
        if (present1 == 1) {
            // console.log("hi")
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

    let length = arr1.length;
    document.querySelector('.cart-items').innerHTML = length;
}

function showWishlist() {
    window.location.href = "wishlist.html"
}

function showaddtoCart() {
    window.location.href = "addtocart.html"
}

Featured_products();
