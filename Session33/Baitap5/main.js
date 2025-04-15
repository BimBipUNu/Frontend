const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    },
];
display(products);
function display(arr) {
    let list = document.getElementById('list');
    list.innerHTML = '';
    let html = ``
    arr.forEach(product => {
        html += `<div class="card" style="width: 18rem;">
        <img src='${product.image}' class="card-img-top" alt='${product.name}'>
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-subtitle">${product.price} VND</p>
            <a href="#" class="btn btn-primary">Buy</a>
        </div>
    </div>`
    })
    list.innerHTML = html;
}
search();
function search() {
    let search = document.getElementById('search');
    search.addEventListener('click', e => {
        let keyword = document.getElementById('keyword').value;
        let newArray = products.filter(item => item.name.toLowerCase().includes(keyword));
        display(newArray);
    })
}