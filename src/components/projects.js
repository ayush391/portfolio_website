import { Grid } from '@mui/material'
import React from 'react'
import gif from '../assets/tom-ching-cheng-hanji.gif'
import GifCard from './gifcard'

import college_website_gif from '../assets/website-college-demo.GIF'
import scraper_website_gif from '../assets/scraper_demo.GIF'
import video_chat_demo from '../assets/video_chat_demo.webp'
import portfolio_website from '../assets/portfolio_website.webp'

export const Projects = () => {
    return (
        <div>
            <section id='projects'>
                <div class='card-div'>

                    <div class='section-title'>
                        <h1>PROJECTS</h1>
                    </div>
                    <Grid justifyContent="center" rowSpacing={4}>
                        <Grid item>
                            <GifCard gif={scraper_website_gif} title="Scholar Web Scraper" desc="I developed a tool to search all the researchers from IITs, NITs and IIITs in a given field. Technologies like BeautifulSoup and Django were used in the project."></GifCard>

                        </Grid>
                        <Grid item>
                            <GifCard gif={college_website_gif}title="College Website(GCET Jammu)" desc="Me along with two of my college friends, were tasked by our college to revamp the website of our college. I was in charge of the design and front end of the website. I used Bootstrap and React to create the front end. The backend was created using Firebase and Javascript."></GifCard>

                        </Grid>
                        <Grid item>
                            <GifCard gif={video_chat_demo}title="Video Chatting Website" desc="A Video Chatting website made using WebRTC and Django."></GifCard>

                        </Grid>

                        <Grid item>
                            <GifCard gif={portfolio_website}title="This Website 😜" desc="This website was made using React, Material UI, HTML and CSS"></GifCard>

                        </Grid>
                        
                    </Grid>


                </div >
            </section>

        </div>
    )


}

export default Projects;

