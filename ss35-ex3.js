const products = [
    {
        id: 1,
        name: "Laptop Dell XPS 15",
        price: 35990000,
        image: "https://ngocnguyen.vn/cdn/images/202308/goods_img/dell-xps-15-9510-core-i7-11800h-rtx-3050ti-156-inch-fhd-G15129-1691456870705.png",
        description: "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB."
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: 32990000,
        image: "https://techworldmobile.vn/media/product/3444_iphone_15_pro_xanh.jpg",
        description: "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro."
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        price: 32990000,
        image: "https://techworldmobile.vn/media/product/3440_s24_ultra_titanium_mau_green.jpg",
        description: "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom."
    },
    {
        id: 4,
        name: "Tai nghe Sony WH-1000XM5",
        price: 7990000,
        image: "https://shopdunk.com/images/thumbs/0018913_den_550.jpeg",
        description: "Tai nghe chống ồn tốt nhất với chất lượng pin lên đến 30 giờ."
    },
    {
        id: 5,
        name: "Apple Watch Series 9",
        price: 11990000,
        image: "https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694676993777_thumb_apple_watch_series_9_didongviet.jpg",
        description: "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao."
    },
    {
        id: 6,
        name: "Loa JBL Charge 5",
        price: 3990000,
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/o/loa-bluetooth-jbl-charge-5-ksp.png",
        description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ."
    }
];
displayProducts(products);
function displayProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h5>${product.name}</h5>
                    <p>${product.description}</p>
                    <p><strong>${product.price.toLocaleString()} VND</strong></p>
                    <button class="btn btn-primary">Mua ngay</button>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}
document.getElementById("searchInput").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
});