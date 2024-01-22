const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");
let isEditMode = false;

// Check item if exists
function checkItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();

  return itemsFromStorage.includes(item);
}

// Create Icon
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

// Create button
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark");

  button.appendChild(icon);

  return button;
}

// Add item to DOM
function addItemToDOM(item) {
  // Create list item - <li>
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  itemList.appendChild(li);
}

// Add item to Storage
function addItemToStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);

  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

// Get items from Storage
function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }

  return itemsFromStorage;
}

// Remove item from storage
function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  // filter item to delete
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  // Reset to Storage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

// Add item on form submit
function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validation
  if (newItem === "") {
    alert("Заполните поле!");

    return;
  }

  // check edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector(".edit-mode");

    if (checkItemExists(newItem)) {
      alert("Такой элемент уже имеется в списке!");

      return;
    }

    removeItemFromStorage(itemToEdit.textContent);

    itemToEdit.classList.remove("edit-mode");

    itemToEdit.remove();

    isEditMode = false;
  } else {
    if (checkItemExists(newItem)) {
      alert("Такой элемент уже имеется в списке!");

      return;
    }
  }

  addItemToDOM(newItem);

  addItemToStorage(newItem);

  checkUI();

  itemInput.value = "";
}

// Remove Item
function removeItem(item) {
  if (confirm("Ты уверен?")) {
    item.remove();
  }

  removeItemFromStorage(item.textContent);

  checkUI();
}

// Set edit mode
function setItemToEdit(item) {
  isEditMode = true;

  itemList.querySelectorAll("li").forEach((i) => {
    i.classList.remove("edit-mode");
  });

  item.classList.add("edit-mode");

  formBtn.innerHTML = `<i class="fa-solid fa-pen"></i> Update Item`;

  itemInput.value = item.textContent;

  formBtn.style.backgroundColor = "#228b22";
}

// On Item Click
function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}

// Clear all items
function clearItems() {
  // itemList.innerHTML = "";

  // console.log(itemList.firstChild);
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // clear from storage
  localStorage.removeItem("items");

  checkUI();
}

// Check UI
function checkUI() {
  itemInput.value = "";
  const items = document.querySelectorAll("li");

  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }

  formBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Item`;
  formBtn.style.backgroundColor = "#333";

  isEditMode = false;
}

// Filter items
function filterItems(e) {
  const text = e.target.value.toLowerCase();

  const items = itemList.querySelectorAll("li");

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// Display items
function displayItems() {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.forEach((item) => addItemToDOM(item));

  checkUI();
}

itemForm.addEventListener("submit", onAddItemSubmit);
itemList.addEventListener("click", onClickItem);
clearBtn.addEventListener("click", clearItems);
itemFilter.addEventListener("input", filterItems);
document.addEventListener("DOMContentLoaded", displayItems());
checkUI();
