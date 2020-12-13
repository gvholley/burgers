import React from 'react'

const Burger = (props) => {
  return (
    <div className="card">
      <div className="burger-image">
      <img src={props.attribute.image} alt={props.attribute.name} />
      </div>
      <div className="burger-name">{props.attribute.name}</div>
      <div className="burger-score">{props.attribute.avg_score}</div>
      <div className="burger-link"><a href={`/burgers/${props.attributes.slug}`}>View Restaurant</a>
      </div>
    </div>

    )
}

export default Burger
