import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        document.title = `Clicked ${count} times`
        console.log('updating document title')
    },[count])


  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target)}/>
        <button onClick={() => setCount(count +1 )}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne