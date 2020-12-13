import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Burger from './Burger'

const Burgers = () => {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {

    axios.get('/api/v1/burgers.json')
    .then( resp => {
      setBurgers(resp.data.data)
    } )
    .catch( resp => resp.data.data)

  }, [burgers.length])

  const grid = burgers.map ( item => {
    return (
      <Burger
      key={item.attributes.name}
      attributes = {item.attributes}
      />
      )
  })

  const list = burgers.map (item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  })
  return (
    <React.Fragment>
    <div className="header">
      <h1>BurgerRate</h1>
      <div className="grid">
      <ul>{grid}</ul>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Burgers
