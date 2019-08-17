// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles)
        response.data.articles.bootstrap.forEach((e) => {
            document.querySelector('.cards-container').appendChild(Card(e))
        })
        response.data.articles.javascript.forEach((e) => {
            document.querySelector('.cards-container').appendChild(Card(e))
        })
        response.data.articles.jquery.forEach((e) => {
            document.querySelector('.cards-container').appendChild(Card(e))
        })
        response.data.articles.node.forEach((e) => {
            document.querySelector('.cards-container').appendChild(Card(e))
        })
        response.data.articles.technology.forEach((e) => {
            document.querySelector('.cards-container').appendChild(Card(e))
        })

    })
    .catch(error => {
        console.log(error)
    })
function Card(article) {
    const container = document.createElement('div')
    container.classList.add('card')
    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = article.headline
    container.appendChild(headline)
    const author = document.createElement('div')
    author.classList.add('author')
    container.appendChild(author)
    const imgcontainer = document.createElement('div')
    imgcontainer.classList.add('img-container')
    author.appendChild(imgcontainer)
    const image = document.createElement('img')
    image.src = article.authorPhoto
    imgcontainer.appendChild(image)
    const name = document.createElement('span')
    name.textContent = article.authorName
    author.appendChild(name)
    return container
}
