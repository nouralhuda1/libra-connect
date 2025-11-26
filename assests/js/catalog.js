// BOOKS ARRAY
const books = [
    { 
        id: "978-0679724330", 
        title: "The Secret History",
        author: "Donna Tartt", 
        genre: "Mystery",
        img: "assests/images/thesecrethistory.webp",
        description: "A gripping mystery that unfolds inside an abandoned library."
    },
    { 
        id: "978-0064401883",
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        genre: "Fantasy",
        img: "assests/images/thesecretgarden.webp",
        description: "A fantasy adventure where stories come alive from the book itself."
    },
    { 
        id: "978-1250207519",
        title: "If We Were Villains",
        author: "M. L. Rio",
        genre: "Dark Academia / Drama",
        img: "assests/images/ifwewerevillans.webp",
        description: "A dramatic tale of love and loss set in a prestigious arts conservatory."
    },
    { 
        id: "978-0735235371",
        title: "Bunny",
        author: "Mona Awad",
        genre: "Dark Academia / Romance",
        img: "assests/images/bunny.webp",
        description: "A surreal satire blooming under the pressure of academic writing."
    },
    { 
        id: "978-0141439518",
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        genre: "Romance", 
        img: "assests/images/prideandprejudice.webp", 
        description: "A classic novel exploring societal norms and love in 19th-century England." 
    },
    { 
        id: "978-0451524935",
        title: "1984", 
        author: "George Orwell", 
        genre: "Dystopian", 
        img: "assests/images/1984.webp", 
        description: "A chilling look at a future totalitarian state and surveillance society." 
    },
    { 
        id: "978-0316055447",
        title: "A Little Life",
        author: "Hanya Yanagihara",
        genre: "Drama",
        img: "assests/images/a_little_life.webp",
        description: "A heart-wrenching story of friendship, trauma, and the enduring power of love."
    },
    { 
        id: "978-1594631931",
        title: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        genre: "Historical Fiction",
        img: "assests/images/a_thousand_splendid_suns.webp",
        description: "The story of two Afghan women bound together by war and fate, exploring love, sacrifice, and resilience."
    },
    { 
        id: "978-0140237504",
        title: "The Bell Jar",
        author: "Sylvia Plath",
        genre: "Classic",
        img: "assests/images/the_bell_jar.webp",
        description: "A semi-autobiographical novel exploring a young woman's mental health struggles in 1950s America."
    },
    { 
        id: "978-0141439570",
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        genre: "Classic",
        img: "assests/images/the_picture_of_dorian_gray.webp",
        description: "A cautionary tale about vanity, moral corruption, and the pursuit of pleasure."
    },
    { 
        id: "978-0061120084",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        img: "assests/images/to_kill_a_mockingbird.webp",
        description: "A story addressing racial injustice and moral growth through the eyes of Scout Finch in 1930s Alabama."
    }
];

// DOM ELEMENTS
const container = document.getElementById("catalogBooks");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults"); 

// RENDER BOOK CARDS (Uses Bootstrap card structure)
function renderBooks() {
    container.innerHTML = "";
    let htmlContent = '';

    books.forEach(book => {
        htmlContent += `
            <div class="col book-card fade-in" 
                data-title="${book.title.toLowerCase()}" 
                data-author="${book.author.toLowerCase()}" 
                data-genre="${book.genre.toLowerCase()}"
                data-id="${book.id}"
            >
                <div class="card h-100 shadow-sm text-center">
                    
                    <span class="badge bg-secondary genre-badge">${book.genre}</span> 
                    
                    <img src="${book.img}" class="card-img-top book-cover" alt="${book.title}">
                    
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        
                        <p class="card-text text-muted mb-3"><strong>Author:</strong> ${book.author}</p>
                        
                        <a href="details.html?id=${book.id}" class="btn btn-primary mt-auto">Borrow</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = htmlContent;

    // Check if search input has content and re-run filter if needed
    if (searchInput.value) {
        runSearch();
    } else {
        noResults.style.display = books.length === 0 ? "block" : "none";
    }
}

// DEBOUNCE FUNCTION
function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}

// LIVE SEARCH/FILTER FUNCTION
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
    noResults.style.display = visibleCount === 0 ? "block" : "none";
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    renderBooks();
    searchInput.addEventListener("keyup", debounce(runSearch, 200));
});
