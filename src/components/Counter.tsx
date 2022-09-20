import React, {useEffect, useState} from 'react';
import Buttons from "./Buttons";
import Display from "./Display";

function Counter() {

    const START_VALUE = 0
    const MIN_VALUE = -10
    const MAX_VALUE = 10

    let[counter, setCounter] = useState(START_VALUE)

    const increment = () => {
        if(counter < MAX_VALUE)
            setCounter(counter + 1)
    }

    const decrement = () => {
        if(counter > MIN_VALUE)
            setCounter(counter - 1)
    }

    const reset = () => {setCounter(START_VALUE)}

    useEffect( () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    }, [])

     useEffect(() => {
         localStorage.setItem('counterValue', JSON.stringify(counter))
     }, [counter])

    return (
        <div>
            <Buttons increment={increment} decrement={decrement} reset={reset} MIN_VALUE={MIN_VALUE} MAX_VALUE={MAX_VALUE} counter={counter}/>
            <Display MIN_VALUE={MIN_VALUE} MAX_VALUE={MAX_VALUE} counter={counter}/>
        </div>
    )
}

export default Counter