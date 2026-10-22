const userInput = document.getElementById("input");
const addButton = document.getElementById("add-button");
const itemList = document.getElementById("item-list");

const item = {
    text: "",
    inputField: document.createElement("input"),
    editButton: document.createElement("button"),
    removeButton: document.createElement("button"),
};

addButton.addEventListener("click", (e) => {
    const li = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = userInput;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    li.appendChild(textSpan);
    li.appendChild(removeButton);
    li.appendChild(editButton);

    

    // li.textContent = userInput.value;
    // li.appendChild(editButton);
    // li.appendChild(removeButton);
    // document.body.appendChild(itemList);
});

document.addEventListener("click", (e) => {
    if (e.target.textContent === "Remove") {
        e.target.remove();
    }
});

// editButton.addEventListener("click", () => {
//     if (editButton.textContent === "Edit") {
//         li.textContent = createElement("input");
//     }
// });
