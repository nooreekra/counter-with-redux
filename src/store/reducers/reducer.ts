import { CounterType } from "../../AppWithRedux";


export type IncActionType = { type: 'INC' }
export type ResActionType = { type: 'RES' }
export type SetActionType = { 
    type: 'SET' 
    min: number
    max: number
}

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
            return {
                ...state,
                counter: state.counter + 1
            }
        }

        case 'RES': {
            return {
                ...state,
                counter: state.minValue
            }
        }
        
        case 'SET': {
            return {
                ...state, 
                counter: action.min,
                minValue: action.min,
                maxValue: action.max
            }
        }

        case 'CHANGE-MAX-VALUE': {
            return {
                ...state,
                maxValue: action.newMaxValue
            }
        }

        case 'CHANGE-MIN-VALUE': {
            return {
                ...state,
                minValue: action.newMinValue
            }
        }

        case 'CHANGE-COUNTER-VALUE': {
            return {
                ...state,
                counter: action.newCounterValue
            }
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

export const setAC = (min: number, max: number): SetActionType => {
    return { type: 'SET', min, max}
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
