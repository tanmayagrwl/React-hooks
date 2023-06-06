import React from 'react'
import { useState, useEffect } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(0)


  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer