import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // This hook now correctly loads data OR initializes it, but never both.
  useEffect(() => {
    // 1. First, check if there's already employee data in localStorage
    const existingEmployees = localStorage.getItem('employees');

    if (existingEmployees) {
      // 2. If data already exists, load it directly into our state
      setUserData(JSON.parse(existingEmployees));
    } else {
      // 3. If NO data exists (like on a brand new visit), THEN set up the default data
      setLocalStorage(); 
      const { employees } = getLocalStorage();
      setUserData(employees);
    }
  }, []); // The empty array [] ensures this runs only once when the app starts.
  
  // This hook correctly saves any changes made while using the app.
  useEffect(() => {
    // We check if userData is not the initial 'null' value before saving.
    if (userData) {
      localStorage.setItem('employees', JSON.stringify(userData));
    }
  }, [userData]); // This runs every time the userData state changes.

  const updateTaskStatus = (employeeId, taskId, newStatus) => {
    // ... all of your existing updateTaskStatus logic ...
  };

  const contextValue = { 
    userData, 
    setUserData, 
    updateTaskStatus 
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;