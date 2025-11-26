const books = [
    { 
        title: "The Secret History",
        author: "Donna Tartt",
        genre: "Mystery",
        img: "assests/images/thesecrethistory.webp",
        description: "A chilling academic mystery set in an elite classics program. This book explores themes of morality, responsibility, and the nature of beauty in a dark, atmospheric setting. The tightly-knit group of classics students forms a dangerous pact that changes their lives forever."
    },
    { 
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        genre: "Fantasy",
        img: "assests/images/thesecretgarden.webp",
        description: "A tale of renewal, nature, and unexpected friendship. It follows a young, spoiled girl sent to live in a large house in the English countryside, where she discovers a forgotten garden and begins a journey of healing and growth with her new friends."
    },
    { 
        title: "If We Were Villains",
        author: "M.L. Rio",
        genre: "Drama",
        img: "assests/images/ifwewerevillans.webp",
        description: "A Shakespeare-filled tragedy inside an elite arts conservatory. Focusing on seven actors studying Shakespeare, the lines between their on-stage performances and off-stage rivalries blur, leading to a decade-old mystery of a death that must be solved."
    },
    { 
        title: "Bunny",
        author: "Mona Awad",
        genre: "Dark Academia",
        img: "assests/images/bunny.webp",
        description: "A surreal dark-academia satire about belonging and madness. The story follows a lonely graduate student who is drawn into a group of cliquish, highly co-dependent female writers known only as the 'Bunnies,' leading to darkly comedic and bizarre events."
    },
];

const featuredContainer = document.getElementById("featuredBooks");

function renderFeaturedBooks() {
    featuredContainer.innerHTML = "";

    books.forEach((book, index) => {
        // Unique ID needed for the Bootstrap Collapse component (Read More toggle)
        const collapseId = `descriptionCollapse${index}`;
        
        // 1. FIX: Use Bootstrap column/card structure for proper rendering
        featuredContainer.innerHTML += `
            <div class="col">
                <div class="card h-100">
                    <span class="badge text-bg-secondary genre-badge">${book.genre}</span>
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text text-muted"><strong>Author:</strong> ${book.author}</p>
                        
                        <div class="collapse" id="${collapseId}">
                            <p class="card-text">
                                ${book.description}
                            </p>
                        </div>
                        <a 
                            class="btn btn-sm btn-outline-primary" 
                            data-bs-toggle="collapse" 
                            href="#${collapseId}" 
                            role="button" 
                            aria-expanded="false" 
                            aria-controls="${collapseId}"
                            onclick="this.innerText = this.innerText === 'Read More' ? 'Read Less' : 'Read More';"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}

renderFeaturedBooks();

// No need for a separate CSS file for the basic Bootstrap card styling now, 
// but you might still use your home.css for the hero section and font styling.