"use client";

import { useState } from "react";

export default function ({ people }) {
  const [episode, setEpisode] = useState(1);

  return (
    <div>
      <h2>{episode}</h2>
      {people.map((person) => {
        return <p key={person.name}>{person.name}</p>;
      })}
    </div>
  );
}
