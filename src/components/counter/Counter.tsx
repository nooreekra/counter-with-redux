import React, { ChangeEvent } from 'react'
import { Button } from '../button/Button'
import style from '../../App.module.scss'


type PropsType = {
    counter: number,
    minValue: number,
    maxValue: number,
    invalid: boolean,
    inc: () => void,
    res: () => void,
    toSet: () => void,
    changeMaxValue: (e:ChangeEvent<HTMLInputElement>) => void,
    changeMinValue: (e:ChangeEvent<HTMLInputElement>) => void
}

export const Counter = React.memo((props: PropsType) => {
    return (
        <div className={style.container}>
            <div className={style.display__counter}>
                <p className={props.counter === props.maxValue ? style.red : ''}>{props.counter}</p>
            </div>
            <div className={style.buttons}>
                <div className={props.counter === props.maxValue ? style.disabled : ''}><Button buttonValue="inc" counter={props.counter} click={props.inc} invalid={props.invalid}/></div>
                <div className={props.counter === props.minValue ? style.disabled : ''}><Button buttonValue="res" counter={props.counter} click={props.res} invalid={props.invalid}/></div>
                <div><Button buttonValue="set" counter={props.counter} click={props.toSet} invalid={props.invalid}/></div>
            </div>
        </div>
    )
})
