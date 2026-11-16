"use client"

import {useState, } from 'react'

function Dashbord() {
    const [name, setName] = useState('')
    console.log('client side rendering')
  return (
    <>
      <h1>Dashbord</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </>
  )
}

export default Dashbord