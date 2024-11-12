
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

document.getElementById("addButton").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const url = document.getElementById("url").value;

    if (name && url) {
        const newBookmark = { name, url };
        bookmarks.unshift(newBookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        renderBookmarks();
        document.getElementById("name").value = '';
        document.getElementById("url").value = '';
    } else {
        alert("Please fill in both fields.");
    }
});

//  the list of bookmarks
function renderBookmarks() {
    const bookmarkList = document.getElementById("bookmarkList");
    bookmarkList.innerHTML = '';  // Clear the list

    bookmarks.forEach((bookmark, index) => {
        const bookmarkItem = document.createElement("div");
        bookmarkItem.classList.add("bookmark-item");

        const nameElement = document.createElement("div");
        nameElement.textContent = `Name: ${bookmark.name}`;
        bookmarkItem.appendChild(nameElement);

        const urlElement = document.createElement("div");
        urlElement.textContent = `URL: ${bookmark.url}`;
        bookmarkItem.appendChild(urlElement);

        const actions = document.createElement("div");
        actions.classList.add("actions");

        // Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            bookmarks.splice(index, 1);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            renderBookmarks();
        });
        actions.appendChild(deleteButton);

        // Update Button
        const updateButton = document.createElement("button");
        updateButton.classList.add("update");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", () => {
            localStorage.setItem("editBookmarkIndex", index);
            window.location.href = "update.html";
        });
        actions.appendChild(updateButton);

        bookmarkItem.appendChild(actions);
        bookmarkList.appendChild(bookmarkItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    renderBookmarks();
});
