import React from 'react';
import Actions from './Actions';

const Person  = ({ person, modifyChoices}) => {
  const {name, major, industry, image} = person;

  return (
    <>

    <div className = "person">
      <div className="person-photo">
        <img 
          src={`/images/users/${image}`}
          alt={name}
        />
      </div>
      <div className="person-description">
        <p className="person-name-age">
          {name}, <span>{major}</span>
        </p>
        <p className="person-info">{industry}</p>
      </div>
      <Actions
        person={person}
        modifyChoices={modifyChoices}
      />
    </div>

    </>
  );
};

export default Person;
