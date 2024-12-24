import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles/Navbar.css";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const items = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Kylian Mbappe",
    "Erling Haaland",
    "Neymar Jr",
    "Kevin De Bruyne",
    "Mohamed Salah",
  ];

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchInput(query);

    if (query === "") {
      setSearchResults([]);
    } else {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(query)
      );
      setSearchResults(filtered);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Football Hub</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/matches">Matches</Link>
          </li>
          <li>
            <Link to="/contact" className="cta">
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search players..."
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
      </nav>
      {searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
