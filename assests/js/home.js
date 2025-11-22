// Featured Books Array
const featuredBooks = [
    {
        title: "The Silent Library",
        author: "Lina Al-Farsi",
        description: "A mysterious tale about forgotten books and the secrets they keep inside dusty shelves at the edge of an ancient city.",
        image: "assets/images/book1.jpg"
    },
    {
        title: "Beyond the Pages",
        author: "Omar El-Madani",
        description: "A young reader discovers a magical book that changes its story every time it is opened, revealing a new adventure each day.",
        image: "assets/images/book2.jpg"
    },
    {
        title: "Ink of the Desert",
        author: "Sara Al-Taher",
        description: "A poetic journey across the Sahara, where stories are written in sand, wind, and memory — fragile but unforgettable.",
        image: "assets/images/book3.jpg"
    }
];

// Target container
const container = document.getElementById("featuredBooks");

// Render cards
featuredBooks.forEach((book, index) => {
    const shortText = book.description.substring(0, 60) + "...";

    container.innerHTML += `
        <div class="book-card">
            <img src="${book.image}" alt="${book.title}" class="book-img">

            <h3 class="book-title">${book.title}</h3>
            <p class="book-author"><strong>By:</strong> ${book.author}</p>

            <p id="desc-${index}" class="book-desc">${shortText}</p>

            <button class="read-btn" id="btn-${index}">Read More</button>
        </div>
    `;
});

// Add interactivity
featuredBooks.forEach((book, index) => {
    const btn = document.getElementById(`btn-${index}`);
    const desc = document.getElementById(`desc-${index}`);

    const full = book.description;
    const short = full.substring(0, 60) + "...";

    btn.addEventListener("click", () => {
        if (desc.textContent === short) {
            desc.textContent = full;
            btn.textContent = "Read Less";
        } else {
            desc.textContent = short;
            btn.textContent = "Read More";
        }
    });
});
