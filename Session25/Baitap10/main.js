let products= [["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]]
let cart=[]
while (true) {
    menu();
    let choice = Number(prompt("Nhập lựa chọn của bạn: "))
    if (choice === 4){
        alert("Thoát chuong trình")
        break;
    }
    switch (choice) {
        case 1:
            displayProducts(products);
            break;
        case 2:
            buyProducts();
            break;
        case 3:
            bill();
            break;
    }
}
function menu() {
    alert("=======MENU=======\n"
    +"1. Xem danh sách sản phẩm trong cửa hàng\n"
    +"2. Chọn san phẩm\n"
    +"3. Tổng tiền và hóa đơn\n"
    +"4. Thoát\n")
}
function displayProducts(arr) {
    let productStr = "Danh sách sản phẩm\n"
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 3; j++) {
            productStr += arr[i][j] + " ";
        }
        productStr += "\n";
    }
    alert(productStr);
}
function buyProducts() {
    displayProducts(products);
    let nameOfProducts = prompt("Nhập tên sản phẩm muốn mua")
    nameOfProducts = nameOfProducts.toLowerCase();
    //Tim SP
    let find = false;
    for (let i = 0; i < 4; i++) {
        if (nameOfProducts === products[i][0]){
            find = true;
            if (products[i][1] === 0){
                alert("Sản phẩm đã hết")
                break;
            } else {
                let quantity = Number(prompt("Nhập số lượng sản phẩm: "))
                if (quantity > products[i][1]){
                    alert("Số lượng không đủ")
                    break;
                } else {
                    let addToCard = [];
                    addToCard.push(products[i][0]);//Ten sp
                    addToCard.push(quantity);//Lay so luong
                    addToCard.push(products[i][2]);//Gia
                    products[i][1] -= quantity;//Cap nhat lai SL SP

                    cart.push(addToCard);
                }
            }
            break;
        }
    }
    if (!find) {
        alert("Sản phẩm không có trong cửa hàng")
    }
}
function bill() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += (cart[i][1] * cart[i][2]);
    }
    displayProducts(cart);
    alert(`Tổng tiền của bạn: ${total}`);
}