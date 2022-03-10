import counterReducer, {
  PokemonState,
  getPokemons,
  deletePokemon,
  createPokemon,
  Pokemon
} from './pokemonSlice';
import {store} from "../../store/store"
describe('counter reducer', () => {
  
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      current:{    
      image:"",
      id:45540,
      name:"",
      type:"",
      attack:0,
      defense:0,},
      list: [],
      status: 'idle',
    });
  });

  it('should  get pokemons', async () => {
    await store.dispatch(getPokemons())
    expect(store.getState().list.length).toBeTruthy() 
  });

  it("should create pokemons", async () => {
    const length = store.getState().list.length
    await store.dispatch(createPokemon({
      name:"pikachu",
      type:"water",
      hp:50,
      idAuthor:1,
      attack:50,
      defense:50,
    } as Pokemon))
    expect(store.getState().list.length).toEqual(length+1)  
  })
  it("should search pokemons", async () => {
    await store.dispatch(getPokemons("Pika"))
    expect (store.getState().list.length).toBeGreaterThan(0)
  })
});
