import s from "./Slider.module.css"

interface Props{
    onChange:Function,
    value?:number,
    name?:string
}

export const Slider = ( {onChange, value, name="name"}:Props ) => {

    return <>0 <input type={"range"} className={s.slider} onChange={e => onChange(e)} value={value} name={name}>{}</input> 100</>
}