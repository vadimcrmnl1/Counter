import React, {useState} from "react";
import s from './App.module.css';


const Buttons = () => {

    let [a, setA] = useState(0)

    const onCLickHandler = () => {
        setA(++a);
    }
    const onClickHandler0 = () => {
        setA(0);
    }

    return (
        <div className={s.tablo}>
            <div className={a>=5 ? s.numberFull : s.number}>{a}</div>
            <div className={s.buttons}>
                <button className={a>=5 ? s.disabled : s.button}
                        onClick={onCLickHandler}
                        disabled={a>=5}
                >inc</button>
                <button className={a<=0 ? s.disabled : s.button}
                        onClick={onClickHandler0}
                        disabled={a<=0}
                >reset</button>
            </div>
        </div>
    )

}


export default Buttons