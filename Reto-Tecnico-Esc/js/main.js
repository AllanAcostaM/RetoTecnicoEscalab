const url = 'https://restcountries.com/v3.1/all';

const content = document.getElementById('root');

window.addEventListener('load',()=>fetchData(url));

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const view = data.map((item)=>printView(item));

    content.innerHTML= view.join('');
}

function printView(item) {
    return`
    <div class="card1">
        <h1 class="card1__text">${item.name.common}</h1>
        <div class="card1__info">
            <img src="${item.flags.png}" alt="flag" class="card1__img"/>
            <h1 class="card1__title">${item.capital}</h1>
            <p class="card1__subtitle">${item.population}</p>
            <p class="card1__subtitle">${item.continents}</p>
        </div>
    </div> 
    `;
}

