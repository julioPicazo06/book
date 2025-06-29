import { ContentSkills } from 'data/imgContent';
import React from 'react';

const Skills = ({ skillData }: { skillData: ContentSkills }) => {
  console.log('=== SKILLS COMPONENT DEBUG ===');
  console.log('skillData recibido:', skillData);
  console.log('skillData.title:', skillData?.title);
  console.log('skillData.imgSkills:', skillData?.imgSkills);
  console.log('skillData.imgSkills es array:', Array.isArray(skillData?.imgSkills));
  console.log('skillData.imgSkills length:', skillData?.imgSkills?.length);

  // Validar que skillData existe y tiene las propiedades necesarias
  if (!skillData || !skillData.title || !skillData.imgSkills || !Array.isArray(skillData.imgSkills) || skillData.imgSkills.length === 0) {
    console.log('Skills: Mostrando mensaje de carga...');
    return (
      <div className="row">
        <div className="flex justificar centrar">
          <h3>Cargando skills...</h3>
        </div>
      </div>
    );
  }

  console.log('Skills: Renderizando skills con', skillData.imgSkills.length, 'elementos');

  return (
    <div className="row">
      <div className="flex justificar centrar">
        <h3>{skillData.title}</h3>
      </div>

      <div
        className="flex rowS mt-5 justificar centrar"
        style={{
          flexWrap: 'wrap',
        }}
      >
        {skillData.imgSkills.map(({ src, alt }, index) => {
          console.log(`Renderizando skill ${index}:`, { src, alt });
          return (
            <img 
              className="img-fluid imagenSkills" 
              src={src} 
              alt={alt} 
              key={alt || index}
              onLoad={() => console.log(`Imagen ${alt} cargada correctamente`)}
              onError={(e) => console.error(`Error cargando imagen ${alt}:`, e)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;