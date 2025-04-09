let employee = [
    {
        name: "A",
        position: "AA",
    },
    {
        name: "B",
        position: "BB",
    },
    {
        name: "C",
        position: "CC",
    },
    {
        name: "D",
        position: "DD",
    },
    {
        name: "E",
        position: "EE",
    }
]

//Số trang
const intemsPerPage = 3;
const totalPages = Math.ceil(employee.length/intemsPerPage);
for (let i = 2; i <= totalPages; i++) {
    const listPage = document.getElementById('listPage');
    let newPage = document.createElement("span")
    newPage.innerText = i;
    listPage.appendChild(newPage)
}

//Xử lý logic nút Prev và Next

//Render Data
const listPage = document.getElementById('listPage');
listPage.addEventListener('click', (e) => {
    if(e.target.tagName === 'SPAN') {
        const tableBody = document.querySelector("table tbody");
        tableBody.innerHTML = ""; // Xóa dữ liệu cũ trước khi render mới

        let index = Number((e.target.innerText - 1)*intemsPerPage) +1;
        for (let i = (e.target.innerText - 1)*intemsPerPage; i < e.target.innerText * intemsPerPage && i < employee.length; i++) {
            let tr = tableBody.insertRow();
            let stt = tr.insertCell();
            stt.innerText = index++;

            let name = tr.insertCell();
            name.innerText = employee[i].name;

            let position = tr.insertCell();
            position.innerText = employee[i].position;
        }
    }
})