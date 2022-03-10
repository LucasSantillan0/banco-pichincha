import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store/store';
import { fetchDeletePokemons, fetchGetPokemon, fetchGetPokemons, fetchPostPokemons, fetchPutPokemon } from './pokemonApi';

export interface Pokemon {
  id: number,
  type: string,
  hp?: number,
  idAuthor?: number,
  name: string,
  image: string,
  attack: number,
  defense: number,
  created_at?:string,
  updated_at?:string
}

export interface PokemonState {
  current: Pokemon ;
  list: Pokemon[];
  status: 'idle' | 'loading' | 'failed';

}

const initialState: PokemonState = {
  current: {
    image:"",
    id:45540,
    name:"",
    type:"",
    attack:0,
    defense:0,
  },
  list: [],
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getPokemons = createAsyncThunk(
  'counter/getPokemons',
  async (name:string="") => {
    const response = await fetchGetPokemons();
    // The value we return becomes the `fulfilled` action payload
    return response.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
  }
);
export const deletePokemon = createAsyncThunk(
  "counter/deletePokemons",
  async (id:number) => {
    await fetchDeletePokemons(id);
    const response = await fetchGetPokemons();
    return response;
  } 
)
export const createPokemon = createAsyncThunk(
  "counter/createPokemon",
  async (pokemon:Pokemon) => {
    await fetchPostPokemons(pokemon);
    const response = await fetchGetPokemons();
    return response;
  }
)
export const getPokemonDetails = createAsyncThunk(
  "counter/getPokemonDetails",
  async (id: number) => {
    const response = await fetchGetPokemon(id);
    return response;
  }
)
export const updatePokemon = createAsyncThunk(
  "counter/updatePokemon",
  async (pokemon:Pokemon) => {
    await fetchPutPokemon(pokemon.id, pokemon);
    const response = await fetchGetPokemons();
    return response;
  }
)
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list=action.payload
      })
      
      .addCase(deletePokemon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePokemon.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list=action.payload
      })

      .addCase(createPokemon.pending, (state) => {
        state.status= "loading"
      })
      .addCase(createPokemon.fulfilled, (state, action) =>{
        state.status = "idle";
        state.list=action.payload
      })
      .addCase(getPokemonDetails.pending, (state) => {
        state.status= "loading"
      })
      .addCase(getPokemonDetails.fulfilled, (state, action) =>{
        state.status = "idle";
        state.current = action.payload
      })
      .addCase(updatePokemon.pending, (state) => {
        state.status= "loading"
      })
      .addCase(updatePokemon.fulfilled, (state, action) =>{
        state.status = "idle";
        state.list = action.payload
      })
      
  },
});

//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

//export const selectCount = (state: RootState) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

// export const incrementIfOdd = (amount: number): AppThunk => (
//   dispatch,
//   getState
// ) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default counterSlice.reducer;
