import React from 'react'
import photo from '../../images/photo.png'
import appel from '../../images/appel.png'
import localisation from '../../images/localisation.png'
import mail from '../../images/mail.png'
import linkedIn from '../../images/linkedin.png'
import '../../css/Contact.css'

export default function Contact() {
  return (
    <div style={{height: '100vh'}} >
        <h1 className='text-primary text-center mt-5 fst-italic'> Me contacter </h1>
        <div className=' border border-3 border-info contact-wrapper rounded-5 bg-secondary col-xl-6  mx-auto  mt-5 d-flex align-items-center'>
            <img className='d-none d-lg-block m-3 border border-3 border-warning rounded-circle' src={photo} width={250} height={250} alt=''/>
            <div className=' ms-5 text-white fs-5'>
                <div className='d-flex mt-3 '>
                    <img className='d-none d-lg-block me-3' src={localisation} width={50} height={50} alt='' />
                    <p className='text-wrap'> 16 Cours Senozan, 38500 Voiron</p>
                </div>
                <div className='d-flex  mt-3'>
                    <img className='d-none d-lg-block  me-3' src={appel} width={50} height={50} alt='' />
                    <p> 06 65 08 68 32 </p>
                </div>
                <div className='d-flex  mt-3'>
                    <img className='d-none d-lg-block me-3' src={mail} width={50} height={50} alt='' />
                    <p> loic.beernaert@gmail.com </p>
                </div>
                <div className='d-flex  mt-3'>
                    <img className='d-none d-lg-block me-3' src={linkedIn} width={50} height={50} alt='' />
                    <p> Loïc Beernaert </p>
                </div>
            </div>
        </div>
    </div>
  )
}
