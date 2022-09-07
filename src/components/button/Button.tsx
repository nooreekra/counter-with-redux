import React from 'react'

type PropsType = {
    buttonValue: string,
    invalid?: boolean,
    click: (value: string) => void,
}

export const Button = React.memo((props: PropsType) => {

    const checkValueAndClick = () => props.click(props.buttonValue)
    return  <button onClick={checkValueAndClick} disabled={props.invalid}>{props.buttonValue}</button> 
    
})
