import React, { ChangeEvent } from 'react'
import { Button } from '../button/Button'
import style from '../../App.module.scss'

type PropsType = {
    counter: number,
    buttonValue: string,
    minValue: number,
    maxValue: number,
    click: (value: string) => void,
    changeMaxValue: (e:ChangeEvent<HTMLInputElement>) => void,
    changeMinValue: (e:ChangeEvent<HTMLInputElement>) => void,
    invalid: boolean
}

export const Set = React.memo((props: PropsType) => {
  return (
        <div className={style.container}>
            <div className={style.display__set}>
                <p><input type="number" onChange={props.changeMaxValue} className={props.invalid ? style.invalid : ""} defaultValue={props.maxValue}/></p>
                <p><input type="number" onChange={props.changeMinValue} className={props.invalid ? style.invalid : ""} defaultValue={props.minValue}/></p>
            </div>
            <div className={style.buttons}>
                <Button buttonValue="done" counter={props.counter} click={props.click} invalid={props.invalid}/>
            </div>
        </div>
    )
})
