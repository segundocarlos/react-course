import { useState } from "react"

export const CounterApp = () => {

const [counter, setCounter] = useState({
    counter1:10,
    counter2:20,
    counter3:30,
});

const {counter1, counter2, counter3} = counter;

  return (
    <>
        <h1>01- Simple Counter</h1>

        <h2>Counter 1: {counter1}</h2>
        <h2>Counter 2: {counter2}</h2>
        <h2>Counter 3: {counter3}</h2>
        <button  
            onClick={ 
                () => setCounter({
                 ...counter,
                 counter1: counter1 + 1,
                })
                }>+1
        </button>
        <button  
            onClick={ 
                () => setCounter({
                 ...counter,
                 counter2: counter2 + 1,
                })
                }>+1
        </button>
        <button  
            onClick={ 
                () => setCounter({
                 ...counter,
                 counter3: counter3 + 1,
                })
                }>+1
        </button>
        <hr/>
    </>
  )
}

export default CounterApp