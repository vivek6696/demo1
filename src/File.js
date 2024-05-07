import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './action'

function File() {
  const dispatch=useDispatch()
  const a=useSelector(rec=>rec.count)
  return (
    <>
    <button onClick={()=>dispatch(increment())}>+</button>
    <b>{a}</b>
    <button onClick={()=>dispatch(increment())}>-</button>
    </>
  )
}

export default File