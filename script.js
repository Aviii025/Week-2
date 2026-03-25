function addItem() {
    let input = document.getElementById("newItem");
    let value = input.value.trim();

    if (value === "") return;

    let li = document.createElement("li");
    li.innerHTML = value + ' <button onclick="removeItem(this)">Delete</button>';

    document.getElementById("hobbyList").appendChild(li);

    input.value = "";
}

function removeItem(button) {
    button.parentElement.remove();
}

function showMessage(event) {
    event.preventDefault();
    alert("Form submitted successfully");
}

function updateTime() {
    let now = new Date();

    let options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    let date = now.toLocaleDateString('en-IN', options);
    let time = now.toLocaleTimeString();

    document.getElementById("dateTime").innerText = date + ", " + time;
}

setInterval(updateTime, 1000);
updateTime();