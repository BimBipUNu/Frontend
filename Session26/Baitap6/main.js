function changeStr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("-")
        let yyyy = arr[i][0];
        let mm = arr[i][1];
        let dd = arr[i][2];
        arr[i] = `${dd}/${mm}/${yyyy}`;
    }
}
let strArr = ["2025-03-10", "2024-12-25", "2023-07-01"];
changeStr(strArr);
for (let i = 0; i < strArr.length; i++) {
    alert(strArr[i]);
}