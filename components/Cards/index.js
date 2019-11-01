// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardURL = 'https://lambda-times-backend.herokuapp.com/articles';
let articleData = [];

axios.get(cardURL)
    .then(res => {
        articleData = Object.entries(res.data.articles)
    })
    .catch(err => {
        console.log('DATA NOT RECEIVED:', err)
    })

// setTimeout(() => {
//     articleData.map(item => {
//         let array = item  
//         console.log(array[0])
//         array[1].forEach(item => {
//             const newCard = cardCreator(item)
//             let cardEntry = document.querySelector('.cards-container');
//             cardEntry.appendChild(newCard)
//         })
//     })
// }, 500)

setTimeout(() => {
    articleData.map(item => {
        let array = item  
        // console.log(array)
        // console.log(array[0])
        array[1].forEach(item => {
            const newCard = cardCreator(item)
            let cardEntry = document.querySelector('.cards-container');
            cardEntry.appendChild(newCard)
            newCard.classList.add(`${array[0]}`)
        })
        // array.forEach(item => {
        //     let classArray = [item[0]];
        //     newCard.classList.add(classArray)
        // })
        // let classArray = [];
        // classArray = array[0];
        // console.log(classArray);
        // array[0].forEach(item => {
        //     newCard.classList.add(item)
        // })
    })
}, 500)

function cardCreator(data) {
	const container = document.createElement("div");
	container.classList.add("card");

	const headline = document.createElement("div");
	container.appendChild(headline);
	headline.textContent = data.headline;

	const authorContainer = document.createElement("div");
	container.appendChild(authorContainer);
	authorContainer.classList.add('author');

	const imgContainer = document.createElement("div");
	authorContainer.appendChild(imgContainer);
	imgContainer.classList.add("img-container");

	const img = document.createElement("img");
	imgContainer.appendChild(img);
	img.src = data.authorPhoto;

	const name = document.createElement("span");
	authorContainer.appendChild(name);
	name.textContent = data.authorName;

	return container;
}
