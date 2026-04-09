allItem = []
let editIndex;
let delIndex;
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
// let editInput = document.getElementById('editInput')
const editItemInput = (i) => {
    console.log(i);
    editIndex = i
    editInput.value = allItem[i]
}
const editItem = () => {
    // alert('edit')
    const editInput = document.getElementById('editInput').value
    if (allItem.includes(editInput)) {
        alert('your item already added')
    } else {
        allItem.splice(editIndex, 1, editInput)
        showItem()
    }
}
const deleteItem = (i) => {
    console.log(i);
    delIndex = i
}

const delItem = () => {
    allItem.splice(delIndex, 1)
    showItem()
}
function showItem() {
    showItems.innerHTML = ''
    for (i = 0; i < allItem.length; i++){
        showItems.innerHTML += `<p class="d-flex gap-3">${i + 1}.${allItem[i]} <button class="btn btn-primary" onclick="editItemInput(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="deleteItem(${i})">Delete</button></p>`;
    }
}
