import { Button } from "../../atoms/botton/Botton"
import { Input } from "../../atoms/input/Input"
import { Slider } from "../../atoms/slider/Slider"
import { ChangeEvent } from "react"
import { mode, NewPokemon } from "../../templates/pokemonForm/PokemonForm"
import s from "./Form.module.css"

interface Props {
    onChange: Function,
    onSubmit: Function,
    onCancel: Function,
    data: NewPokemon,
    mode: mode
}

export const Form = ({ onChange, data, onSubmit, onCancel, mode }: Props) => {

    const { name, attack, defense, image } = data

    return (
        <div className={s.container}>
            <h3>Nuevo Pokemon</h3>
            <form>
                <div>
                    <div>
                        <label>Nombre:</label>
                        <Input
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                            value={name}
                            name="name"
                        />
                    </div>
                    <div>
                        <label>Ataque:</label>
                        <Slider onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                            value={attack}
                            name="attack"
                        />
                    </div>
                </div>
                <div>
                    <div>
                    <label>Imagen:</label>
                        <Input onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                            value={image}
                            name="image"
                        />
                    </div>
                    <div>
                        <label>Defensa:</label>
                        <Slider onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                            value={defense}
                            name="defense"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <Button
                            type="submit"
                            text={mode === "edit" ? "📼 Actualizar" : "📼 Guardar"}
                            onClick={(e: ChangeEvent<HTMLInputElement>) => onSubmit(e)}
                        />
                        <Button
                            type="button"
                            text={mode === "edit" ? "✖️ Cancelar" : "✖️ Borrar"}
                            onClick={(e: ChangeEvent<HTMLInputElement>) => onCancel(e)}
                        /></div>
                </div>
            </form>
        </div>
    )
}