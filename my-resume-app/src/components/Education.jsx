import React, { useEffect, useState } from 'react';

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getEdu')
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);

  return (
    <div className="mt-4">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>{edu}</li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
