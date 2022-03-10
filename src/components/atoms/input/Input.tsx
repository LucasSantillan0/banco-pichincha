import s from "./Input.module.css"

interface Props{

    onChange:Function,
    type?:string,
    value?:string,
    name?:string
}

export const Input = ({onChange, type="text", value, name="name"}:Props) => {

    return <input className={s.input} type={"text"} onChange={e => onChange(e)} value={value} name={name} ></input>
}