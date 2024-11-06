async function getPokemon() {
    try {
        const pokemonName = document.getElementById("pokemonname").value.trim().toLowerCase();
        if (pokemonName == "") {
            alert("please enter name of a pokemon");
            return;
        }
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error(`${pokemonName} is not found!`);
        }
        const data = await response.json();
        const image = document.getElementById("pokeimg");
        image.src = data.sprites.front_default;
        image.style.display = "block";
    } catch (error) {
        console.error(error);


    }
}