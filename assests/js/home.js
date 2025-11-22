const books = [
    { 
        title: "The Secret History",
        author: "Donna Tartt",
        genre: "Mystery",
        img: "assests/images/thesecrethistory.webp",
        description: "A chilling academic mystery set in an elite classics program."
    },
    { 
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        genre: "Fantasy",
        img: "assests/images/thesecretgarden.webp",
        description: "A tale of renewal, nature, and unexpected friendship."
    },
    { 
        title: "If We Were Villains",
        author: "M.L. Rio",
        genre: "Drama",
        img: "assests/images/ifwewerevillans.webp",
        description: "A Shakespeare-filled tragedy inside an elite arts conservatory."
    },
    { 
        title: "Bunny",
        author: "Mona Awad",
        genre: "Dark Academia",
        img: "assests/images/bunny.webp",
        description: "A surreal dark-academia satire about belonging and madness."
    },
];

const featuredContainer = document.getElementById("featuredBooks");

function renderFeaturedBooks() {
    featuredContainer.innerHTML = "";

    books.forEach(book => {
        featuredContainer.innerHTML += `
            <div class="book-card">
                <img src="${book.img}" alt="${book.title}">
                <span class="genre-badge">${book.genre}</span>
                <div class="book-title">${book.title}</div>
                <div class="book-info">
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p>${book.description}</p>
                </div>
            </div>
        `;
    });
}

renderFeaturedBooks();

