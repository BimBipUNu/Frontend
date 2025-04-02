let categories = [
    {
        category: "Đồ uống",
        foods: [
            {
                name: "Cà phê sữa",
                price: 25000,
                description: "Cà phê pha với sữa đặc, thơm ngon.",
            },
            {
                name: "Trà sữa trân châu",
                price: 30000,
                description: "Trà sữa truyền thống với trân châu đen.",
            },
        ],
    },
    {
        category: "Món chính",
        foods: [
            {
                name: "Cơm tấm",
                price: 45000,
                description: "Cơm tấm sườn bì chả, ăn kèm nước mắm.",
            },
            {
                name: "Bún bò Huế",
                price: 50000,
                description: "Bún bò Huế cay nồng, đậm đà hương vị miền Trung.",
            },
        ],
    },
    {
        category: "Tráng miệng",
        foods: [
            {
                name: "Bánh flan",
                price: 20000,
                description: "Bánh flan mềm mịn, ăn kèm caramel.",
            },
            {
                name: "Chè thập cẩm",
                price: 25000,
                description:
                    "Chè gồm đậu đỏ, bột lọc, sương sáo và nước cốt dừa.",
            },
        ],
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

function displayFoods(categories) {
    alert("\nDanh sách món ăn:");
    categories.forEach((category) => {
        alert(`\nCategory: ${category.category}`);
        category.foods.forEach((food) => {
            alert(`\n   ${food.name} - ${food.price}`
            +`\n   ${food.description}`
            +"\n   --------------------------------");
        });
    });
}

function inputFoods(categories) {
    let nameCategory;
    do {
        nameCategory = prompt("Nhập vào danh mục món ăn: ");
        if (!nameCategory) alert("Danh mục không được để trống!");
    } while (!nameCategory);

    let newArray = categories.find(
        (value) => value.category.toLowerCase() === nameCategory.toLowerCase()
    );

    if (!newArray) {
        alert("Danh mục món ăn không tồn tại!");
        return;
    }

    let n;
    do {
        n = Number(prompt("Nhập vào số lượng món ăn:"));
        if (isNaN(n) || n <= 0 || !n)
            alert("Số lượng nhập vào không hợp lệ!");
    } while (isNaN(n) || n <= 0 || !n);

    while (n > 0) {
        let name;
        do {
            name = prompt("Nhập vào tên món ăn mới: ");
            if (!name) alert("Tên món ăn không được để trống!");
        } while (!name);

        let price;
        do {
            price = Number(prompt("Nhập vào giá món ăn:"));
            if (isNaN(price) || price <= 0 || !price)
                alert("Giá nhập vào không hợp lệ!");
        } while (isNaN(price) || price <= 0 || !price);

        let description;
        do {
            description = prompt("Nhập vào mô tả món ăn mới: ");
            if (!description) alert("Mô tả món ăn không được để trống!");
        } while (!description);

        newArray.foods.push({ name, price, description });
        n--;
    }
    alert("Thêm món ăn thành công!");
}

function deleteFood(categories) {
    let nameCategory;
    do {
        nameCategory = prompt("Nhập vào danh mục món ăn: ");
        if (!nameCategory) alert("Danh mục không được để trống!");
    } while (!nameCategory);

    let newArray = categories.find(
        (value) => value.category.toLowerCase() === nameCategory.toLowerCase()
    );

    if (!newArray) {
        alert("Danh mục món ăn không tồn tại!");
        return;
    }

    let name;
    do {
        name = prompt("Nhập vào tên món ăn: ");
        if (!name) alert("Tên món ăn không được để trống!");
    } while (!name);

    let delIndex = newArray.foods.findIndex(
        (value) => value.name.toLowerCase() === name.toLowerCase()
    );
    if (delIndex === -1) {
        alert("Không tìm thấy món ăn trong danh mục này!");
        return;
    }
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmDelete) {
        newArray.foods.splice(delIndex, 1);
        alert("Xóa sản phẩm thành công!");
    } else {
        alert("Hủy xóa sản phẩm.");
    }
}

function updateFood(categories) {
    let nameCategory;
    do {
        nameCategory = prompt("Nhập vào danh mục món ăn cần cập nhật: ");
        if (!nameCategory) alert("Danh mục không được để trống!");
    } while (!nameCategory);

    let category = categories.find(
        (value) => value.category.toLowerCase() === nameCategory.toLowerCase()
    );

    if (!category) {
        alert(`Danh mục không tồn tại!`);
        return;
    }

    let name;
    do {
        name = prompt(`Nhập tên món ăn:`);
        if (!name) alert("Tên món ăn không được để trống!");
    } while (!name);

    let food = category.foods.find(
        (food) => food.name.toLowerCase() === name.toLowerCase()
    );

    if (!food) {
        alert(`Không tìm thấy món ăn!`);
        return;
    }

    alert(`Món ăn hiện tại: ${food.name} - ${food.price}`);
    alert(`Mô tả: ${food.description}`);

    let newPrice;
    do {
        newPrice = Number(prompt("Nhập giá mới: "));
        if (isNaN(newPrice) || newPrice <= 0) alert("Giá không hợp lệ!");
    } while (isNaN(newPrice) || newPrice <= 0);

    let newDescription;
    do {
        newDescription = prompt("Nhập mô tả mới: ");
        if (!newDescription) alert("Mô tả không được để trống!");
    } while (!newDescription);

    food.price = newPrice;
    food.description = newDescription;

    alert(`Cập nhật thành công!`);
}

function searchFood(categories) {
    let name;
    do {
        name = prompt("Nhập tên món ăn cần tìm: ");
        if (!name) alert("Tên món ăn không được để trống!");
    } while (!name);

    let found = false;
    categories.forEach((category) => {
        category.foods.forEach((food) => {
            if (food.name.toLowerCase().includes(name.toLowerCase())) {
                alert(`\nName: ${food.name}`
                +`\nCategory: ${category.category}`
                +`\nPrice: ${food.price}`
                +`\nDescription: ${food.description}`
                +"\n------------------------------");
                found = true;
            }
        });
    });

    if (!found) {
        alert(`Không tìm thấy món ăn!`);
    }
}

function menuChoice() {
    while (true) {
        alert("\n1. Thêm món ăn."
        +"\n2. Xóa món ăn ."
        +"\n3. Cập nhật thông tin theo tên."
        +"\n4. Hiển thị toàn bộ menu."
        +"\n5. Tìm kiếm món ăn theo tên."
        +"\n6. Thoát.");

        let choice = inputChoice();

        if (choice === 6) {
            alert("Thoát chương trình!");
            break;
        }

        switch (choice) {
            case 1:
                inputFoods(categories);
                break;

            case 2:
                deleteFood(categories);
                break;

            case 3:
                updateFood(categories);
                break;

            case 4:
                displayFoods(categories);
                break;

            case 5:
                searchFood(categories);
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

menuChoice();
