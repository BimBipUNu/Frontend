const li = document.querySelectorAll('li');
li.forEach(li => {
    li.addEventListener('click', () => {
        if (li.getAttribute('class') === 'checked') {
            li.setAttribute('class', 'none');
        }else {
            li.setAttribute('class', 'checked');
        }
    })
})