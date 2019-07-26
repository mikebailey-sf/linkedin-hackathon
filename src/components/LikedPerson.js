import React, { Component } from 'react'

const LikedPerson = ({person}) => {
  return (
  <div className="liked-person">
      <div className="liked-person-image">
        <img 
          src={`/images/users/${person.image}`}
          alt={`${person.name}`}
        />
      </div>
    </div>
  )
}

export default LikedPerson;
