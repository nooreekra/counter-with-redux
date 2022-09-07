import { ChangeEvent } from "react";
import { CounterType } from "../../AppWithRedux";


export type IncActionType = { type: 'INC' }
export type ResActionType = { type: 'RES' }
export type SetActionType = { type: 'SET' }

export type ChangeMaxValueActionType = {
    type: 'CHANGE-MAX-VALUE'
    newMaxValue: number
}

export type ChangeMinValueActionType = {
    type: 'CHANGE-MIN-VALUE'
    newMinValue: number
}

export type ChangeCounterValueActionType = {
    type: 'CHANGE-COUNTER-VALUE'
    newCounterValue: number
}


const initialState: CounterType = {
    counter: 0,
    minValue: 0,
    maxValue: 10,
}

type ActionsType = IncActionType | ResActionType | SetActionType | ChangeMaxValueActionType | ChangeMinValueActionType | ChangeCounterValueActionType 

export const reducer = (state: CounterType = initialState, action: ActionsType): CounterType => {
    switch(action.type) {
        case 'INC': {
            const stateCopy = {...state}
            if (stateCopy.counter < stateCopy.maxValue) stateCopy.counter = stateCopy.counter + 1
            else stateCopy.counter = stateCopy.counter
            return stateCopy
        }

        case 'RES': {
            const stateCopy = {...state} 
            stateCopy.counter = stateCopy.minValue
            return stateCopy
        }
        
        case 'SET': {
            const stateCopy = {...state} 
            stateCopy.counter = stateCopy.minValue
            return stateCopy
        }

        case 'CHANGE-MAX-VALUE': {
            const stateCopy = {...state}
            stateCopy.maxValue = action.newMaxValue
            return stateCopy
        }
        case 'CHANGE-MIN-VALUE': {
            const stateCopy = {...state}
            stateCopy.minValue = action.newMinValue
            return stateCopy
        }

        case 'CHANGE-COUNTER-VALUE': {
            const stateCopy = {...state}
            stateCopy.counter = action.newCounterValue
            return stateCopy
        }

        default:
            return state;
    }
}

export const incAC = (): IncActionType => {
    return { type: 'INC'}
}

export const resAC = (): ResActionType => {
    return { type: 'RES'}
}

export const setAC = (): SetActionType => {
    return { type: 'SET'}
}

export const changeMaxValueAC = (newMaxValue: number): ChangeMaxValueActionType => {
    return { type: 'CHANGE-MAX-VALUE', newMaxValue}
}

export const changeMinValueAC = (newMinValue: number): ChangeMinValueActionType => {
    return { type: 'CHANGE-MIN-VALUE', newMinValue}
}

export const changeCounterValueAC = (newCounterValue: number): ChangeCounterValueActionType => {
    return { type: 'CHANGE-COUNTER-VALUE', newCounterValue}
}
