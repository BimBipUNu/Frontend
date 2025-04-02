let products = [
    {
        id: 1,
        name: "Máy tính",
        price: 10000000,
        category: "Điện tử",
        quantity: 100,
    },
    {
        id: 2,
        name: "LapTop",
        price: 50000000,
        category: "Điện tử",
        quantity: 150,
    },
    {
        id: 3,
        name: "Xe hơi",
        price: 100000000,
        category: "Xe cộ",
        quantity: 20,
    },
];

function inputChoice() {
    let choice;
    do {
        choice = Number(prompt("Nhập vào lựa chọn:"));
        if (isNaN(choice) || choice <= 0 || !choice)
            alert("Giá trị không hợp lệ");
    } while (isNaN(choice) || choice <= 0 || !choice);
    return choice;
}

function displayProducts(products) {
    alert("Danh sách sản phẩm");
    return products.forEach((value) => {
        alert(`\n   ID: ${value.id}\n`
        +`   Name: ${value.name}\n`
        +`   Price: ${value.price}\n`
        +`   Category: ${value.category}\n`
        +`   Quantity: ${value.quantity}\n`)
    });
}

function inputProduct(products) {
    let n;
    do {
        n = Number(prompt("Nhập vào số lượng sản phẩm:"));
        if (isNaN(n) || n <= 0 || !n)
            alert("Số lượng nhập vào không hợp lệ!");
    } while (isNaN(n) || n <= 0 || !n);

    while (n > 0) {
        let id =
            products.length > 0
                ? Math.max(...products.map((c) => c.id)) + 1
                : 1;

        let name;
        do {
            name = prompt("Nhập vào tên sản phẩm mới: ");
            if (!name) alert("Tên sản phẩm không được để trống!");
        } while (!name);

        let price;
        do {
            price = Number(prompt("Nhập vào giá sản phẩm:"));
            if (isNaN(price) || price <= 0 || !price)
                alert("Giá nhập vào không hợp lệ!");
        } while (isNaN(price) || price <= 0 || !price);

        let category;
        do {
            category = prompt("Nhập vào tên danh mục mới: ");
            if (!category) alert("Tên danh mục không được để trống!");
        } while (!category);

        let quantity;
        do {
            quantity = Number(prompt("Nhập vào số lượng sản phẩm:"));
            if (isNaN(quantity) || quantity <= 0 || !quantity)
                alert("Số lượng nhập vào không hợp lệ!");
        } while (isNaN(quantity) || quantity <= 0 || !quantity);

        products.push({ id, name, price, category, quantity });
        n--;
    }
    alert("Thêm sản phẩm thành công!");
}

function displayProductsById(products) {
    let index;
    do {
        index = Number(prompt("Nhập vào id sản phẩm:"));
        if (isNaN(index) || index <= 0 || !index)
            alert("ID nhập vào không hợp lệ!");
    } while (isNaN(index) || index <= 0 || !index);

    let newArray = products.find((value) => value.id === index);

    if (newArray) {
        alert("Sản phẩm bạn tìm kiếm:");
        displayProducts([newArray]);
    } else {
        alert("Không tìm thấy sản phẩm có ID này!");
        return;
    }
}

function updateProduct(products) {
    let index;
    do {
        index = Number(prompt("Nhập vào id sản phẩm:"));
        if (isNaN(index) || index <= 0 || !index)
            alert("ID nhập vào không hợp lệ!");
    } while (isNaN(index) || index <= 0 || !index);

    let update = products.find((value) => value.id === index);

    if (!update) {
        alert("Không tìm thấy sản phẩm có ID này!");
        return;
    }

    let newName;
    do {
        newName = prompt("Nhập vào tên sản phẩm mới: ");
        if (!newName) alert("Tên sản phẩm không được để trống!");
    } while (!newName);

    let newPrice;
    do {
        newPrice = Number(prompt("Nhập vào giá sản phẩm:"));
        if (isNaN(newPrice) || newPrice <= 0 || !newPrice)
            alert("Giá nhập vào không hợp lệ!");
    } while (isNaN(newPrice) || newPrice <= 0 || !newPrice);

    let newCategory;
    do {
        newCategory = prompt("Nhập vào tên danh mục mới: ");
        if (!newCategory) alert("Tên danh mục không được để trống!");
    } while (!newCategory);

    let newQuantity;
    do {
        newQuantity = Number(prompt("Nhập vào số lượng sản phẩm:"));
        if (isNaN(newQuantity) || newQuantity <= 0 || !newQuantity)
            alert("Số lượng nhập vào không hợp lệ!");
    } while (isNaN(newQuantity) || newQuantity <= 0 || !newQuantity);

    update.name = newName;
    update.price = newPrice;
    update.category = newCategory;
    update.quantity = newQuantity;

    alert("Cập nhật sản phẩm thành công!");
}

function deleteProduct(products) {
    let index;
    do {
        index = Number(prompt("Nhập vào id sản phẩm:"));
        if (isNaN(index) || index <= 0 || !index)
            alert("ID nhập vào không hợp lệ!");
    } while (isNaN(index) || index <= 0 || !index);

    let del = products.findIndex((value) => value.id === index);
    if (del === -1) {
        alert("Không tìm thấy sản phẩm với ID này");
        return;
    }
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmDelete) {
        products.splice(del, 1);
        alert("Xóa sản phẩm thành công!");
    } else {
        alert("Hủy xóa sản phẩm.");
    }
}

function filterProductByPrice(products) {
    let minPrice;
    do {
        minPrice = Number(prompt("Nhập vào giá thấp nhất:"));
        if (isNaN(minPrice) || minPrice <= 0 || !minPrice)
            alert("Giá nhập vào không hợp lệ!");
    } while (isNaN(minPrice) || minPrice <= 0 || !minPrice);

    let maxPrice;
    do {
        maxPrice = Number(prompt("Nhập vào giá cao nhất:"));
        if (isNaN(maxPrice) || maxPrice <= 0 || !maxPrice)
            alert("Giá nhập vào không hợp lệ!");
    } while (isNaN(maxPrice) || maxPrice <= 0 || !maxPrice);

    filterArray = products.filter(
        (value) => value.price >= minPrice && value.price <= maxPrice
    );

    alert("Danh sách sản phẩm sau khi lọc:");
    displayProducts(filterArray);
}

function menuChoice() {
    while (true) {
        alert("\n1. Thêm sản phẩm.\n"
        +"2. Hiển thị danh sách.\n"
        +"3. Hiển thị sản phẩm theo id.\n"
        +"4. Cập nhật thông tin sản phẩm.\n"
        +"5. Xóa sản phẩm.\n"
        +"6. Lọc sản phẩm.\n"
        +"7. Thoát.");

        let choice = inputChoice();

        if (choice === 7) {
            alert("Thoát chương trình!");
            break;
        }

        switch (choice) {
            case 1:
                inputProduct(products);
                break;

            case 2:
                displayProducts(products);
                break;

            case 3:
                displayProductsById(products);
                break;

            case 4:
                updateProduct(products);
                break;

            case 5:
                deleteProduct(products);
                break;

            case 6:
                filterProductByPrice(products);
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

menuChoice();
