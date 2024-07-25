document.addEventListener('DOMContentLoaded', function() {
    const PokemonInput = document.getElementById('PokemonInput');
    const FetchPokemonButton = document.getElementById('fetchPokemonButton');
    const PokemonDetails = document.querySelector('.Pokemon-details');

    FetchPokemonButton.addEventListener('click', function() {
        const pokemonNomeOrId = PokemonInput.value.trim().toLowerCase();
        if (pokemonNomeOrId === '') {
            alert('Por favor, digite o nome ou id do Pokémon.');
            return;
        }

        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNomeOrId}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokemon não encontrado.');
                }
                return response.json();
            })
            .then(data => {
                const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
                const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
                const stats = data.stats.map(statInfo => `
                    <li>${statInfo.stat.name}: ${statInfo.base_stat}</li>
                `).join('');

                const pokemonDetailsHTML = `
                    <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                    <p><strong>ID:</strong> ${data.id}</p>
                    <p><strong>Tipo(s):</strong> ${types}</p>
                    <p><strong>Habilidade(s):</strong> ${abilities}</p>
                    <p><strong>Estatísticas:</strong></p>
                    <ul>${stats}</ul>
                    <img src="${data.sprites.front_default}" alt="Imagem do Pokémon">
                `;
                PokemonDetails.innerHTML = pokemonDetailsHTML;
            })
            .catch(error => {
                alert(error.message);
            });
    });
});
