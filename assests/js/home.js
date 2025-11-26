const books = [
    { 
        title: "The Secret History",
        author: "Donna Tartt",
        genre: "Mystery",
        img: "assests/images/thesecrethistory.webp",
        description: "A chilling academic mystery set in an elite classics program. A tightly-knit group of students commits a shocking act, exploring themes of morality, beauty, and the consequences of obsession."
    },
    { 
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        genre: "Fantasy",
        img: "assests/images/the secretgarden.webp",
        description: "A young orphaned girl discovers a hidden garden and, with newfound friends, brings it back to life. A tale of growth, healing, and the magic of nature."
    },
    { 
        title: "All the Lovers in the Night",
        author: "Frances Hodgson Burnett",
        genre: "Fantasy",
        img: "assests/images/all the lovers in the night.webp",
        description: "A young orphaned girl discovers a hidden garden and, with newfound friends, brings it back to life. A tale of growth, healing, and the magic of nature."
    },
    { 
        title: "The catcher in the Rye",
        author: "Frances Hodgson Burnett",
        genre: "Fantasy",
        img: "assests/images/the catcher in the rye.webp",
        description: "A young orphaned girl discovers a hidden garden and, with newfound friends, brings it back to life. A tale of growth, healing, and the magic of nature."
    },
    { 
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        img: "assests/images/1984.webp",
        description: "A gripping dystopian novel depicting a totalitarian regime that monitors and controls every aspect of life. Themes of surveillance, freedom, and truth are explored in chilling detail."
    },
    { 
        title: "A Little Life",
        author: "Hanya Yanagihara",
        genre: "Drama",
        img: "assests/images/a little life.webp",
        description: "A profound and heart-wrenching story of friendship, trauma, and the enduring power of love, following four friends living in New York City."
    },
    { 
        title: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        genre: "Historical Fiction",
        img: "assests/images/a thousand splendid suns.webp",
        description: "The story of two Afghan women brought together by war and fate. A moving exploration of love, sacrifice, and resilience under oppression."
    },
    { 
        title: "If We Were Villains",
        author: "M.L. Rio",
        genre: "Drama",
        img: "assests/images/ifwewerevillans.webp",
        description: "A Shakespeare-themed thriller set in an elite arts conservatory. Friendships, rivalries, and secrets collide, leading to a mysterious death."
    },
    { 
        title: "Bunny",
        author: "Mona Awad",
        genre: "Dark Academia",
        img: "assests/images/bunny.webp",
        description: "A surreal dark-academia tale about a lonely graduate student drawn into a bizarre, co-dependent clique of female writers called the 'Bunnies.'"
    },
    { 
        title: "The Bell Jar",
        author: "Sylvia Plath",
        genre: "Classic",
        img: "assests/images/the bell jar.webp",
        description: "A semi-autobiographical novel exploring a young woman's mental health struggles in 1950s America. Themes of identity, depression, and societal expectations are central."
    },
    { 
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        genre: "Classic",
        img: "assests/images/the picture of dorian gray.webp",
        description: "A cautionary tale about vanity, moral corruption, and the pursuit of pleasure, following a young man whose portrait ages while he remains youthful."
    },
    { 
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        img: "assests/images/to kill a mockingbird.webp",
        description: "A powerful story addressing racial injustice and moral growth through the eyes of Scout Finch in 1930s Alabama. Themes of empathy and integrity prevail."
    },
];

const featuredContainer = document.getElementById("featuredBooks");

function renderFeaturedBooks() {
    featuredContainer.innerHTML = "";

    books.forEach((book, index) => {
        const collapseId = `descriptionCollapse${index}`;
        
        featuredContainer.innerHTML += `
            <div class="col">
                <div class="card h-100">
                    <span class="badge text-bg-secondary genre-badge">${book.genre}</span>
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text text-muted"><strong>Author:</strong> ${book.author}</p>
                        
                        <div class="collapse" id="${collapseId}">
                            <p class="card-text">${book.description}</p>
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
