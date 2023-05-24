let value2 = "Featured";
// console.log(value2)

function showbutton1(e) {
    let element = e.target;
    value2 = e.target.textContent;
    console.log(value2)
    let p = document.getElementsByClassName('actived1')[0];
    p.classList.remove('actived1');
    element.classList.add('actived1');
    Featured_products();
}

async function Featured_products() {
    let response = await fetch('./Assets/Json/Featured_products.json');
    let data = await response.json();
    // console.log(data);
    let arr = data[value2];
    let owl = document.getElementById('main-carousel1');
    // console.log(owl)
    let html = `<div id="owl-carousel-2" class="owl-carousel owl-theme">`
    // console.log(arr)
    arr.forEach(element => {

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
                <div class="inc-dec-btn">
                    <i class="fa-solid fa-chevron-up"></i>
                    <i class="fa-solid fa-chevron-down"></i>
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
                        style="color:brown"></i>question</div>
            </div>
        </div>
    </div>`
    });
    html += `</div>`;
    html += `<div class="all-product main-btn"><button class="btn-blue all-product-btn">See All Product-></button></div>`
    owl.innerHTML = html;

    // ############################### Feature Section ########################

    $('#owl-carousel-2').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
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

Featured_products();
