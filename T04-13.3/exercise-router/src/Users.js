// arquivo Users.js
import React from 'react';

const Users = ({ greetingMessage , match} ) => (
  <div>
    {console.log(match)}
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p> 3
    <p>{match.params.id}</p>
  </div>
);

export default Users;