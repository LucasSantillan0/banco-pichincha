import { Pokemon } from "../../../features/reducer/pokemonSlice"
import { PokemonItem } from "../../atoms/pokemonItem/PokemonItem"
import s from "./Table.module.css"

interface Props {
    headers: string[],
    data: Pokemon[]
}

export const Table = ({ headers, data }: Props) => {

    return (
        <table className={s.table}>
            <thead>
                <tr>
                     { headers.map( e => <th>{e}</th> ) }
                </tr>
            </thead>
            <tbody>
                { data.map(e =>
                    <PokemonItem
                        name={e.name}
                        key={e.id}
                        id={e.id}
                        image={e.image}
                        attack={e.attack}
                        defense={e.defense}
                        type={e.type}
                        hp={e.hp}
                        idAuthor={e.idAuthor}
                    /> ) }
            </tbody>
        </table>
    )
}