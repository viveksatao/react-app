// src/api.js

export const fetchUserData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  