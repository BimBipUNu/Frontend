let radius = Number(prompt("Nhập bán kính của hình cầu:"))
document.writeln("Thể tích hình cầu: " + ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2) + "<br>")
document.writeln("Diện tích bề mặt: " + (4 * Math.PI * Math.pow(radius, 2)).toFixed(2) + "<br>")
document.writeln("Chu vi lớn nhất: " + (2 * Math.PI * radius).toFixed(2) + "<br>")
