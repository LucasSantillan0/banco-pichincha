import { useState, ChangeEvent, FormEvent } from "react"
import { getPokemons } from "../../../features/reducer/pokemonSlice"
import { useAppDispatch } from "../../../store/hooks"
import s from "./search.module.css"

export const Search = () => {
    const [text, setText] = useState("")
    const dispatch = useAppDispatch()

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getPokemons(text))
        setText("")
    }

    return <div className= {s.search}>
        <h2>Listado de Pokemón</h2>
        <form onSubmit={e => handleSubmit(e)} >
        
        <input type={"search"} placeholder="🔎 Buscar" onChange={e => handleInputChange(e)} value={text}></input>
    </form>
    </div>
}