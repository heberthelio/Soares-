document.addEventListener('DOMContentLoaded', function() {
    const characterInput = document.getElementById('characterInput');
    const fetchCharacterButton = document.getElementById('fetchCharacterButton');
    const characterDetails = document.querySelector('.character-details');

    fetchCharacterButton.addEventListener('click', function() {
        const characterNameOrId = characterInput.value.trim();
        if (characterNameOrId === '') {
            alert('Por favor, digite o nome ou ID do personagem.');
            return;
        }

        // Verifica se o input é um número para decidir a URL
        const url = isNaN(characterNameOrId)
            ? `https://rickandmortyapi.com/api/character/?name=${characterNameOrId}`
            : `https://rickandmortyapi.com/api/character/${characterNameOrId}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Personagem não encontrado.');
                }
                return response.json();
            })
            .then(data => {
                let characterData;

                // Se a busca for por nome, a resposta será um objeto com um array 'results'
                if (Array.isArray(data.results)) {
                    if (data.results.length === 0) {
                        throw new Error('Personagem não encontrado.');
                    }
                    characterData = data.results[0];
                } else {
                    // Caso contrário, a resposta é um único objeto
                    characterData = data;
                }

                const { name, id, species, status, gender, image } = characterData;

                const characterDetailsHTML = `
                    <h2>${name} (#${id})</h2>
                    <p><strong>Espécie:</strong> ${species}</p>
                    <p><strong>Status:</strong> ${status}</p>
                    <p><strong>Gênero:</strong> ${gender}</p>
                    <img src="${image}" alt="Imagem do personagem">
                `;
                characterDetails.innerHTML = characterDetailsHTML;
            })
            .catch(error => {
                alert(error.message);
            });
    });
});
