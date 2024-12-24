import React from 'react';
import '../styles/pages/PlayersPage.css';

const PlayersPage = () => {
  const players = [
    { id: 1, name: "Lionel Messi", team: "Inter Miami", position: "Forward" },
    { id: 2, name: "Cristiano Ronaldo", team: "Al-Nassr", position: "Forward" },
    { id: 3, name: "Kylian Mbappé", team: "Paris Saint-Germain", position: "Forward" },
    { id: 4, name: "Kevin De Bruyne", team: "Manchester City", position: "Midfielder" },
    { id: 5, name: "Virgil van Dijk", team: "Liverpool", position: "Defender" },
  ];

  return (
    <div>
      <h1>Football Players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <h2>{player.name}</h2>
            <p>Team: {player.team}</p>
            <p>Position: {player.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersPage;