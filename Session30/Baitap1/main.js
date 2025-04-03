let products=[
    {
        id:1,
        name:"mèn mén",
        price:20000,
        quantity:20,
        category:"món ăn dân tộc Mông",
    },
    {
        id:2,
        name:"mứt",
        price:80000,
        quantity:21,
        category:"món ăn dân tộc Kinh",
    },
    {
        id:3,
        name:"cơm lam",
        price:40000,
        quantity:15,
        category:"món ăn dân tộc Mông",
    },
    {
        id:4,
        name:"bánh đậu xanh",
        price:60000,
        quantity:30,
        category:"món ăn dân tộc Kinh",
    },
]
let cart =[];
while(true){
    console.log("===== MENU =====");
    console.log("1. Hiển thị các sản phẩm theo tên danh mục.");
    console.log("2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.");
    console.log("3. Sắp xếp các sản phẩm trong cửa hàng theo giá.");
    console.log("4. Tính số tiền thanh toán trong giỏ hàng.");
    console.log("5. Thoát.");
    let choice = Number(prompt("Nhập chức năng"))
    if(choice === 5){
        alert("Thoát chương trình");
        break;
    }
    switch(choice){
        case 1:
            displayProducts(products);
            break;
        case 2:
            buyProducts();
            break;
        case 3:
            sortByPrice();
            break;
        case 4:
            payBill();
            break;
        default:
            alert("Chức năng không hợp lệ")
    }
}
function displayProducts(arr){
    let display = arr.map(item=>{
        return `ID: ${item.id}
Name: ${item.name}
Price: ${item.price} VND
Quantity: ${item.quantity}
Category: ${item.category}`;
    }).join("\n")
    console.log("Danh sách sản phẩm")
    console.log(display);
}
function buyProducts(){
    let inputId = Number(prompt("Nhập ID SP"));
    let findIndexId = products.findIndex(item=> item.id === inputId);
    if(findIndexId === -1){
        console.log("Không tìm thấy ID")
    } else {
        if(products[findIndexId].quantity === 0){
            console.log("Sản phẩm đã hết hàng")
        }
        let quantity = Number(prompt("Nhập số lượng SP muốn mua"))
        while(products[findIndexId].quantity < quantity || quantity === 0) {
            console.log("Số lượng SP cần mua không hợp lệ, vui lòng nhập lại!")
            quantity = Number(prompt("Nhập số lượng SP muốn mua"))
        }
        let addToCart = {
            id: products[findIndexId].id,
            name: products[findIndexId].name,
            price: products[findIndexId].price,
            quantity,
            category: products[findIndexId].category,
        }
        cart = [...cart, addToCart];
        console.log("Thêm thành công")
        products[findIndexId].quantity -= quantity; // Cập nhật lại SL
    }
}
function payBill(){
    displayProducts(cart);
    let bill = cart.reduce((acc, cur) => {acc += (cur.price * cur.quantity); return acc},0);
    console.log(`Tổng số tiền cần thanh toán: ${bill}`);
}
function sortByPrice(){
    console.log("a. Tăng dần");
    console.log("b. Giảm dần");
    let productsAfterSort;
    let flag = false;
    do {
        let choiceSort = prompt("Nhập thứ tự sắp xếp")
        switch (choiceSort) {
            case `a`:
                productsAfterSort = products.sort((a, b) => a.price - b.price);
                flag = true;
                break;
            case `b`:
                productsAfterSort = products.sort((a, b) => b.price - a.price);
                flag = true;
                break;
            default:
                console.log("Thứ tự không hợp lệ");
        }
    } while (!flag);
    console.log("Sắp xếp thành công")
}