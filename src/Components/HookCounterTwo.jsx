import React,{useState} from 'react'

function HookCounterTwo() {
  const initialCount= 0
  const[count, setCount] = useState(initialCount)
    return (
    <div>
        Count : {count}
        <button onClick={()=>setCount(prevcount => prevcount + 1) }>Increment </button>
        <button onClick={()=>setCount(prevcount => prevcount -1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default HookCounterTwo