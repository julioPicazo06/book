import { ContentSkills } from 'data/imgContent';
import React from 'react';

const Skills = ({ skillData }: { skillData: ContentSkills }) => {
  if (!skillData || !skillData.imgSkills) {
    return <div>No skills data available</div>;
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
        }}
      >
        {skillData.imgSkills.map(({ src, alt }) => (
          <img className="img-fluid imagenSkills" src={src} alt={alt} key={alt} />
        ))}
      </div>
    </div>
  );
};

export default Skills;