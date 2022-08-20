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
              <Card></Card>
            </Grid>
            <Grid item xs={1} md={4}>
              <Card></Card>
            </Grid>
            <Grid item xs={1} md={4}>
              <Card></Card>
            </Grid>

          </Grid>

        </div>
      </section>

    </div>
  )
}


export default About;
