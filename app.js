// const accessKey = "8Qj_ABY4se2CJ0UR7W1vd8f7leCHrAPRIqH2Fh1oMvM";

// const formEl = document.querySelector("form");
// const inputEl = document.getElementById("search-input");
// const searchResult = document.querySelector(".search-results");
// const showMore = document.getElementById("show-more-button");

// let inputData ="";
// let page = 1 ;

// async function searchImages(){
//     inputData = inputEl.value;
//     // const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

//     const url = `https://api.unsplash.com/search/photos?page=${(page)}&query=$(inputData)}&client_id=${(accessKey)}`;


//     const response = await fetch(url);
//     const data = await response.json();

//     const results = data.results;

//     if (page === 1) {
//         searchResults.innerHTML = "";
//     }

//     results.map((result) => {
//         const imageWrapper = document.createElement("div");
//         imageWrapper.classList.add("search-result");
//         const image = document.createElement("img");
//         image.src = result.urls.small;
//         image.alt = result.alt_description ;
//         const imageLink = document.createElement("a");
//         imageLink.href = result.link.html ;
//         imageLink.target = "_blank" ;
//         imageLink.textContent = result.alt_description ;

//         imageWrapper.appendChild(image) ; 
//         imageWrapper.appendChild(imageLink) ;
//         imageWrapper.appendChild(imageWrapper) ;
//     });

//     page++ ;
//     if (page > 1){
//         showMore.style.display = "block";
//     }
// }

// formEl.addEventListener("submit", (event) =>{
//     event.preventDefault();
//     page = 1;
//     searchImages();
// });

// showMore.addEventListener("click", (event) =>{
//     searchImages();
// });




const accessKey = "8Qj_ABY4se2CJ0UR7W1vd8f7leCHrAPRIqH2Fh1oMvM";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResult = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(inputData)}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResult.appendChild(imageWrapper);
    });

    page++;
    if (page > 1) {
        showMore.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});
