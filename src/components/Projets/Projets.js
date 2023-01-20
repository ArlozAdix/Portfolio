import React from 'react'
import Carousel from '../Carousel/Carousel'

import photo from '../../images/photo.png'

export default function Projets() {
  return (
    <div>
        <h1 className='text-primary text-center mt-5 fst-italic'> Ma presentation </h1>
        <div className=' border border-3 border-info contact-wrapper rounded-5 bg-secondary col-xl-6  mx-auto  mt-5 d-flex align-items-center'>
            <img className='d-none d-lg-block m-3 border border-3 border-info rounded-circle' src={photo} width={250} height={250} alt=''/>
            <p className='text-white fs-5'>Développeur web frontend spécialisé avec le Framework react depuis ma reconversion professionnelle, je suis actuellement 
              à la recherche d'une opportunité pour démarrer ma carrière. Je suis disponible pour présenter mes différents projets professionnel 
              de formation et ainsi vous montrer mes différentes compétences que j'ai acquéri et continu d'acquérir sur mes projets personnels factices.
            </p>
        </div>
        <Carousel />
    </div>
  )
}
