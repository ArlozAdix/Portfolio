import React  from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import groupomania from '../../images/groupomania.png'
import kanap from '../../images/kanap.png'
import booki from '../../images/booki.png'
import food from '../../images/food.png'
import '../../css/Carousel.css'
  
  export default function Carousel() {
    return (
        <div style={{height: '100vh'}}>
            <h1 className='text-primary text-center mt-5 fst-italic'> Apercu de mes projets </h1>
            <MDBCarousel className='carousel-wrapper shadow w-50 border border-3  border-info mx-auto mt-5' dark showIndicators showControls>
                <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={food}
                alt='...'
                >
                </MDBCarouselItem>
                <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src={kanap}
                alt='...'
                >
                </MDBCarouselItem>
                <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src={groupomania}
                alt='...'
                >
                </MDBCarouselItem>
                <MDBCarouselItem
                className='w-100 d-block'
                itemId={4}
                src={booki}
                alt='...'
                >
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    );
  }