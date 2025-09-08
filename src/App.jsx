import React, { useState, useEffect, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  
  // CORRECTED: Destructure the context value as an object {}
  const { userData } = useContext(AuthContext); 

  useEffect(() => {
    const loggedInUserString = localStorage.getItem('loggedInUser');
    if (loggedInUserString) {
      try {
        const storedData = JSON.parse(loggedInUserString);
        setUser(storedData.role);
        if (storedData.data) {
          setLoggedInUserData(storedData.data);
        }
      } catch (error) {
        localStorage.removeItem('loggedInUser');
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const adminData = { firstName: 'Admin' };
      setUser('admin');
      setLoggedInUserData(adminData);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminData }));
    } else if (userData) { // Make sure userData has loaded before trying to use it
      const employee = userData.find((e) => email === e.email && e.password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("User data not loaded yet, please wait.");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <>
      {user === 'admin' ? (
        <AdminDashboard changeUser={handleLogout} data={loggedInUserData} />
      ) : (
        <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;