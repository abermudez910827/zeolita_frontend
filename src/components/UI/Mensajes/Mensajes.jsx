import React from 'react'
import MensajeItem from "./MensajeItem/MensajeItem"
import Section from "../section/section"

const Mensajes =props=>{

    const mensajes = props.mensajes.map(mensaje=>{
     return( 
        <Section key={mensaje.id} classSection={["section-subscribe",`bg-${mensaje.importance}`]} >
            <MensajeItem title={mensaje.title} link={mensaje.archivo} text={mensaje.text} />
        </Section>
      )
    })

    return mensajes 
}

export default Mensajes