const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let searchPokemon = 1;


const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIresponse.status  === 200) {
        const data = await APIresponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
        searchPokemon = data.id;

    } else {

        pokemonName.innerHTML = 'MissingNO';
        pokemonNumber.innerHTML = '000';
        pokemonImage.src = "imagens/Missingno..webp";
        input.value = '';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

btnPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});

btnNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);