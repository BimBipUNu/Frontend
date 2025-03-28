function isPalindrome(str) {
    let rvStr = str.split("").reverse().join("");
    return rvStr === str;
}
let string = prompt("Nhap chuoi: ")
console.log(isPalindrome(string) ? `${string} la chuoi doi xuong` : `${string} khong la chuoi doi xung`);