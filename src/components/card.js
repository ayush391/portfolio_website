import { red } from '@mui/material/colors';
import React from 'react'
import './card.css'
export const Card = (props) => {
    return (
        <div>
            
        <div class="container">
            <div class="content">
                <h1  class='title'>{props.title}</h1>
                <br></br>
                <h3 class='subject'>{props.subject}</h3>
                <br></br>

                <h3  class='institute'>{props.institute}</h3>
                <br></br>

                <h3  class='duration'>{props.duration}</h3>
            </div>
            <div class="flap"></div>

        </div>
        </div>
    )
}

export default Card;
