import React, {ChangeEvent, useState} from 'react';
import Counter from "./Counter";
import CounterChanged from "./CounterChanged/CounterChanged";
import s from './App.module.css'


function App() {

    let [number, setNumber] = useState(0)
    let onCLickHandler = () => {
        setNumber(++number);
    }
    let onClickHandler0 = () => {
        setNumber(newValueNumber);
    }

    // let [error, setError] = useState<boolean>(false)

    let [newValueNumber, setNewValueNumber] = useState<number>(0)
    let [newMaxValueNumber, setNewMaxValueNumber] = useState<number>(0)

    let onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNewValueNumber(e.currentTarget.valueAsNumber)
    }
    let onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxValueNumber(e.currentTarget.valueAsNumber)
    }

    let onSetValue = () => {
        if (newValueNumber < newMaxValueNumber) {
            setNumber(newValueNumber)
            setNewMaxValueNumber(newMaxValueNumber)
        } else {
            setNumber(number)
        }
    }

    return (
        <div className={s.App}>
            <CounterChanged onSetValue={onSetValue}
                            maxValue={newMaxValueNumber}
                            startValue={newValueNumber}
                            onChangeStartValue={onChangeStartValue}
                            onChangeMaxValue={onChangeMaxValue}
            />
            <Counter onCLickHandler={onCLickHandler}
                     onClickHandler0={onClickHandler0}
                     numberValue={number}
                     maxValue={newMaxValueNumber}
                     startValue={newValueNumber}/>

        </div>
    )
}

export default App;
