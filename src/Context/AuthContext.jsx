// src/Context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [MyEmail, setMyEmail] = useState({ user_email: "", user_username: "", user_address: "" });
  const [Userid, setUserid] = useState("");

  // Check sessionStorage on page load/refresh
  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    const storedUser = sessionStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setIsLoggedIn(true);
      setMyEmail(JSON.parse(storedUser));
    }
  }, []);

  const login = (userToken, userData, _userid) => {
    // Store in sessionStorage (clears when tab closes)
    sessionStorage.setItem('token', userToken);
    sessionStorage.setItem('user', JSON.stringify(userData));
    
    // Update state
    setToken(userToken);
    setIsLoggedIn(true);
    setMyEmail(userData);
    setUserid(_userid);
    console.log(Userid)
  };

  const SetTheEmail = (_email) => {
    setMyEmail(_email);
    // Also update sessionStorage
    sessionStorage.setItem('user', JSON.stringify(_email));
  };

  const logout = () => {
    // Clear sessionStorage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    
    // Reset state
    setToken(null);
    setIsLoggedIn(false);
    setMyEmail({ user_email: "", user_username: "", user_address: "" });
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      MyEmail, 
      token,
      Userid,
      login, 
      logout, 
      SetTheEmail 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
