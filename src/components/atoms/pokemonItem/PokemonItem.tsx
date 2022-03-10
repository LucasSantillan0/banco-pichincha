import { FormEvent,MouseEvent } from "react"
import { deletePokemon, getPokemonDetails, Pokemon } from "../../../features/reducer/pokemonSlice"
import { useAppDispatch } from "../../../store/hooks"
import s from "./PokemonItem.module.css"

export const PokemonItem = ({ name, image, attack, defense, id }: Pokemon) => {
    const dispatch = useAppDispatch()
    const handleClickEdit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(getPokemonDetails(id as number))
    }
    const handleClickDelete = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(deletePokemon(id as number))
    }

    return (
        <tr className = {s.row} >
            <th>{name}</th>
            <th>
                <img src={image}/>
                </th>
            <th>{attack}</th>
            <th>{defense}</th>
            <th >
                <div className= {s.inputs}>
                <button onClick={e => { handleClickEdit(e) }}>✏️</button>
                <button onClick={e => { handleClickDelete(e) }}>🗑️</button>
                </div>
            </th>
        </tr>
    )
}