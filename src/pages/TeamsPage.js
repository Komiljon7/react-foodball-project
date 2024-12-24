import React from 'react';

const TeamsPage = () => {
  const teams = [
    { id: 1, name: "Manchester City", country: "England" },
    { id: 2, name: "Paris Saint-Germain", country: "France" },
    { id: 3, name: "Real Madrid", country: "Spain" },
  ];

  return (
    <div>
      <h1>Football Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <h2>{team.name}</h2>
            <p>Country: {team.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsPage;
