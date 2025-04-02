const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];
function sumPrice(objShop) {
    let sum =0;
    for ( let item of objShop ) {
        sum += (item.price * item.quantity);
    }
    return sum;
}

console.log("Tổng giá trị đơn hàng: " + sumPrice(cart))