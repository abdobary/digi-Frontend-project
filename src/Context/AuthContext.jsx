// src/Context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [MyEmail, setMyEmail] = useState({ user_email: "", user_username: "", user_address: "" });
  const [Userid, setUserid] = useState("");
  const [loading, setLoading] = useState(true); // ✅ add loading state

  // Restore session from sessionStorage on mount (runs once)
  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    const storedUser = sessionStorage.getItem('user');
    const storedUserId = sessionStorage.getItem('userId'); // ✅ store userId separately

    if (storedToken && storedUser && storedUserId) {
      setToken(storedToken);
      setIsLoggedIn(true);
      setMyEmail(JSON.parse(storedUser));
      setUserid(storedUserId);
    }
    setLoading(false); // ✅ auth initialization finished
  }, []);

  const login = (userToken, userData, _userid) => {
    // Store in sessionStorage
    sessionStorage.setItem('token', userToken);
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('userId', _userid); // ✅ persist userId

    // Update state
    setToken(userToken);
    setIsLoggedIn(true);
    setMyEmail(userData);
    setUserid(_userid);
  };

  const SetTheEmail = (_email) => {
    setMyEmail(_email);
    sessionStorage.setItem('user', JSON.stringify(_email));
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userId'); // ✅ clear userId
    setToken(null);
    setIsLoggedIn(false);
    setMyEmail({ user_email: "", user_username: "", user_address: "" });
    setUserid("");
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      MyEmail, 
      token,
      Userid,
      loading,        // ✅ expose loading
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
