import React, { FC } from 'react'
import { ProyectoProp } from './types'


const Proyecto:FC<ProyectoProp> = ({img, titulo}:ProyectoProp) => {

    return (
        <section
            className='item-img pr-5 cursor flex column'
            style={{
              marginRight: '14px'
            }}
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            <span className='proyectoNombre mouse pl-5 f-18 pt-2 flex column centrar'>
              <p>{titulo}</p>
            </span>
          </section>
    )
}

export default Proyecto
