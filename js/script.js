function addItem(event) {
    event.preventDefault();

    let itemText = document.getElementById("itemInput").value;

    let li = document.createElement("li");
    li.innerText = itemText;

    document.getElementById("list").appendChild(li);

    document.getElementById("itemInput").value = "";
}