import {PokemonTable} from "./PokemonTable"
import { render } from '@testing-library/react';
import {ReduxProvider} from "../../../testUtils/reduxProvider"
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { getPokemons, } from "../../../features/reducer/pokemonSlice"

describe ("PokemonList", () => {


    test ("", async () => {
        await store.dispatch(getPokemons())
        const {container} = render(
        <Provider store={store}>
             <PokemonTable/>
        </Provider>
       )
        const list = container.querySelectorAll("tr") 
        expect(list.length).toBeGreaterThan(2)
    })
})  