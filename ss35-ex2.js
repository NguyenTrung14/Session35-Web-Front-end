let bookmarkList = JSON.parse(localStorage.getItem('bookmarks')) || [];
let bookmarkContainer = document.getElementById("bookmarkContainer");

function renderBookmarks() {
    bookmarkContainer.innerHTML = '';
    bookmarkList.forEach((bookmark, bookmarkIndex) => {
        const faviconUrl = `https://www.google.com/s2/favicons?sz=32&domain=${bookmark.bookmarkURL}`;
        bookmarkContainer.innerHTML += `
            <div class="list-group-item">
                <img src="${faviconUrl}" alt="Favicon">
                <a href="${bookmark.bookmarkURL}" target="_blank">${bookmark.bookmarkName}</a>
                <button class="close" onclick="deleteBookmark(${bookmarkIndex})">&times;</button>
            </div>
        `;
    });
}

function addBookmark() {
    let bookmarkName = document.getElementById('nameWebInput').value.trim();
    let bookmarkURL = document.getElementById('urlWebInput').value.trim();
    
    if (!bookmarkName || !bookmarkURL) {
        alert("Không được để trống!!!");
        return;
    }

    bookmarkList.push({ bookmarkName, bookmarkURL });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkList));
    
    document.getElementById('nameWebInput').value = '';
    document.getElementById('urlWebInput').value = '';
    
    document.querySelector('.btn-close').click();
    renderBookmarks();
}

function deleteBookmark(bookmarkIndex) {
    bookmarkList.splice(bookmarkIndex, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkList));
    renderBookmarks();
}

renderBookmarks();
