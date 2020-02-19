import React, { useState } from 'react';
import './App.css';
import Forms from './components/Forms';

let teammates = [
  { name: 'Abhit Sahota',
    email: 'me@abhit.com',
    role: 'Student'},
  { name: 'Jeremy Brady',
    email: 'TL@lambda.com',
    role: 'TL'},
  { name: 'John Ruble',
    email: 'johnr@lambda.com',
    role: 'Student'},
  { name: 'Melissa Murphy',
    email: 'SL@lambda.com',
    role: 'SL'}, 
]

function App() {

  let [teamList, setTeamList] = useState(teammates)

  const addteammate = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };

    setTeamList([...teamList, newMember]);
  };

  return (
    <div>
      <div>
        <Forms addteammate={addteammate} />
      </div>
      <div>
        {teamList.map(person => {
          return (
            <ul key={person.name}>
              <li>{person.name}</li>
              <li>{person.email}</li>
              <li>{person.role}</li>
              <br />
            </ul>
        )})}
      </div>
    </div>
  );
}

export default App;
