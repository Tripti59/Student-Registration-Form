var row = 1;
function displayDetails() {
    console.log("Button has been clicked");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobNumber").value;
    var sem = document.getElementById("semester").value;

    if (!name || !email || !mobile || !sem) {
        alert("Please fill all boxes");
        return;
    }

    var display = document.getElementById("display"); var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = mobile;
    cell4.innerHTML = sem;
    row++;
}
