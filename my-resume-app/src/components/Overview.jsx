import React, { useEffect, useState } from 'react';

function Overview() {
  const [overview, setOverview] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then((res) => res.json())
      .then((data) => setOverview(data));
  }, []);

  return (
    <div className="mt-4">
      <h2>Overview</h2>
      <p>{overview}</p>
    </div>
  );
}

export default Overview;
