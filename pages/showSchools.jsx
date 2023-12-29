

import React, { useEffect, useState } from 'react';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    // Fetch schools data from your backend and set it to the state
    // Example: fetchSchools().then((data) => setSchools(data));
  }, []);

  return (
    <div>
      <h1>Schools List</h1>
      <div className="schools-list">
        {schools.map((school) => (
          <div key={school.id} className="school-card">
            <h2>{school.name}</h2>
            <p>Address: {school.address}</p>
            <p>City: {school.city}</p>
            <img src={`path/to/schoolImages/${school.image}`} alt={school.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;
