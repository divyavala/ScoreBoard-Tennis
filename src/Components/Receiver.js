import React from 'react'

export default function Receiver({handleReceiver,name}) {
  return (
   <>
    <button onClick={handleReceiver}>{name}</button>
   </>
  )
}
