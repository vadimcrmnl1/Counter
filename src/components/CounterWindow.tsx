import React from "react";
import s from "../App.module.css";
import {Button} from "./Button";
import {ErrorType} from "./Counter";


type CounterWindowType = {
    value: number
    setValue: (value: number) => void
    startValue: number
    maxValue: number
    error: ErrorType
    setError: (error: ErrorType) => void

}

export const CounterWindow = (props: CounterWindowType) => {

    const incValue = () => {
        props.setValue(props.value + 1)
    }
    const ResetValue = () => {
        props.setValue(props.startValue)
    }

    const numberFullClass = props.value >= props.maxValue ? s.numberFull : s.number
    const disabledSet = props.startValue >= props.maxValue ? props.startValue < 0 : props.maxValue === props.value
    const displayWindow = () => {
        if (props.startValue < 0) {
            return <div className={s.error}>incorrect value</div>
        }

        if (props.startValue >= props.maxValue) {
            return <div className={s.error}>incorrect value</div>
        } else {
            return <div className={numberFullClass}>{props.value}</div>
        }

    }

    return (
        <div className={s.Counter}>
            {displayWindow()}
            {/*<div className={s.number}>{props.value}</div>*/}
            <div className={s.buttons}>
                <Button title={'inc'}
                        onClick={incValue}
                        disabled={disabledSet}

                />
                <Button title={'reset'}
                        onClick={ResetValue}
                        disabled={false}

                />
            </div>
        </div>
    )
}

