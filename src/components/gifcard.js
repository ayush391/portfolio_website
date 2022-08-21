import React from 'react'
import './gifcard.css'
import gif from '../assets/tom-ching-cheng-hanji.gif'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'

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
                        <h3 class="desc">
                            {props.desc}
                        </h3>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default GifCard;
