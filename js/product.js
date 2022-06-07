let products = [
    {
        name: 'Chị Sáu Đấm Bốc',
        image1: './images/vi-1.png',
        image2: './images/vi-2.png',
        old_price: '1.000.000VND',
        curr_price: '900.000VND'
    }, {
        name: 'Chị Sáu Đấm Bốc',
        image1: './images/vi-1.png',
        image2: './images/vi-2.png',
        old_price: '1.000.000VND',
        curr_price: '900.000VND'
    }, {
        name: 'Chị Sáu Đấm Bốc',
        image1: './images/vi-1.png',
        image2: './images/vi-2.png',
        old_price: '1.000.000VND',
        curr_price: '900.000VND'
    },
]

let product_list = document.querySelector('#products');


renderProducts = (products) => {
    products.forEach(e =>{
        let prod = `
        <div class="col-4 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                            </div>  
                                <div class="product-card-info">
                                    <div class="product-btn">
                                        <button class="btn-flat btn-hover btn-shop-now">
                                        Mua ngay
                                        </button>
                                        <button class="btn-flat btn-hover btn-cart-add">
                                            <i class='bx bx-cart-add'></i>
                                        </button>
                                        <button class="btn-flat btn-hover btn-cart-add">
                                            <i class='bx bx-heart' ></i>
                                        </button>
                                    </div>
                                    <div class="product-card-name">
                                    ${e.name}
                                    </div>
                                    <div class="product-card-price">
                                        <span><del>${e.old_price}</del></span> <br>
                                        <span class="curr-price">${e.curr_price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
        `

        product_list.insertAdjacentHTML("beforeend" , prod);
    });
}

renderProducts(products);
renderProducts(products);

let  filter_col = document.querySelector('#filter-col');

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'));


document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'));
