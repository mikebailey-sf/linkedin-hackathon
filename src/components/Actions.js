
import React from 'react';
import Rewind from './actions/Rewind';
import Dislike from './actions/Dislike';
import Like from './actions/Like';

const Actions = ({ person, modifyChoices }) => (
  <div id="actions">
    <Rewind userId={person.id} />
    <Dislike
      userId={person.id}
      modifyChoices={modifyChoices}
    />
    <Like
      userId={person.id}
      modifyChoices={modifyChoices}
    />
  </div>
);

export default Actions;