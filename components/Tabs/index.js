// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let URL = 'https://lambda-times-backend.herokuapp.com/topics';
let tabArray = [];

axios.get(URL)
    .then(res => {
        tabArray = res.data.topics
    })
    .catch(err => {
        console.log('DATA NOT RETURNED:', err)
    })

    setTimeout(() => {
        // console.log(tabArray)
        tabArray.forEach(item => {
            const newTab = Tabs(item);
            let entry = document.querySelector('.topics')
            entry.appendChild(newTab)
        })
    },500)

function Tabs(data){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = data;

    return tab;
}
// console.log(Tabs('test'))