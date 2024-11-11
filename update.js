document.addEventListener("DOMContentLoaded", function() {
    const bookmarkIndex = localStorage.getItem("editBookmarkIndex");

    if (bookmarkIndex !== null) {
        const bookmark = JSON.parse(localStorage.getItem('bookmarks'))[bookmarkIndex];
        
        // Populate the input fields with the bookmark data
        document.getElementById("editName").value = bookmark.name;
        document.getElementById("editUrl").value = bookmark.url;

        document.getElementById("updateButton").addEventListener("click", function() {
            const updatedName = document.getElementById("editName").value;
            const updatedUrl = document.getElementById("editUrl").value;

            if (updatedName && updatedUrl) {
                const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
                bookmarks[bookmarkIndex] = { name: updatedName, url: updatedUrl };
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

                // Redirect back to the main page
                window.location.href = "index.html";
            } else {
                alert("Please fill in both fields.");
            }
        });
    } else {
        alert("No bookmark found to edit.");
        window.location.href = "index.html";
    }
});
