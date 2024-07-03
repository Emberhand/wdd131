const input = document.querySelector('#favchamp');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const li = document.createElement('li');
const deleteButton = document.createElement('button')

li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        alert('Please input a chapter!');
        input.focus();
    } else {
        list.append(li);
        input.value = '';
        input.focus();
    }
})

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
})