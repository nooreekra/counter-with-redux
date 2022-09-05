import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Counter } from './components/counter/Counter';
import { Set } from './components/set/Set';
import { changeMaxValueAC, changeMinValueAC, clickAC, getLocalStorageAC } from './store/reducers/reducer';
import { AppRootStateType } from './store/store';


export type CounterType = {
  counter: number,
  buttonValue: string,
  minValue: number,
  maxValue: number,
  mode: boolean,
  invalid: boolean
}

function App() {
  const buttonValue = useSelector<AppRootStateType, string>(state => state.buttonValue)
  const counter = useSelector<AppRootStateType, number>(state => state.counter)
  const mode = useSelector<AppRootStateType, boolean>(state => state.mode)
  const minValue = useSelector<AppRootStateType, number>(state => state.minValue)
  const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue)
  const invalid = useSelector<AppRootStateType, boolean>(state => state.invalid)
  const dispatch = useDispatch()
  
  const changeMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => { dispatch(changeMaxValueAC(e)) }, [])
  const changeMinValue = useCallback((e: ChangeEvent<HTMLInputElement>) => { dispatch(changeMinValueAC(e)) }, [])
  const click = useCallback((buttonValue: string) => { dispatch(clickAC(buttonValue)) }, [])

  useEffect(() => { dispatch(getLocalStorageAC()) }, [])
  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter)) 
    localStorage.setItem('maxValue', JSON.stringify(maxValue))  
    localStorage.setItem('minValue', JSON.stringify(minValue))
    localStorage.setItem('modeValue', JSON.stringify(mode))       
  }, [counter, maxValue, minValue, mode])

  if(mode) {
    return (
        <Counter 
          counter={counter} 
          buttonValue={buttonValue} 
          minValue={minValue}
          maxValue={maxValue}
          click={click}
          changeMaxValue={changeMaxValue} 
          changeMinValue={changeMinValue} 
          invalid={invalid}
        />
    )
  } else {
    return(
      <Set 
        counter={counter} 
        buttonValue={buttonValue} 
        minValue={minValue}
        maxValue={maxValue}
        click={click}
        changeMaxValue={changeMaxValue} 
        changeMinValue={changeMinValue} 
        invalid={invalid}
      />
    )
  }
}
export default App;

