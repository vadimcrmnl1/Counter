import React, {ChangeEvent} from "react";
import s from '../App.module.css';
import {Button} from "./Button";

type CounterChangedType = {
    startValue: number
    maxValue: number
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    // error: ErrorType
    // setError: (error: ErrorType) => void
    setToLocalStorage: () => void
    setValue: (value: any) => void
    // value: UseStateType
}

export const CounterChanged = (props: CounterChangedType) => {
    // let [values, setValues] = useState({startValue: 0, maxValue: 0})
    let onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
    }
    let onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber)
    }
    let onSetClick = () => {
        props.setValue(props.startValue)
        props.setToLocalStorage()

    }




    const disabledSet = props.startValue >= props.maxValue
        ? true : props.startValue < 0
    const finalInputClass = disabledSet ? s.errorInput : s.defaultInput

    return (
        <div className={s.Counter}>
            <div className={s.setInput}>
                <div className={s.setValue}>
                    <h2>max value:</h2>
                    <input className={s.defaultInput}
                        key={'MAX_VALUE'}
                           value={props.maxValue}
                           onChange={onChangeMaxValue}
                           type={'number'}

                    />
                </div>
                <div className={s.setValue}>
                    <h2>start value:</h2>
                    <input className={finalInputClass}
                        key={'START_VALUE'}
                        value={props.startValue}
                        onChange={onChangeStartValue}
                        type={'number'}

                    />
                </div>
            </div>
            <div className={'number' ? s.buttons : s.disabled}>
                <Button key={'setValue'}
                        title={'set'}
                        onClick={onSetClick}
                        disabled={disabledSet}

                />

            </div>
        </div>
    )
}

