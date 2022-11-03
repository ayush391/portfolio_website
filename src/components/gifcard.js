import React from 'react'
import './gifcard.css'
import { Container } from '@mui/system';

function renderDemoButton(demo_link) {
    if (demo_link) {
        return <div class='btn'>
            <a href={demo_link} target="_blank">Live Demo</a>
        </div>
    }
    else {
        <h1></h1>
    }
}
export const GifCard = (props) => {
    return (
        <div>
            <Container>

                <div class="gif-container">

                    <div class="gif">
                        <img loop='1' src={props.gif}></img>
                    </div>

                    <div class="gif-content">
                        <h1 class="title">{props.title}</h1>
                        <h3 class="skill">{props.skill}</h3>
                        <h3 class="desc">
                            {props.desc}
                        </h3>


                        {renderDemoButton(props.demo_link)}
                    </div>
                </div>

            </Container >
        </div >
    )
}

export default GifCard;
