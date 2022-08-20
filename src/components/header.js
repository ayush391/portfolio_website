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
          <div class='header-text'>
            <h1>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </h1>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Header;