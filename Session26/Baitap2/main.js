let strArr = ["apple", "banana", "cat", "elephant", "dog"]
let after = strArr.filter(item => item.length > 5)
if (after.length > 0) {
    console.log(`${after}`)
} else {
    console.log("Khong co phan tu co do dai lon hon 5")
}