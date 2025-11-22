// BOOKS ARRAY (with images + descriptions)
const books = [
    { 
        title: "The secret history",
        author: "Lina Al-Farsi",
        genre: "Mystery",
        img: "assests/images/thesecrethistory.webp",
        description: "A gripping mystery that unfolds inside an abandoned library."
    },
    { 
        title: "the secret garden",
        author: "Omar El-Madani",
        genre: "Fantasy",
        img: "assests/images/thesecretgarden.webp",
        description: "A fantasy adventure where stories come alive from the book itself."
    },
    { 
        title: "if we were villaness",
        author: "Sara Al-Taher",
        genre: "Drama",
        img: "assests/images/ifwewerevillans.webp",
        description: "A dramatic tale of love and loss set in the Sahara."
    },
    { 
        title: "bunny",
        author: "Nour Al-Sadiq",
        genre: "Romance",
        img: "assests/images/bunny.webp",
        description: "A bittersweet romance blooming under the Libyan night sky."
    },
];

// DOM ELEMENTS
const container = document.getElementById("catalogBooks");
const searchInput = document.getElementById("searchInput");

// RENDER BOOK CARDS
function renderBooks() {
    container.innerHTML = "";

    books.forEach(book => {
        container.innerHTML += `
            <div class="book-card fade-in" 
                 data-title="${book.title.toLowerCase()}"
                 data-author="${book.author.toLowerCase()}"
                 data-genre="${book.genre.toLowerCase()}">

                <div class="card p-3 shadow-sm h-100 w-100">
                    <img src="${book.img}" class="book-cover mb-3" alt="${book.title}">
                    <h4>${book.title}</h4>

                    <p class="text-muted mb-1"><strong>Author:</strong> ${book.author}</p>
                    <p class="mb-1"><strong>Genre:</strong> ${book.genre}</p>
                    <p class="book-description">${book.description}</p>
                </div>
            </div>
        `;
    });

    addNoResultsBox();
}

renderBooks();


// ADD "NO RESULTS" MESSAGE BOX
function addNoResultsBox() {
    const noBox = document.createElement("p");
    noBox.id = "noResults";
    noBox.textContent = "No books found.";
    noBox.style.display = "none";
    noBox.style.textAlign = "center";
    noBox.style.marginTop = "20px";
    noBox.style.fontSize = "18px";
    container.appendChild(noBox);
}


// DEBOUNCE FUNCTION (smoother typing)
function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}


// LIVE SEARCH (title + author + genre)
function runSearch() {
    const text = searchInput.value.toLowerCase();
    let visibleCount = 0;

    document.querySelectorAll(".book-card").forEach(card => {
        const title = card.dataset.title;
        const author = card.dataset.author;
        const genre = card.dataset.genre;

        const match =
            title.includes(text) ||
            author.includes(text) ||
            genre.includes(text);

        if (match) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    // Show/Hide "No Results"
    document.getElementById("noResults").style.display =
        visibleCount === 0 ? "block" : "none";
}

searchInput.addEventListener("keyup", debounce(runSearch, 200));


                                                                                                                                                                                                                                                                                                                                                                                               