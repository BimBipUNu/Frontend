
let hour = Number(prompt("Nhập giờ (0-23): "))
let minute = Number(prompt("Nhập phút (0-59): "))
let second = Number(prompt("Nhập giây (0-59): "))


if
(
    hour < 0 || hour > 23 ||
    minute < 0 || minute > 59 ||
    second < 0 || second > 59
)
{
    document.writeln("Dữ liệu không hợp lệ! Hãy nhập đúng phạm vi.")
} else
{
    let period = hour >= 12 ? "PM" : "AM"

    hour = hour % 12
    hour = hour === 0 ? 12 : hour

    document.writeln(
        "Thời gian: " +
        hour.toString().padStart(2,"0") + ":" +
        minute.toString().padStart(2,"0") + ":" +
        second.toString().padStart(2,"0") + " " +
        period
    )
}
