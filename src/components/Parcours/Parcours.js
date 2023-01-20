import React from 'react'

import Competences from '../Competences/Competences'

import '../../css/Parcours.css'
import fruit from '../../images/fruitW.png'
import projet from '../../images/projetW.png'
import etude from '../../images/etudeW.png'

export default function Parcours() {

    const experiences = [
        {
            "id" : 1,
            "companyName" : "BTS Management D'Unités Commerciales",
            "postName" : "Etudiant alternant",
            "logo" : etude,
            "skills" : "Durant mon alternance, mon activité principale a été de gérer le rayon fruits & légumes dans son ensemble ainsi que de dynamiser son activité. J'y ai appris la base de la gestion d'unités commerciales.",
            "date" : "2016-2018"
        },{
            "id" : 2,
            "companyName" : "Carrefour",
            "postName" : "Employé commercial / Manager fruits & légumes",
            "logo" : fruit,
            "skills" : "Pendant cette période, j'ai occupé successivement les postes d'employés commerciaux et de manager, le tout spécialisé dans le secteur fruits & légumes. J'y ai appris des compétences manageriales d'équipe et d'entreprise.",
            "date" : "2016-2020"
        },{
            "id" : 3,
            "companyName" : "Primeur sur Voiron",
            "postName" : "Primeur",
            "logo" : fruit,
            "skills" : "Lors de cette année-là, j'ai rejoint l'équipe d'un petit commerce urbain, j'ai eu la chance de participer a l'intégralité de la vie du commerce. Cependant ayant atteint une certaine maitrise du secteur primeur, je me suis lassé et ai decidé de me reconvertir dans une profession où il est possible de s'améliorer sans cesse. ",
            "date" : "2020-2021"
        },{
            "id" : 4,
            "companyName" : "Formation Développeur Front-end",
            "postName" : "Etudiant",
            "logo" : etude,
            "skills" : "J'ai suivi et réussi une formation de 8 mois chez OpenClassroom. J'y ai developper les compétences basiques de développeur front-end (voir compétences ci-contre) en créant sept projets professionmalisants.",
            "date" : "2022"
        },{
            "id" : 5,
            "companyName" : "Projets personnels",
            "postName" : "Autodidacte",
            "logo" : projet,
            "skills" : "Depuis la fin de ma formation, je suis activement à la recherche d'une première expérience. À côté je travaille sur des projets personnels factices pour me permettre de développer mes compétences et de les entretenir.",
            "date" : "Aujourd'hui"
    }
]

  return (
    <div className='d-flex justify-content-around'>
        <div className='col-2'/>
        <div className='col-5'>
            <h1 className='text-primary text-center mt-5 fst-italic'> Mon parcours </h1>
            {experiences.slice(0).reverse().map((experience) => {
                return <div className='parcours-wrapper'>
                            <div className='card mt-5 shadow text-white bg-secondary border border-3 border-info'key={experience.id}>
                                <div class="card-header">
                                    <p className='card-text fs-5'>{experience.date}</p>
                                </div>
                                <div className='d-flex'>
                                    <div className='card-body'>
                                        <h3 className='card-title text-warning fs-2'>{experience.companyName}</h3>
                                        <h4 className='card-subtitle text-warning mb-2 fs-3'>{experience.postName}</h4>
                                        <p className='mt-4 card-text fs-4'>{experience.skills}</p>
                                    </div>
                                    <img className="d-none d-lg-block p-3" width={300} height={300} src={experience.logo} alt='' />
                                </div>
                            </div>
                </div>
            })}
        </div>
        <Competences/>
    </div>
  )
}
