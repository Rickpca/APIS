const pokemonContainer = document.getElementById("poke-container");
const btnP = document.getElementById("btn-pokedex").addEventListener("click",()=>{
    mercadoContainer.innerHTML="";
    function fetchPokemon(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        createPokiemon(data);
    })
    .catch(error => {
        console.error("Error al obtener los productos:", error);
      });
    }
    
    function fetchPokemons(number){
        for(let i = 1; i<= number; i++){
            fetchPokemon(i);
        }
    }
    function createPokiemon(pokemon){
        const card = document.createElement('div');
        card.classList.add('pokemon-block');

        const spriteContainer = document.createElement('div');
        spriteContainer.classList.add('img-container');

        const sprite = document.createElement('img');
        sprite.src = pokemon.sprites.front_default

        spriteContainer.appendChild(sprite);
        const number = document.createElement('p');
        number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

        const name = document.createElement('p');
        name.classList.add('name');
        name.textContent = pokemon.name;

        card.appendChild(spriteContainer);
        card.appendChild(number);
        card.appendChild(name);

        pokemonContainer.appendChild(card);
    }
    fetchPokemons(50);
})

const mercadoContainer = document.getElementById("mercado-container");
const btnM = document.getElementById("btn-mercado").addEventListener("click", () => {
    pokemonContainer.innerHTML = "";
  function fetchProducts() {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=ordenadores")
      .then(res => res.json())
      .then(data => {
        createProduct(data.results);
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
      });
  }

  fetchProducts();

  function createProduct(products) {
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('pokemon-block');

      const spriteContainer = document.createElement('div');
      spriteContainer.classList.add('img-container');

      const sprite = document.createElement('img');
      sprite.src = product.thumbnail;

      spriteContainer.appendChild(sprite);
      const number = document.createElement('p');
      number.textContent = `$${product.price}`;

      const name = document.createElement('p');
      name.classList.add('name');
      name.textContent = product.title;

      card.appendChild(spriteContainer);
      card.appendChild(number);
      card.appendChild(name);

      mercadoContainer.appendChild(card);
    });
  }
});
