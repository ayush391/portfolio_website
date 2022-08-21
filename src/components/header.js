import React from 'react'
import './header.css'

import DP from '../assets/dp.jpg'
import DP2 from '../assets/dp_ayush.jpg'
import DP3 from '../assets/dp_ayush_filter.png'
import DP4 from '../assets/dp_ayush_filter2.png'

import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Header = () => {
  return (
    <div>
      <section id='header'>

        <div class='banner'>


        </div>
        <div class='dp-container'>
          <img class='rounded dp' src={DP4}></img>

          <div class='dp-text'>
            <h2 class='name'>Ayush Kapoor</h2>
            <h4 class='subtitle'>Web Developer</h4>
          </div>
          <div class='socials'>
            <a target='_blank' href='https://github.com/ayush391'>
              <GitHubIcon fontSize='large'></GitHubIcon>
            </a>

            <a target='_blank' href='https://leetcode.com/ayush391'>
              <CodeIcon fontSize='large'></CodeIcon>
            </a>

            <a target='_blank' href='https://www.linkedin.com/in/ayush-kapoor-69330a202/'>
              <LinkedInIcon fontSize='large'></LinkedInIcon>
            </a>

          </div>
          <div class='header-text'>
            <h1>
              Hey there! My Name is Ayush and I am a very passionate web developer from Jammu, India. I love building everything from small business sites to rich interactive web apps. Currently, I am looking for a Job as a Web Developer in a reputable company. My goal in life is to keep upskilling myself and solving complex problems.
            </h1>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Header;