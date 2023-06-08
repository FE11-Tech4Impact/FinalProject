import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedSchedule, setSelectedSchedule] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://64527770a2860c9ed40d2a69.mockapi.io/doctor/');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const updateInputValue = (value) => {
    setInputValue(value);
  };

  const handleScheduleChange = (value) => {
    setSelectedSchedule(value);
  
  }

  const handleRatingChange = () => {
    setRating();
  }


  return (
    <UserContext.Provider value={{ inputValue, selectedSchedule, setRating, handleRatingChange, handleScheduleChange, updateInputValue, users }}>
      {children}
    </UserContext.Provider>
  );
};
