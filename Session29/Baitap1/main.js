let contactArr =[]
while (true){
    menu();
    let choice = Number(prompt("Nhập chức năng"));
    if(choice === 6){
        alert("Thoát chương trính")
        break;
    }
    switch(choice){
        case 1:
            addNewContact();
            break;
        case 2:
            displayContact();
            break;
        case 3:
            findContact();
            break;
        case 4:
            setContact();
            break;
        case 5:
            deleteContact();
            break;
        default:
            alert("Chức năng không hợp lệ")
    }
}
function menu(){
    alert("\n=====Menu=====\n" +
        "1. Thêm đối tượng Contact vào danh sách liên hệ.\n" +
        "2. Hiển thị danh sách danh bạ.\n" +
        "3. Tìm kiếm thông tin Contact theo số điện thoại.\n" +
        "4. Cập nhật thông tin Contact(name, email, phone) theo id.\n" +
        "5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.\n" +
        "6. Thoát.")
}
function addNewContact(){
    let id = prompt("Nhập id:")
    let name = prompt("Nhập tên:")
    let email = prompt("Nhập email:")
    let phone = prompt("Nhập phone:")
    let newContact = {
        id,
        name,
        email,
        phone,
    }
    contactArr = [...contactArr,newContact];
}
function displayContact(){
    if (contactArr.length === 0) {
        alert("Danh bạ trống!");
        return;
    }
    let display = contactArr.reduce((acc, el) => {
        for (let key in el) {
            acc += `${el[key]}`;
        }
        return acc + "\n";
    },"")
    alert(display)
}
function findContact(){
    let phone = prompt("Nhập số điện thoại Contact muốn tìm")
    let findByPhone = contactArr.findIndex((item) => item.phone === phone)
    if (findByPhone === -1){
        alert("Không tìm thấy SĐT")
    } else {
        alert(`ID: ${contactArr[findByPhone].id}; Name: ${contactArr[findByPhone].name}; Email: ${contactArr[findByPhone].email}; Phone: ${contactArr[findByPhone].phone}`);
    }
}
function findId(title) {
    let id = prompt(`Nhập ID để ${title}`);
    return contactArr.findIndex(item => item.id === id);
}
function setContact(){
    let checkFind= findId("cập nhật")
    if (checkFind === -1){
        alert("Không tìm thấy ID")
    } else {
        let name = prompt("Nhập tên:")
        let email = prompt("Nhập email:")
        let phone = prompt("Nhập phone:")
        contactArr[checkFind].name = name;
        contactArr[checkFind].email = email;
        contactArr[checkFind].phone = phone;

        alert("Cập nhật thành công!");
    }
}
function deleteContact(){
    let checkFind= findId("Xóa")
    if (checkFind === -1){
        alert("Không tìm thấy ID")
    } else {
        let confirm = window.confirm("Xác nhận xóa");
        if (confirm){
            contactArr = contactArr.filter((item) => item.id !== contactArr[checkFind].id);
        }
        alert("Xóa thành công");
    }
}