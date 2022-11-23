import React, {ChangeEvent} from "react";
import s from '../App.module.css';
import Button from "../Button";

type CounterChangedType = {
    onSetValue: () => void
    maxValue: number
    startValue: number
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void

}

const CounterChanged = (props: CounterChangedType) => {





    return (
        <div className={s.Counter}>
            <div className={s.setInput}>
                <div className={s.setValue}>
                    <h2>max value:</h2>
                    <input key={'maxValue'}
                           value={props.maxValue}
                           onChange={props.onChangeMaxValue}
                           type={'number'}
                           step={'1'}
                           max={'10'}
                           min={'0'}/>
                </div>
                <div className={s.setValue}>
                    <h2>start value:</h2>
                    <input key={'setValue'}
                           value={props.startValue}
                           onChange={props.onChangeStartValue}
                           type={'number'}
                           step={'1'}
                           max={'10'}
                           min={'0'}/>
                </div>
            </div>
            <div className={'number' ? s.buttons : s.disabled}>
                <Button title={'set'}
                        onClick={props.onSetValue}
                        disabled={props.startValue === props.maxValue}
                />

            </div>
        </div>
    )
}

export default CounterChanged