import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Counter } from './components/counter/Counter';
import { Set } from './components/set/Set';
import { changeCounterValueAC, changeMaxValueAC, changeMinValueAC, incAC, resAC, setAC } from './store/reducers/reducer';
import { AppRootStateType } from './store/store';


export type CounterType = {
  counter: number,
  minValue: number,
  maxValue: number,
}

export function AppWithRedux() {
  const counter = useSelector<AppRootStateType, number>(state => state.counter)
  const minValue = useSelector<AppRootStateType, number>(state => state.minValue)
  const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue)
  const [invalid, setInvalid] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch()
  
  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= minValue)  setInvalid(true)
    else  {
      setInvalid(false)
      let newMaxValue = +e.currentTarget.value
      dispatch(changeMaxValueAC(newMaxValue))
    }
  }

  const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value >= maxValue)  setInvalid(true) 
    else {
      setInvalid(false) 
      let newMinValue = +e.currentTarget.value
      dispatch(changeMinValueAC(newMinValue))
    }
  }

  const inc = useCallback(() => dispatch(incAC()), [])
  const res = useCallback(() => dispatch(resAC()), [])
  const toSet = useCallback(() => setEditMode(true), [])
  const set = useCallback(() => {
    dispatch(setAC())
    setEditMode(false)
  }, [])

  useEffect(() => { 
    let counterAsString = localStorage.getItem('counter')
    let maxValueAsString = localStorage.getItem('maxValue')
    let minValueAsString = localStorage.getItem('minValue')
    let modeValueAsString = localStorage.getItem('modeValue')

    if (counterAsString) {
      let newCounterValue = JSON.parse(counterAsString)
      dispatch(changeCounterValueAC(newCounterValue))
    }

    if (maxValueAsString) {
      let newMaxValue = JSON.parse(maxValueAsString)
      dispatch(changeMaxValueAC(newMaxValue))
    }
    
    if (minValueAsString) {
      let newMinValue = JSON.parse(minValueAsString)
      dispatch(changeMinValueAC(newMinValue))
    }
    if (modeValueAsString) {
      let newModeValue = JSON.parse(modeValueAsString)
      setEditMode(newModeValue) 
    }
    }, [])

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter)) 
    localStorage.setItem('maxValue', JSON.stringify(maxValue))  
    localStorage.setItem('minValue', JSON.stringify(minValue))
    localStorage.setItem('modeValue', JSON.stringify(editMode))       
  }, [counter, maxValue, minValue, editMode])


  return editMode 
  ? 
    <Set 
    counter={counter}   
    minValue={minValue}
    maxValue={maxValue}
    invalid={invalid}
    changeMaxValue={changeMaxValue} 
    changeMinValue={changeMinValue} 
    set={set}
    />
  :  
    <Counter 
        counter={counter} 
        minValue={minValue}
        maxValue={maxValue}
        invalid={invalid}
        toSet={toSet}
        res={res}
        inc={inc}
        changeMaxValue={changeMaxValue} 
        changeMinValue={changeMinValue} 
      />
}

