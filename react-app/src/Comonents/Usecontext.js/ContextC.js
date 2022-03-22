import React ,{ useContext}from 'react'
import { Biodata } from './ContextA'

const ContextC = () => {
    const name = useContext(Biodata)
  return (
    <div>ContextC {name}</div>
  )
}

export default ContextC