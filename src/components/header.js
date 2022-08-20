import React from 'react'
import './header.css'

import DP from '../assets/dp.jpg'

export const Header = () => {
  return (
    <div>
      <section id='header'>

        <div class='banner'>


        </div>
          <div class='dp-container'>
            <img class='rounded dp' src={DP}></img>

          <div class='dp-text'>
            <h2 class='name'>Ayush Kapoor</h2>
            <h4 class='subtitle'>Web Developer</h4>
          </div>
          </div>

      </section>

    </div>
  )
}

export default Header;