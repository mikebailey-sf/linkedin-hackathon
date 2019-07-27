import React from 'react';

const Dislike = ({ userId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => modifyChoices(userId, 'ADD_TO_DISLIKED_USERS')}
  >
    <img src="images/misc/dislike.png" alt="Dislike User" />
  </button>
);

export default Dislike;