import React from 'react';

const Like = ({ userId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => modifyChoices(userId, 'ADD_TO_LIKED_USERS')}
  >
    <img src="images/misc/like.png" alt="Like User" />
  </button>
);

export default Like;