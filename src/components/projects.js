import { Grid } from '@mui/material'
import React from 'react'
import GifCard from './gifcard'

import college_website_gif from '../assets/website-college-demo.gif'
import scraper_website_gif from '../assets/scraper-demo.gif'
import video_chat_demo from '../assets/video-chat-demo.gif'
import portfolio_website from '../assets/portfolio-demo.gif'
import bill_app_demo from '../assets/bill-app-demo.gif'

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
                            <GifCard demo_link='https://college-website-52b15.web.app/' gif={college_website_gif} title="College Website(GCET Jammu)" skill="React, Firebase, Javascript" desc="A visual as well as functional of my college's website done using React, Firebase and Javascript."></GifCard>

                        </Grid>
                        <Grid item>
                            <GifCard demo_link='https://ayush391.github.io/bill-app/
' gif={bill_app_demo} title="Billing Web App" skill="React, Redux, Javascript" desc="A billing web app that can allow the use to Add, Remove and Edit bills. It also shows a graph of amount spend on bills each month."></GifCard>

                        </Grid>
                        <Grid item>
                            <GifCard gif={scraper_website_gif} title="Scholar Web Scraper" skill="Selenium, BS4, Django" desc="I developed a tool to search all the researchers from IITs, NITs and IIITs in a given field. Technologies like BeautifulSoup and Django were used in the project."></GifCard>

                        </Grid>
                        <Grid item>
                            <GifCard gif={video_chat_demo} title="Video Chatting Website" skill="WebRTC, Django" desc="A Video Chatting website that can video stream data using peer-to-peer connection. It uses WebRTC and Django."></GifCard>

                        </Grid>

                        <Grid item>
                            <GifCard demo_link=' https://ayush391.github.io/portfolio_website/
' gif={portfolio_website} title="This Website 😜" skill="React, HTML, CSS" desc="This website was made using React, Material UI, HTML and CSS"></GifCard>

                        </Grid>

                    </Grid>


                </div >
            </section>

        </div>
    )


}

export default Projects;

