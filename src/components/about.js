import React from 'react'
import Card from './card'
import './about.css'
import { Grid } from '@mui/material'

export const About = () => {
  return (
    <div>

      <section id='about'>
        <div class='card-div'>
          <div class='section-title'>
            <h1>EDUCATION</h1>
          </div>
          <Grid container justifyContent="center" spacing={{xs:3, md:2}} columns={{xs:1, md:12}} rows={{ xs: 3, md: 1 }}>
            <Grid item xs={1} md={4}>
              <Card title="Bachelor of Engineering" institute="Govt. College of Engineering & Technology, Jammu
" duration="2018-2022" subject="Computer Engineering"></Card>
              <br></br>

            <h2 class='hover-to-see'>Hover To See</h2>

            </Grid>
            <Grid item xs={1} md={4}>
              <Card title="Senior Secondary (XII)" institute="Maharishi Vidya Mandir, Sainik Colony,Jammu
" duration="2017-2018" subject="Science & Maths"></Card>
              <br></br>

            <h2 class='hover-to-see'>Hover To See</h2>

            </Grid>
            <Grid item xs={1} md={4}>
              <Card title="Secondary (X)" institute="Maharishi Vidya Mandir, Sainik Colony,Jammu
" duration="2015-2016" subject="Science & Maths"></Card>
              <br></br>

            <h2 class='hover-to-see'>Hover To See</h2>

            </Grid>

          </Grid>

        </div>
      </section>

    </div>
  )
}


export default About;
