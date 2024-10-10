import { contentSkills } from 'data/imgContent'
import React from 'react'


const Skills = () => {
  return (
    <div className="row">
    <div className="flex justificar centrar">
      <h3>{contentSkills.title } </h3>
    </div>

  
    <div className="flex rowS mt-5 justificar centrar" style={{
      flexWrap: 'wrap',
    }
    }>
      {contentSkills.imgSkills.map(({src, alt}) => (<img className="img-fluid imagenSkills" src={src} alt={alt} />))}
    </div>


  </div>
  )
}

export default Skills