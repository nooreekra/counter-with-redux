import { ChangeEvent } from "react";
import { CounterType } from "../../AppWithRedux";



export type ClickActionType = {
    type: 'CLICK'
    buttonValue: string
}

export type ChangeMaxValueActionType = {
    type: 'CHANGE-MAX-VALUE'
    e: ChangeEvent<HTMLInputElement>
}

export type ChangeMinValueActionType = {
    type: 'CHANGE-MIN-VALUE'
    e: ChangeEvent<HTMLInputElement>
}

export type GetLocalStorageActionType = {
    type: 'GET-LOCAL-STORAGE'
}


const initialState: CounterType = {
    counter: 0,
    buttonValue: "",
    minValue: 0,
    maxValue: 10,
    mode: true,
    invalid: false
}

type ActionsType = ClickActionType | ChangeMaxValueActionType | ChangeMinValueActionType | GetLocalStorageActionType 

export const reducer = (state: CounterType = initialState, action: ActionsType): CounterType => {
    switch(action.type) {
        case 'CLICK': {
            const stateCopy = {...state}
            if (action.buttonValue === "inc") {
                if (stateCopy.counter < stateCopy.maxValue) stateCopy.counter = stateCopy.counter + 1
                else stateCopy.counter = stateCopy.counter
              } 
              else if (action.buttonValue === "res") stateCopy.counter = stateCopy.minValue
              else if (action.buttonValue === "set") stateCopy.mode = false
              else {
                stateCopy.counter = stateCopy.minValue
                stateCopy.mode = true
              }
            return stateCopy
        }
        case 'CHANGE-MAX-VALUE': {
            const stateCopy = {...state}
            if (+action.e.currentTarget.value <= stateCopy.minValue)  stateCopy.invalid = true
            else  {
                stateCopy.invalid = false
                stateCopy.maxValue = +action.e.currentTarget.value
            }
            return stateCopy
        }
        case 'CHANGE-MIN-VALUE': {
            const stateCopy = {...state}
            if (+action.e.currentTarget.value >= stateCopy.maxValue)  stateCopy.invalid = true 
            else {
                stateCopy.invalid = false
                stateCopy.minValue = +action.e.currentTarget.value
            }
            return stateCopy
        }

        case 'GET-LOCAL-STORAGE': {
            const stateCopy = {...state}
            let counterAsString = localStorage.getItem('counter')
            let maxValueAsString = localStorage.getItem('maxValue')
            let minValueAsString = localStorage.getItem('minValue')
            let modeValueAsString = localStorage.getItem('modeValue')
            if (counterAsString) {
                let newValue = JSON.parse(counterAsString)
                stateCopy.counter = newValue
            }

            if (maxValueAsString) {
                let newMaxValue = JSON.parse(maxValueAsString)
                stateCopy.maxValue = newMaxValue
            }
            
            if (minValueAsString) {
                let newMinValue = JSON.parse(minValueAsString)
                stateCopy.minValue = newMinValue
            }

            if (modeValueAsString) {
                let newModeValue = JSON.parse(modeValueAsString)
                stateCopy.mode = newModeValue
            }
            return stateCopy
        }

        default:
            return state;
    }
}

export const clickAC = (buttonValue: string): ClickActionType => {
    return { type: 'CLICK', buttonValue}
}

export const changeMaxValueAC = (e: ChangeEvent<HTMLInputElement>): ChangeMaxValueActionType => {
    return { type: 'CHANGE-MAX-VALUE', e}
}

export const changeMinValueAC = (e: ChangeEvent<HTMLInputElement>): ChangeMinValueActionType => {
    return { type: 'CHANGE-MIN-VALUE', e}
}

export const getLocalStorageAC = (): GetLocalStorageActionType => {
    return { type: 'GET-LOCAL-STORAGE'}
}
