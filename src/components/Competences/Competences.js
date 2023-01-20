import React from 'react'
import '../../css/Competences.css'

export default function Competences() {
  return (
    // 'align-self-start' fix the sticky class when using flexBox
    <div className='sticky-top align-self-start col-2 competence-position'>
      <div className='bg-secondary rounded border border-3 border-info text-white shadow parcours-wrapper'>
        <h3 className='text-primary text-center fst-italic mt-3 fs-1'>Mes compétences</h3>
        <div className='mt-4 ms-5'>
            <h3 className='text-warning'>Stack FrontEnd !</h3>
            <ul className='fs-4'>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML / CSS</li>
            </ul>
            <h3 className='text-warning'>Stack BackEnd !</h3>
            <ul className='fs-4'>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
            <h3 className='text-warning'>Mais quoi d'autres ?</h3>
            <ul className='fs-4'>
                <li>Git/GitHub</li>
                <li>CréationAPI REST</li>
                <li>Optimisation SEO</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
