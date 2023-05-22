async function Comment()
{
    let response= await fetch('./Assets/Json/Feedback.json');
    let data= await response.json();
    let owl=document.getElementById('comment');
    let arr=data.Feedback;
    let html=`<div id="owl-carousel-5" class="owl-carousel owl-theme">`;
    arr.forEach(element => {
        html+=`<div class="Blog-1">
        <div class="quote">
            <i class="fa-solid fa-quote-left"></i>
        </div>
        <div class="items-carousel">
            <p class="carousel-txt">
                ${element.comment}
            <div class="Blog-span"><span>${element.text}</span></div>
            </p>
        </div>
    </div>`
    });
    html+=`</div>`;
    owl.innerHTML=html;

    // ############# Feedback ##################

    $('#owl-carousel-5').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
            },
            1000: {
                items: 3
            }
        }
    });
}

Comment();