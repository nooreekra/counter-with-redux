import React, { ChangeEvent, useState } from 'react'
import { Button } from '../button/Button'
import style from '../../App.module.scss'

type PropsType = {
    counter: number,
    minValue: number,
    maxValue: number,
    set: (min: number, max: number) => void
}

export const Set = React.memo((props: PropsType) => {

    const [newMaxValue, setNewMaxValue] = useState(props.maxValue)
    const [newMinValue, setNewMinValue] = useState(props.minValue)
    const [invalid, setInvalid] = useState(false)

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxValue(+e.currentTarget.value)
        if (+e.currentTarget.value <= newMinValue) setInvalid(true)
        else setInvalid(false) 
    }
    
    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMinValue(+e.currentTarget.value)
        if (+e.currentTarget.value >= newMaxValue) setInvalid(true) 
        else setInvalid(false)
    }

    const buttonHandler = () => props.set(newMinValue, newMaxValue)

  return (
        <div className={style.container}>
            <div className={style.display__set}>
                <p>
                    <input 
                        type="number" 
                        onChange={changeMaxValue} 
                        className={invalid ? style.invalid : ""} 
                        defaultValue={newMaxValue}
                    />
                </p>
                <p>
                    <input 
                        type="number" 
                        onChange={changeMinValue} 
                        className={invalid ? style.invalid : ""} 
                        defaultValue={newMinValue}
                    />
                </p>
            </div>
            <div className={style.buttons}>
                <Button buttonValue="set" click={buttonHandler} invalid={invalid}/>
            </div>
        </div>
    )
})
