//single page website
//bootstrap styled table representing your choice in data
//bootstrap styled form that allows user to:
//add new row to table when clicking on submit button

let id = 0;
//add event listener to the add button
document.getElementById("add").addEventListener("click", () => {
    let info = document.getElementById('info').value;
    let info2 = document.getElementById('info2').value;
    let errorMessage = document.getElementById('error-message');

    if (info === '' || info2 === '') {
        errorMessage.style.color = 'red';
        errorMessage.innerHTML = 'Invaild input';

    }
    else {
        errorMessage.innerHTML = '';
        let table = document.getElementById("list");
        let row = table.insertRow(1);
        row.setAttribute("id", `item-${id}`);
        row.insertCell(0).innerHTML = document.getElementById("info").value;
        row.insertCell(1).innerHTML = document.getElementById("info2").value;
        document.getElementById('info').value = "";
        document.getElementById('info2').value = "";
    }


});

