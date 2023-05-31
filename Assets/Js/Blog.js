let value3 = "Latest Post";

function showbutton2(e) {
    let element = e.target;
    value3 = e.target.textContent;
    let p = document.getElementsByClassName('actived2')[0];
    p.classList.remove('actived2');
    element.classList.add('actived2');
    Blog();
}

async function Blog() {
    let response = await fetch('./Assets/Json/Blog.json');
    let data = await response.json();
    let owl = document.getElementsByClassName('Blog1')[0];
    let arr = data[value3];
    let html = `<div id="owl-carousel-6" class="owl-carousel owl-theme">`;

    arr.forEach(element => {
        html += `<div>
    <div class="card">
        <div class="card-image">
            <img src="${element.img}"
                class="card-img-top" alt="...">
            <div class="blog-image-txt">
                <i class="fa-solid fa-circle-user"></i>${element.user}
                <i class="fa-solid fa-message"></i>${element.message}
                <i class="fa-solid fa-eye"></i>${element.views}
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.desc}</p>
            <p class="card-text"><small class="text-muted">${element.updated}</small></p>
        </div>
    </div>
</div>`

    });

    html += `</div>`;
    owl.innerHTML = html;


    // ##################### Blog Section ############################
    $('#owl-carousel-6').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
}




Blog();