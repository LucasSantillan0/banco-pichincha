import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Pokemon, updatePokemon } from "../../../features/reducer/pokemonSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { createPokemon } from "../../../features/reducer/pokemonSlice"
import { Form } from "../../molecules/form/Form"

export interface NewPokemon {
    name: string,
    image: string,
    attack: number,
    defense: number
}

export type mode = "edit" | "create"

export const PokemonForm = () => {

    const dispatch = useAppDispatch()

    const current = useAppSelector(state => state.current)

    const { name, type, defense, attack, id } = { ...current }

    useEffect(() => {
        setData(current)
        if(current.name!==""){
            setMode("edit")
        }
    }, [current])

    const defaultState: NewPokemon = {
        name: "",
        image: "",
        attack: 0,
        defense: 0
    }

    const [data, setData] = useState<NewPokemon>(defaultState)
    const [mode, setMode] = useState<mode>("create")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()

        if (mode === "edit") {
            dispatch(updatePokemon({ ...data, id } as Pokemon))
            setMode("create")
            setData(defaultState)
        }
        else {
            dispatch(createPokemon({
                ...data,
                hp: 50,
                idAuthor: 1,
                type:"water"
            } as Pokemon))
            setData(defaultState)
        }

    }

    const onCancel = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (mode === "edit") {
            setMode("create")
        }
        setData(defaultState)
    }

    return <Form
        data={data}
        onSubmit={onSubmit}
        onCancel={onCancel}
        onChange={onChange}
        mode={mode}
    ></Form>
}