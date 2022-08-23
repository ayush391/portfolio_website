import { Rectangle } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import $ from 'jquery';
import React from 'react'
import './card.css'

// function to detect if an element is scrolled into view
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};


class Card extends React.Component {
    render() {
        return (
            <div>

                <div class="container">
                    <div class="content">
                        <h1 class='title'>{this.props.title}</h1>
                        <br></br>
                        <h3 class='subject'>{this.props.subject}</h3>
                        {/* <h4 class='marks'>Marks = {this.props.marks}%</h4> */}
                        <br></br>

                        <h3 class='institute'>{this.props.institute}</h3>
                        <br></br>

                        <h3 class='duration'>{this.props.duration}</h3>
                    </div>
                    {/* <div class="cup"></div> */}
                    {/* <div class="flap"></div> */}

                </div>
            </div>
        )
    }

    componentDidUpdate(){
        $(window).on('scroll', function () {
            // check if element is scrolled into view
            if (isScrolledIntoView($('#projects'))) {
              // element is scrolled into view, add animation class
              $('#projects').children('.container').addClass('.card-fade-in-anim');
            }
          });
    }

}



export default Card;
