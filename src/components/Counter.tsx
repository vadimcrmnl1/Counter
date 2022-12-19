import React, {useState} from 'react';
import {CounterWindow} from "./CounterWindow";
import {CounterChanged} from "./CounterChanged";
import s from '../App.module.css'

const countReducer = (state: number, action: any): number => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'RESET':
            return 0
        case 'SET':
            return action.value
        default:
            return state
    }
}
export type ErrorType = 'incorrect value' | 'enter values and press "SET"' | null
export type UseStateType = {
    startValue: number
    maxValue: number
}
export const Counter = () => {


    let [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('START_VALUE')))
    let [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('MAX_VALUE')))
    let [value, setValue] = useState<number>(startValue)
    let [error, setError] = useState<ErrorType>('enter values and press "SET"')

    let setToLocalStorage = () => {
        localStorage.setItem('START_VALUE', JSON.stringify(startValue))
        localStorage.setItem('MAX_VALUE', JSON.stringify(maxValue))
        setError(null)
        // setValue(value)
    }

    return (
        <div className={s.App}>
            <CounterChanged setStartValue={setStartValue}
                            setMaxValue={setMaxValue}
                            startValue={startValue}
                            maxValue={maxValue}
                            setValue={setValue}
                            // error={error}
                            // setError={setError}
                            setToLocalStorage={setToLocalStorage}
            />
            <CounterWindow startValue={startValue}
                           maxValue={maxValue}
                           value={value}
                           setValue={setValue}
                           error={error}
                           setError={setError}
            />
        </div>
    )
    // const [value, dispatchValue] = useReducer(countReducer, 0)
    // in setValue = dispatchValue({type: 'SET', value: startValue})
    // let onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     setNewValueNumber(e.currentTarget.valueAsNumber)
    // }
    // let onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     setNewMaxValueNumber(e.currentTarget.valueAsNumber)
    // }
    //
    // let onSetValue = () => {
    //     if (newValueNumber < newMaxValueNumber) {
    //         setNumber(newValueNumber)
    //         setNewMaxValueNumber(newMaxValueNumber)
    //     } else {
    //         error && setError(true)
    //     }
    // }

    // return (
    //     <div className={s.App}>
    //         <CounterChanged onSetValue={onSetValue}
    //                         maxValue={newMaxValueNumber}
    //                         startValue={newValueNumber}
    //                         onChangeStartValue={onChangeStartValue}
    //                         onChangeMaxValue={onChangeMaxValue}
    //         />
    //         <CounterWindow onCLickHandler={onCLickHandler}
    //                        onClickHandler0={onClickHandler0}
    //                        error={false}
    //                        numberValue={number}
    //                        maxValue={newMaxValueNumber}
    //                        startValue={newValueNumber}/>
    //     </div>
    // )
}

