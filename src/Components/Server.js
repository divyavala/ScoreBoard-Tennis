import React from 'react'

export default function Server({handleServer,name}) {
  return (
   <>
    <button onClick={handleServer} >{name}</button>
  </>
  )
}
