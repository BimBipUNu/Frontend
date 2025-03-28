function checkMail(mail, mailArr) {
    let valid = false;
    mailArr.forEach(element => {element === mailArr ? valid = true : valid});
    if (valid) {
        return "mail da ton tai";
    } else {
        //Kiem tra @
        if (!mail.includes("@")) {
            return "mail Khong hop le (khong co @)";
        } else if (!(mail.endsWith(".com") || mail.endsWith(".vn"))) {
            return "mail khong .com / .vn"
        }
        mailArr.push(mail);
        return "Them thanh cong";
    }
}
let users = ["mail@1gmail.com", "mail@2gmail.com", "mail@3gmail.vn"];
let user = prompt("Nhap mail can dang ky:")
console.log(`mang truoc khi them: ${users}`);
console.log(checkMail(user, users));
console.log(`mang sau khi them: ${users}`);