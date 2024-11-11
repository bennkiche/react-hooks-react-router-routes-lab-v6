// pages/Actors.jsx
import React, { useState, useEffect } from "react";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Simulate fetching actors data (since you provided mock data, use it here)
    const fetchedActors = [
      {
        name: "Benedict Cumberbatch",
        movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
      },
      {
        name: "Justin Timberlake",
        movies: ["Trolls", "Friends with Benefits", "The Social Network"],
      },
      {
        name: "Anna Kendrick",
        movies: ["Pitch Perfect", "Into The Woods"],
      },
      {
        name: "Tom Cruise",
        movies: [
          "Jack Reacher: Never Go Back",
          "Mission Impossible 4",
          "War of the Worlds",
        ],
      },
    ];

    setActors(fetchedActors); // Set the actors data
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
