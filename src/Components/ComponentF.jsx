import React, { useContext } from 'react'
import { Component } from 'react'
import { UserConsumer, UserContext } from './UserContext'

function ComponentF() {
  const value = useContext(UserContext)
  return (
     <div>Hello{value}</div>
  
   
  )
}

export default ComponentF