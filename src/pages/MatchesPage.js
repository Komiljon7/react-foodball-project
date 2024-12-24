import React from 'react';

const MatchesPage = () => {
  const matches = [
    { id: 1, teamA: "Manchester City", teamB: "Paris Saint-Germain", date: "2024-03-15" },
    { id: 2, teamA: "Real Madrid", teamB: "Inter Milan", date: "2024-04-20" },
  ];

  return (
    <div>
      <h1>Upcoming Matches</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <h2>{match.teamA} vs {match.teamB}</h2>
            <p>Date: {match.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchesPage;