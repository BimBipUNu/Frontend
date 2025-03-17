let date1 = new Date(prompt("Nhập vào ngày thứ nhất ( định dạng YYYY-MM-DD): "))
let date2 = new Date(prompt("Nhập vào ngày thứ hai ( định dạng YYYY-MM-DD): "))
let difference = Math.abs(date2 - date1);//Đơn vị mili giây
difference = difference / (1000 *60 *60 *24) // Đỏi về ngày
document.writeln("Độ chênh lệch: " + difference + " Ngày")
