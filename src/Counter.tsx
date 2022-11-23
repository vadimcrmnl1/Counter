import React from "react";
import s from "./App.module.css";
import Button from "./Button";

type CounterTypeProps = {
    onCLickHandler: () => void
    onClickHandler0: () => void
    numberValue: number
    maxValue: number
    startValue: number
}

const Counter = (props: CounterTypeProps) => {

        return (
        <div className={s.Counter}>
            <div className={props.numberValue >= props.maxValue ? s.numberFull : s.number}>{props.numberValue}</div>
            <div className={s.buttons}>
                <Button title={'inc'}
                        onClick={props.onCLickHandler}
                        disabled={props.maxValue === props.numberValue}
                />
                <Button title={'reset'}
                        onClick={props.onClickHandler0}
                        disabled={props.numberValue <= props.startValue}
                />
            </div>
        </div>
    )
}

export default Counter