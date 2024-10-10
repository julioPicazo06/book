import React from 'react'
import { Portada } from './components/portada/Portada'
import { MenuGeneral } from 'components/GeneralMenu/GeneralMenu'


export const App = () => {
    return (
        <div className="principal" style={{
            backgroundColor:'#329D9C',
        }}>
            <section id="portada" style={{
            overflow: 'auto'
        }}>
                <Portada />
            </section>
            <section id="menu" >
                <MenuGeneral/>
            </section>
        
        
        </div>
    )
}
