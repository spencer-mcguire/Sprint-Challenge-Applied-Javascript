// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // create elements 
    const container = document.createElement('div');
    container.classList.add('header');


    const date = document.createElement('span');
    container.appendChild(date);
    date.classList.add
    date.textContent = 'SMARCH 28, 2019';

    const title = document.createElement('h1');
    container.appendChild(title);
    title.textContent = 'Lambda Times';

    const temp = document.createElement('span');
    container.appendChild(temp)
    temp.classList.add('temp');
    temp.textContent = '98°';

    return container;
}

const entry = document.querySelector('.header-container');
entry.appendChild(Header());
// console.log(Header())