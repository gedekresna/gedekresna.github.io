import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//Avatar
import man from '../avatars/man.png';
import man1 from '../avatars/man1.png';
import man2 from '../avatars/man2.png';
import gamer from '../avatars/gamer.png';

export const TestimonialsCarousel = () => {
    return (
        <Carousel
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            

            <>
                <img src={man} alt="man"></img>
                <div className="myCarousel">
                <h3>Denis Beban</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 </div>
            </>
            <>
                <img src={man1} alt="man1"></img>
                <div className="myCarousel">
                <h3>Edi Kancil</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </>
            <>
                <img src={man2} alt="man2"></img>
                <div className="myCarousel">
                <h3>Mamank Rudi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 </div>
            </>
            <>
                <img src={gamer} alt="gamer"></img>
                <div className="myCarousel">
                <h3>Sofyan Spakbor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </>
        </Carousel>
    )
}
