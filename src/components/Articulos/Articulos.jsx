import React from 'react'
import Articulo from './Articulo/Articulo'
import Section from '../UI/section/section'

const Articulos =props=>{

    const articulos = props.articulos.map( (articulo,index)=>{

        return(
            <Section light={ index % 2 === 0 ? false : true } key={articulo.id}>
                <Articulo left={ index % 2 === 0 ? true : false } link={articulo.id} img={articulo.img} title={articulo.title} text={articulo.text} />
            </Section>
        )
    })
    return articulos
}

export default Articulos


