import React from 'react'
import { Button } from '../button/Button'
import style from '../../App.module.scss'


type PropsType = {
    counter: number,
    minValue: number,
    maxValue: number,
    inc: () => void,
    res: () => void,
    toSet: () => void,
}

export const Counter = React.memo((props: PropsType) => {
    return (
        <div className={style.container}>
            <div className={style.display__counter}>
                <p className={props.counter === props.maxValue ? style.red : ''}>{props.counter}</p>
            </div>
            <div className={style.buttons}>
                <div className={props.counter === props.maxValue ? style.disabled : ''}>
                    <Button 
                        buttonValue="inc"  
                        click={props.inc}
                    />
                    </div>
                <div className={props.counter === props.minValue ? style.disabled : ''}>
                    <Button 
                        buttonValue="res" 
                        click={props.res}
                    />
                </div>
                <div>
                    <Button 
                        buttonValue="set"
                        click={props.toSet}
                    />
                </div>
            </div>
        </div>
    )
})
