import React from 'react'
import Button from './Button';
import SpecialsCard from './cards/SpecialsCard';

function Specials() {
  const specials = [
    {
      imageUrl: "greek-salad.jpg",
      dish: "Greek salad",
      description: "The famous greek salad of crispy lettuce, pepeprs, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
      imageUrl: "bruschetta.svg",
      dish: "Bruschetta",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasonsed with salt and olive oil."
    },
    {
      imageUrl: "lemon-dessert.jpg",
      dish: "Lemon Dessert",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
  ];

  return (
    <div className="specials-container">
      <h1>Specials</h1>
      <br/>
      <div className="specials-cards">
        {specials.map((special, idx) => {
          return (
            <SpecialsCard
              key = {idx}
              imageUrl = {special.imageUrl}
              dish = {special.dish}
              description = {special.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Specials;