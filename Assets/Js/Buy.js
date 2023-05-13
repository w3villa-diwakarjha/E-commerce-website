// ############################## topcategories ########################

async function topcategories() {
    let response = await fetch('Json/Buy.json');
    let data = await response.json();
    console.log(data)
    let arr = data.topcategories;
    let owl = document.getElementById('main-carousel')
    let html = `<div id="owl-carousel-1" class="owl-carousel owl-theme">`;
    arr.forEach(element => {
        html += `<div class="demand-items">
        <div class="carousel-image">
            <img src="${element.img}"
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
topcategories();