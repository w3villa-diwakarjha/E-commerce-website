function Featured(arr) {
   
    console.log(arr)
    //function(arr2[innerHtml-1])
    let main = document.getElementById('product-images1')
    // console.log(main);
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
                    <div class="quantity-btn"><button>Add To Cart</button></div>
                    <div class="quantity-icons">
                        <i class="fa-regular fa-heart"></i>
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

               
                <div class="cart-button"><i
                        class="fa-solid fa-cart-shopping"></i><button>Add To Cart</button>
                </div>
                <div class="quantity-icons cart-icons">
                    <i class="fa-regular fa-heart add-cart-heart-left"
                        style="margin-right: 5px;"></i>
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
    <hr class="main-image-hr" id="main-image-hr1">`
        }
    });
    html += `<div class="end-txt">You Have Reached End of The List</div>`
    // console.log(html)
    main.innerHTML = html
}

function showProduct(productId) {
    // console.log(productId);
    let k = location.href = 'product.html' + '?' + 'product=' + productId;
    console.log(k)
}

// ######################### Pagination ###########################
var n=1;

function pagination(length) {
    let n=Math.ceil(length/3);
    j = 2;
    for (let i = 0; i < n-1; i++) {
        let page = document.getElementsByClassName('pagination-number')[0];
        let button= document.createElement('button')
        button.classList.add('number');
        button.setAttribute("onclick", "activepage(event)")
        button.innerHTML = j;
        page.append(button);
        j++;
    }
}

let num = document.getElementsByClassName('number');
let currentvalue = 1;

function activepage(e) {
    if(typeof(e) === "object"){
        for (i of num) {
            i.classList.remove('activepage')
        }
        console.log(e)
        e.target.classList.add('activepage');
        // currentvalue = parseInt(e.target.textContent);
        currentvalue=e.target.textContent;
    }else{
        currentvalue = e;
    }
    // console.log(currentvalue);
    showpage(currentvalue);
}



// function activepage(e){
//     console.log(e.target.textContent)
// }
async function showpage(currentvalue){
    let response = await fetch('./Assets/Json/Featured.json');
    let data = await response.json();

    let arr = data["Product"];
    n=arr.length;
    let a=n%3;
    console.log(a)
    let arr2=[];
    // for(let i=0;i<n;i+=3){
    //     let arr3=[];
    //     let k=0;
    //     for(let j=i;j<(i+3);j++){
    //         arr3[k]=arr[j];
    //         k++;
    //     }
    //     arr2.push(arr3);
    //     // console.log(arr3);
    // }
    for(let i=0;i<n;i+=3){
        let arr3=[];
        let k=0;
        let l=n;
        if(l>=3){
            for(let j=i;j<(i+3);j++){
                arr3[k++]=arr[j];
            }
        }
        else{
            for(let j=i;j<(i+l);j++){
                arr3[k++]=arr[j];
            }
        }
        
        arr2.push(arr3);
        l=l-3;
        console.log(l)
    }
    console.log(arr2)
    Featured(arr2[currentvalue-1])
}

function prev() {
    // console.log(currentvalue)
    if (currentvalue > 1) {
        for (i of num) {
            i.classList.remove('activepage');
        }
        currentvalue--;
        num[currentvalue-1].classList.add("activepage");
    }

    console.log(currentvalue);
    activepage(currentvalue);
}


function next() {
    let paginationlength = document.querySelectorAll('.pagination-number .number').length;
    if(currentvalue<paginationlength){
        for (i of num) {
            i.classList.remove('activepage')
        }
        currentvalue++;
        console.log(num[currentvalue-1])
        num[currentvalue-1].classList.add("activepage");
    }
    // console.log(event.target.textContent)
    // console.log(currentvalue);
    activepage(currentvalue)
    
    
}

async function main(){
    await showpage(1);
    pagination(n);
}
main();