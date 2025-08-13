import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { logger } from 'utils/logger';
import { Content } from 'components/StylesComponents/ContentStyles';
import { ContentSkills } from 'data/imgContent';

const Skills = ({ skillData }: { skillData: ContentSkills }) => {

logger.log('skillData', skillData);
  // Validar que skillData existe y tiene las propiedades necesarias
  if (!skillData || !skillData.title || !skillData.imgSkills || !Array.isArray(skillData.imgSkills) || skillData.imgSkills.length === 0) {

    return (
      <div className="row">
        <div className="col-12">
          <p>Cargando skills...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="row">
      <div className="flex justificar centrar">
        <h3>{skillData.title}</h3>
      </div>

      <div
        className="flex rowS mt-5 justificar centrar"
        style={{
          flexWrap: 'wrap',
          // backgroundColor: 'rgba(0, 0, 0, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderRadius: '10px',
          padding: '10px',
          margin: '10px',
        }}
      >
        {skillData.imgSkills.map(({ src, alt , width }, index) => {
        
          return (
            <div 
              key={alt || index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
            <img 
              src={src} 
              alt={alt} 
              style={{
                width: `${width}rem`,
                padding: '0.5rem',
              }}
              onLoad={() => logger.log(`Imagen ${alt} cargada correctamente`)}
              onError={(e) => logger.error(`Error cargando imagen ${alt}:`, e)}
            />
            <span>{alt}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;