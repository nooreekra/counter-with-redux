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
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch()
  
  const inc = useCallback(() => {
    if (counter < maxValue) dispatch(incAC())
    else dispatch(changeCounterValueAC(counter))
  }, [])

  const res = useCallback(() => dispatch(resAC()), [])
  const toSet = useCallback(() => setEditMode(true), [])
  const set = useCallback((min: number, max: number) => {
    dispatch(setAC(min, max))
    setEditMode(false)
  }, [])

  useEffect(() => { 
    let counterAsString = localStorage.getItem('counter')
    let maxValueAsString = localStorage.getItem('maxValue')
    let minValueAsString = localStorage.getItem('minValue')

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
  
    }, [])

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter)) 
    localStorage.setItem('maxValue', JSON.stringify(maxValue))  
    localStorage.setItem('minValue', JSON.stringify(minValue))  
  }, [counter, maxValue, minValue])

  return editMode 
  ? 
    <Set 
      counter={counter}   
      minValue={minValue}
      maxValue={maxValue}
      set={set}
    />
  :  
    <Counter 
      counter={counter} 
      minValue={minValue}
      maxValue={maxValue}
      toSet={toSet}
      res={res}
      inc={inc} 
    />
}

