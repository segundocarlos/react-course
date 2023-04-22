import useCounter from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
 
 const {counter,add,sustract,reset} = useCounter();

  return (
    <>
        <h1>01-Counter with hook: {counter}</h1>
        {/* para que el incremento sea por parametro y no el evento*/}
        <button className="btn btn-primary" onClick={() => add (2)}>+1</button>  
        {/* se envia todo el evento */}
        <button className="btn btn-primary" onClick={reset}>Restet</button>
        <button className="btn btn-primary" onClick={sustract}>-1</button>
        
        <hr/>
    </>
  )
}
