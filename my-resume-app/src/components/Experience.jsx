import React, { useEffect, useState } from 'react';

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getExp')
      .then((res) => res.json())
      .then((data) => setExperience(data));
  }, []);

  return (
    <div className="mt-4">
      <h2>Experience</h2>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
