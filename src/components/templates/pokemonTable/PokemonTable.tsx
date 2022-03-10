import { useEffect, useState } from "react"
import {useAppSelector, useAppDispatch} from "../../../store/hooks"
import { getPokemons, Pokemon } from "../../../features/reducer/pokemonSlice"
import { PokemonItem } from "../../atoms/pokemonItem/PokemonItem"
import { Table } from "../../molecules/table/Table"

export const PokemonTable = () => {
    const [list, setList] = useState <Pokemon[]>([])
    const dispatch = useAppDispatch()
    const pokemonList = useAppSelector (state => state.list)
    useEffect (()=>{
        dispatch(getPokemons(""))
    },[])
    useEffect(()=>{
        setList(pokemonList)
    },[pokemonList])

    const tableHeaders = ["Nombre", "Imagen", "Ataque", "Defensa", "Acciones"]

    return <Table headers={tableHeaders} data={list}/>    
    
}