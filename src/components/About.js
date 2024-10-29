import React from 'react';
import Button from './Button';
import Food from '../assets/restaurant-food.jpg'

function About() {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <h1>About Little Lemon</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed eros sem. Pellentesque congue varius enim, a maximus sapien congue vitae. Proin aliquam, massa ac scelerisque sollicitudin, ligula est tristique arcu, ac luctus turpis leo et orci. Pellentesque venenatis ac urna et sollicitudin. Aliquam quis sapien hendrerit, interdum neque id, sagittis dolor. Etiam facilisis risus ac lorem mollis, at ullamcorper mauris consequat. Nunc quam lorem, consectetur aliquam convallis nec, fermentum a dui. Aliquam auctor et lorem in dictum.</p>
        <p>Integer semper mauris arcu, et egestas elit cursus a. Phasellus vitae metus felis. Etiam in luctus sem. Maecenas nec vehicula quam, sit amet ultricies felis. Vestibulum sed egestas ipsum. Morbi eu diam malesuada justo mattis ornare vitae vel odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet fermentum urna, convallis rutrum arcu porttitor auctor. Morbi aliquet aliquet mi, quis tincidunt urna sodales non. Nulla non augue diam. Maecenas sit amet est dolor. Aliquam erat volutpat. Cras dignissim molestie magna, convallis ultrices arcu tempor nec. Cras euismod tellus et libero placerat tempus.</p>
        <p>Duis maximus magna tristique, pulvinar nisl quis, accumsan orci. Morbi suscipit pulvinar risus a posuere. Quisque sagittis mi ac fringilla condimentum. Nunc quis libero sagittis, viverra erat id, pharetra dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut odio posuere, sagittis neque a, aliquet eros. Nulla laoreet arcu ligula, at mollis urna tempus eget. Cras magna ante, ornare nec velit ac, egestas sollicitudin ligula. Suspendisse a dictum magna. Praesent sed nisl lorem. Duis tincidunt condimentum eros, quis tristique augue malesuada nec. Ut vitae feugiat diam. Quisque pretium magna eu lacinia ultrices.</p>
      </div>
      <div>
        <img src={Food} alt="Restaurant Food"/>
      </div>
    </div>
  )
}

export default About;