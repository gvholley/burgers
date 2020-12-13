import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Burgers = () => {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {

    axios.get('/api/v1/burgers.json')
    .then( resp => {
      setBurgers(resp.data.data)
    } )
    .catch( resp => )

  }, [burgers.length])

  const list = burgers.map (item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  })
  return (
    <React.Fragment>
  <div>This is the Burgers#index view for our app.
  <ul>{list}</ul>
  </div>
  </React.Fragment>
  )
}

export default Burgers
