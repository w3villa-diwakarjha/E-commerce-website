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
                        html += `<div id=${element.id} class="wishlist-product-main">
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
                                <div id=${element.id} class="remove" onclick="removeItems(this)"><i class="fa-solid fa-x"></i></div>
                                <div class="wishlist-item">
                                    <input type="number" value="1">
                                </div>
                                <div class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i></div>
                            </div>
                        </div>
                    </div>
                    <hr>`
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

    function removeItems(e)
    {
        // console.log(e.id)
        let k=e.id;
        console.log(k)
        localStorage.removeItem('username');
    }
    getdata();
}

