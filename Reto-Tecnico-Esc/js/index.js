const buttonsFilters = document.querySelectorAll(".textSelect");
const root = document.getElementById("root");

const templateCard = (item) => {
    const  { name, flags, capital, population, continents } = item;
    
    return`
    <div class="card1">
        <h1 class="card1__text">${name.common}</h1>
        <div class="card1__info">
            <img src="${flags.png}" alt="flag" class="card1__img"/>
            <h1 class="card1__title">${capital}</h1>
            <p class="card1__subtitle">${population}</p>
            <p class="card1__subtitle">${continents[0]}</p>
        </div>
    </div> 
    `;        

};


const fetchByRegion = async (e) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${e}`);
    const data = await res.json();
    

    return data;
};

const makeSearch = async(region) => {
    const data = await fetchByRegion(region);

    const templates = data.map((element) => templateCard(element));
    root.innerHTML = templates.join("");
};

buttonsFilters.forEach((element) => {
    element.addEventListener("click",(e) => makeSearch(e.target.textContent));
    
});