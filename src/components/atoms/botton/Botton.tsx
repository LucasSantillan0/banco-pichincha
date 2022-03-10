import s from "./Button.module.css"

type text = "button" | "submit"| "reset" | undefined

interface Props{
    text:string,
    onClick:Function,
    type?:text
}

export const Button = ({text, onClick, type="button"}:Props) => {

    return <button className={s.button} type={type} onClick={e => onClick(e)}>{text}</button>
}