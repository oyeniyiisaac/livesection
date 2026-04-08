allItem = []
const addItem = () => {
    const itemInput = document.getElementById('itemInput').value
    const alert = document.getElementById('alert')
    const alertItem = document.getElementById("alertItem");
    if (itemInput.trim() === '') {
        console.log('input cannot be empty');
        alert.style.display="block"
    } else if (allItem.includes(itemInput)) {
        // alert('already exist');
        alertItem.style.display="block"
        document.getElementById('itemInput').value = ''
    } else {
        alertItem.style.display = "none";
        alert.style.display = "none";
        allItem.push(itemInput)
        console.log(allItem);
        showItem()
        document.getElementById('itemInput').value = ''

    }
}
function showItem() {
    showItems.innerHTML = ''
    for (i = 0; i < allItem.length; i++){
        showItems.innerHTML += `<p>${i + 1}.${allItem[i]}</p>`
    }
}
