const userInput = document.getElementById("input");
const addButton = document.getElementById("add-button");
const itemList = document.getElementById("item-list");

// When a click happens...
document.addEventListener("click", (e) => {
    // Add item
    if (e.target.textContent === "Add") {
        const li = document.createElement("li");

        const inText = document.createElement("span");
        inText.textContent = userInput.value;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        li.appendChild(inText);
        li.appendChild(editButton);
        li.appendChild(removeButton);

        // Append the item
        document.getElementById("item-list").appendChild(li);
        userInput.value = ""; // Clear input after adding
    }

    // Remove item
    if (e.target.textContent === "Remove") {
        e.target.parentElement.remove();
    }

    // Edit item
    if (e.target.textContent === "Edit") {
        const fullListItem = e.target.parentElement;
        const spanText = fullListItem.querySelector("span");

        // Create an editable input element
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = spanText.textContent;

        // Replace the text with the input element
        fullListItem.replaceChild(editInput, spanText);

        e.target.textContent = "Save"; // Change to a Save button
    }

    // Save an item that the user is editing
    else if (e.target.textContent === "Save") {
        const fullListItem = e.target.parentElement;
        const editInput = fullListItem.querySelector("input[type='text']");

        // Remake the span element with the new value
        const spanText = document.createElement("span");
        spanText.textContent = editInput.value;

        // Replace the input with a span of text element
        fullListItem.replaceChild(spanText, editInput);

        e.target.textContent = "Edit"; // Change to an Edit button
    }
});
