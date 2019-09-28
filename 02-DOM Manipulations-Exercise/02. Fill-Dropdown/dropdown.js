function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let dropDownMenu = document.getElementById('menu');

    if (text === '' || value === '') {
        alert('Please fill out input options!');
    } else {
        let newOptionElement = document.createElement('option');
        newOptionElement.textContent = text;
        newOptionElement.value = value;
        dropDownMenu.appendChild(newOptionElement);
        
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }

}