// Featured Books Array
const featuredBooks = [
    {
        title: "The Silent Library",
        author: "Lina Al-Farsi",
        description: "A mysterious tale about forgotten books and the secrets they keep inside dusty shelves at the edge of an ancient city."
    },
    {
        title: "Beyond the Pages",
        author: "Omar El-Madani",
        description: "A young reader discovers a magical book that changes its story every time it is opened, revealing a new adventure each day."
    },
    {
        title: "Ink of the Desert",
        author: "Sara Al-Taher",
        description: "A poetic journey across the Sahara, where stories are written in sand, wind, and memory — fragile but unforgettable."
    }
];

// Target container
const container = document.getElementById("featuredBooks");

// Render cards
featuredBooks.forEach((book, index) => {
    const shortText = book.description.substring(0, 60) + "...";

    container.innerHTML += `
        <div class="col-md-4">
            <div class="card p-3 shadow-sm h-100">
                <h4>${book.title}</h4>
                <p class="text-muted"><strong>By:</strong> ${book.author}</p>

                <p id="desc-${index}">${shortText}</p>

                <button class="btn btn-primary btn-sm" id="btn-${index}">
                    Read More
                </button>
            </div>
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
