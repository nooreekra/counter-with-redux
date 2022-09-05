import React, { useCallback } from 'react'

type PropsType = {
    buttonValue: string,
    counter: number,
    click: (value: string) => void,
    invalid: boolean
}

export const Button = React.memo((props: PropsType) => {

    const checkValueAndClick = useCallback(() => {
        props.click(props.buttonValue)
    }, [props.click, props.buttonValue])
    
    return  <button onClick={checkValueAndClick} disabled={props.invalid}>{props.buttonValue}</button> 
})
