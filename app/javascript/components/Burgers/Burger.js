import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'

const Burger = (props) => {
  return (
    <div className="card">
      <div className="burger-image">
      <img src={props.attribute.image} alt={props.attribute.name} />
      </div>
      <div className="burger-name">{props.attribute.name}</div>
      <div className="burger-score">{props.attribute.avg_score}</div>
      <div className="burger-link">
      <Link to={`/burgers/${props.attributes.slug}`}>View Restaurant
      </Link>
      </div>
    </div>

    )
}

export default Burger
