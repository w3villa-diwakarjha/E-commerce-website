// ############################## topcategories ########################
let value1="topcategories";

function showbutton(e){
    let element=e.target;
    value1=e.target.value;
    let p=document.getElementsByClassName('actived')[0];
    p.classList.remove('actived');
    element.classList.add('actived');
    Buy();
}

async function Buy() {
    let response = await fetch('./Assets/Json/Buy.json');
    let data = await response.json();
    let arr = data[value1];
    let owl = document.getElementById('main-carousel')
    let html = `<div id="owl-carousel-1" class="owl-carousel owl-theme">`;
    arr.forEach(element => {
        html += `<div class="demand-items">
        <div class="carousel-image">
            <img src=${element.img}
                alt="">
        </div>
        <div class="fashion">${element.text}</div>
    </div>
    `
    });
    html+=`</div>`;
    owl.innerHTML=html;

    // ###################### owlCarousel ############################

    // ######################## Demand-Section ######################
    $('#owl-carousel-1').owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
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

Buy();