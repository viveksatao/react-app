// src/components/ProfileCard.js

import React, { useState, useEffect } from 'react';
import './ProfileCard.css'; // Keep your CSS unchanged
import { fetchUserData } from '../api.js';

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        // Assuming the API response structure is as per your example
        const user = data.results[0];
        setUserData({
          name: {
            first: user.name.first,
            last: user.name.last
          },
          gender: user.gender,
          phone: user.phone,
          picture: {
            large: user.picture.large
          }
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="id-card">
      <div className="id-card-header">
        <h3>Employee ID Card</h3>
      </div>
      <div className="id-card-content">
        <div className="id-card-inner">
          <div className="id-card-image">
            <img src={userData.picture.large} alt="Profile" />
          </div>
          <div className="id-card-info">
            <h2>{userData.name.first} {userData.name.last}</h2>
            <div className="info-row">
              <span className="label">Gender:</span>
              <span className="value">{userData.gender}</span>
            </div>
            <div className="info-row">
              <span className="label">Phone:</span>
              <span className="value">{userData.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
