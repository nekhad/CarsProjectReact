import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OwnersList = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual URL of your API endpoint for fetching the owners data
    axios.get('YOUR_API_ENDPOINT')
      .then(response => {
        setOwners(response.data);
      })
      .catch(error => {
        console.error('Error fetching owners data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Owners List</h1>
      <ul>
        {owners.map(owner => (
          <li key={owner.id}>
            <h2>{owner.name}</h2>
            <p>Email: {owner.email}</p>
            <p>Phone: {owner.phone}</p>
            {/* Add more owner details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnersList;
