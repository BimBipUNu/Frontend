let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
];
let arrCategory =[];
for (let i = 0; i < dish.length; i++) {
    arrCategory.push(dish[i].category);
}
arrCategory = [...new Set(arrCategory)];

let arrName =[];
for (let i = 0; i < dish.length; i++) {
    arrName.push(dish[i].name);
}
arrName = [...new Set(arrName)];

const select = document.getElementById('select');
const addCategories = () => {
    arrCategory.forEach((item) => {
        let newSelect = document.createElement('option');
        newSelect.setAttribute('value', item);
        newSelect.innerText = item;
        select.appendChild(newSelect);
    })
}
addCategories();
const fillter = () => {
    let data = select.value;
    console.log(data)
    select.innerHTML = '';
    dish = dish.filter(item => item.category === data);
    dish.forEach(item => {
        let newOption = document.createElement('option');
        newOption.setAttribute('value', item.name);
        newOption.innerText = item.name;
        select.appendChild(newOption);
    })
}