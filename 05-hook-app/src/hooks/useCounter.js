import { useState } from "react"

const useCounter = (inicialValue = 0 ) => {
 
    const [counter, setCounter] = useState(inicialValue)

    const add = (value = 1) =>{
        setCounter(counter + value);
    }

    const sustract = () =>{
        setCounter(counter - 1);
    }

    const reset = () =>{
        setCounter(0);
    }


    return {
        counter,add,sustract,reset
    }
}

export default useCounter