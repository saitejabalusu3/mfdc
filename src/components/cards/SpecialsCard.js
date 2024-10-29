import React from 'react';

function SpecialsCard(props) {
  return (
    <div className="specials-card">
        <img
          src={require(`../../assets/${props.imageUrl}`)}
          alt={props.imageUrl}
        />
        <h2>{props.dish}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default SpecialsCard;