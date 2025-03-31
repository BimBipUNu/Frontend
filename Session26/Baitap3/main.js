function checkEmail(email) {
    let condition1 = email.includes('@');
    let condition2 = email.includes(' ');
    if (condition1 && (!condition2)) {
        return true;
    } else {
        return false;
    }
}
let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", " @out.com"]
if (arr.length === 0) {
    console.log("Khong co phan tu")
} else {
    let arrAfter = arr.filter(checkEmail);
    console.log(arrAfter.toString());
}