import React from 'react'
import '../../css/Competences.css'

export default function Competences() {
  return (
    // 'align-self-start' fix the sticky class when using flexBox
    <div className='sticky-top align-self-start col-2 competence-position d-none d-xl-block '>
      <div className='bg-secondary rounded border border-3 border-info text-white shadow parcours-wrapper'>
        <h3 className='text-primary text-center fst-italic mt-3'>Mes compétences</h3>
        <div className='mt-4 ms-5'>
            <h4 className='text-warning'>Stack FrontEnd !</h4>
            <ul className=''>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML / CSS</li>
            </ul>
            <h4 className='text-warning'>Stack BackEnd !</h4>
            <ul className=''>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
            <h4 className='text-warning'>Mais quoi d'autres ?</h4>
            <ul className=''>
                <li>Git/GitHub</li>
                <li>CréationAPI REST</li>
                <li>Optimisation SEO</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
