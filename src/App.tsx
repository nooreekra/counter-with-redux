import React, { ChangeEvent, useState } from 'react';
import { Counter } from './components/counter/Counter';
import { Set } from './components/set/Set';

function App() {
  const buttonValue = ""
  const [counter, setCounter] = useState(0)
  const [mode, setMode] = useState(true)
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(10)
  const [invalid, setInvalid] = useState(false)

  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= minValue)  setInvalid(true)
    else  {
      setInvalid(false)
      setMaxValue(+e.currentTarget.value)
    }
  }

  const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value >= maxValue)  setInvalid(true) 
    else {
      setInvalid(false) 
      setMinValue(+e.currentTarget.value)
    }
  }
 
  const click = (buttonValue: string) => {
    if (buttonValue === "inc") {
      if (counter < maxValue) setCounter(counter + 1)
      else setCounter(counter)
    } 
    else if (buttonValue === "res") setCounter(0)
    else if (buttonValue === "set") setMode(false)
    else {
      setCounter(minValue)
      setMode(true)
    } 
  }

  if(mode) {
    return (<></>
        // <Counter 
        //   counter={counter} 
        //   buttonValue={buttonValue} 
        //   minValue={minValue}
        //   maxValue={maxValue}
        //   click={click}
        //   changeMaxValue={changeMaxValue} 
        //   changeMinValue={changeMinValue} 
        //   invalid={invalid}
        // />
    )
  } else {
    return(<></>
      // <Set 
      //   counter={counter} 
      //   buttonValue={buttonValue} 
      //   minValue={minValue}
      //   maxValue={maxValue}
      //   click={click}
      //   changeMaxValue={changeMaxValue} 
      //   changeMinValue={changeMinValue} 
      //   invalid={invalid}
      // />
    )
  }
}

export default App;
