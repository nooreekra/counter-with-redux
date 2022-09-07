import React, { ChangeEvent, useState } from 'react'
import { Button } from '../button/Button'
import style from '../../App.module.scss'

type PropsType = {
    counter: number,
    minValue: number,
    maxValue: number,
    invalid: boolean,
    changeMaxValue: (e:ChangeEvent<HTMLInputElement>) => void,
    changeMinValue: (e:ChangeEvent<HTMLInputElement>) => void,
    set: () => void
}

export const Set = React.memo((props: PropsType) => {
    //useState 2(props.maxValue)
    const [newMaxValue, setNewMaxValue] = useState(props.maxValue)
    const [newMinValue, setNewMinValue] = useState(props.minValue)

  return (
        <div className={style.container}>
            <div className={style.display__set}>
                <p><input type="number" onChange={props.changeMaxValue} className={props.invalid ? style.invalid : ""} defaultValue={newMaxValue}/></p>
                <p><input type="number" onChange={props.changeMinValue} className={props.invalid ? style.invalid : ""} defaultValue={newMinValue}/></p>
            </div>
            <div className={style.buttons}>
                <Button buttonValue="set" counter={props.counter} click={props.set} invalid={props.invalid}/>
            </div>
        </div>
    )
})
