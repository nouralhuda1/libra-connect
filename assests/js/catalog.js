// Book Array
const books = [
    { title: "The Silent Library", author: "Lina Al-Farsi", genre: "Mystery" },
    { title: "Beyond the Pages", author: "Omar El-Madani", genre: "Fantasy" },
    { title: "Ink of the Desert", author: "Sara Al-Taher", genre: "Drama" },
    { title: "Moon Over Benghazi", author: "Nour Al-Sadiq", genre: "Romance" },
    { title: "Winds of Tripoli", author: "Yousef El-Ghani", genre: "History" }
];

// Get elements
const container = document.getElementById("catalogBooks");
const searchInput = document.getElementById("searchInput");

// Render cards
books.forEach((book, index) => {
    container.innerHTML += `
        <div class="col-md-4 book-card" data-title="${book.title.toLowerCase()}">
            <div class="card p-3 shadow-sm h-100">
                <h4>${book.title}</h4>
                <p class="text-muted mb-1"><strong>Author:</strong> ${book.author}</p>
                <p class="mb-0"><strong>Genre:</strong> ${book.genre}</p>
            </div>
        </div>
    `;
});

// Live Search
searchInput.addEventListener("keyup", () => {
    const text = searchInput.value.toLowerCase();

    document.querySelectorAll(".book-card").forEach(card => {
        const title = card.getAttribute("data-title");

        if (title.includes(text)) {
            card.style.display = "block";   // show card
        } else {
            card.style.display = "none";    // hide card
        }
    });
});
