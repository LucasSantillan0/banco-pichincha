// A mock function to mimic making an async request for data
import { Pokemon } from "./pokemonSlice"

export async function fetchGetPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1")
  const json = await response.json()
  return json
}
export async function fetchDeletePokemons(id: number): Promise<Pokemon[]> {
  const response = await fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/${id}`, { method: "DELETE" })
  const json = await response.json()
  return json
}
export async function fetchPostPokemons(pokemon: Pokemon): Promise<Pokemon> {
  const response = await
    fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1`,
      {
        method: "POST",
        body: JSON.stringify(pokemon)
      })
  const json = await response.json()
  return json
}
export async function fetchGetPokemon(id: number): Promise<Pokemon> {
  const response = await
    fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/${id}`)
  const json = await response.json()
  return json
}
export async function fetchPutPokemon(id: number, pokemon:Pokemon): Promise<Pokemon> {
  const response = await
  fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/${id}`,
  {
    method: "PUT",
    body: JSON.stringify(pokemon)
  })
const json = await response.json()
return json
}

