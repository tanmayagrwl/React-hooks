import React, {component} from "react"

import ComponentC from "./Components/ComponentC"
import { UserProvider } from "./Components/UserContext"
function App() {

  return (
    <>
    <UserProvider value="Tanmay">
       <ComponentC />
     </UserProvider>
   
    </>
  )
}

export default App
