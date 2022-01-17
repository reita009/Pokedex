const criarPokemon = () =>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=21')
    .then((response)=>{return response.json()})
    .then((json)=>{
        let pokemons = []
        
        json.results.map((val)=>{
            
            fetch(val.url)
            .then(rest => rest.json())
            .then(pokemonSingle =>{
                pokemons.push({nome:pokemonSingle.name,imagem:pokemonSingle.sprites.front_default})
                pokemons.map((e)=>{
               
                if(pokemons.length == 21){
                    let pokemonBox = document.querySelector('.pokemon-box')
                    pokemonBox.innerHTML = ''

                  pokemons.map((val)=>{
                      pokemonBox.innerHTML += `
                        
                     
                     <div class="pokemon-card">
                         <img src="${val.imagem}">
                         <div class="pokemon-name">
                             <h3>${val.nome}</h3>
                         </div><!--pokemonName-->
                     </div><!--pokemoncard-->

                      `
                      console.log(val)
                  })

                   
                    
                    
                }

                })


                
            })
          
        })

    }) 
}

criarPokemon();