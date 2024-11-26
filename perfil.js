async function buscarPokemon() {
    const idPk = document.getElementById("id-pk").value;

    const id = idPk ? idPk : 25;

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    try {
        const response = await fetch(url, { method: "GET" });
        
        if (response.ok) {
            const data = await response.json();
            
          
            document.getElementById("txt-nome").innerHTML = data.name;
            document.getElementById("txt-idade").innerHTML = data.id;

    
            document.getElementById("img-perfil").src = data.sprites.back_default;
        } else {
            alert("Pokémon não encontrado. Verifique o ID.");
        }
    } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
        alert("Erro ao buscar dados. Por favor, tente novamente.");
    }
}
