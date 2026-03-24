import side from '../images/Side Image.png';
import icon from '../images/Icon-Google.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';

export const Sign = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { isLoggedIn, login, SetTheEmail } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://digi-backend-project.vercel.app/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = Array.isArray(data.msg) ? data.msg.join(', ') : data.msg;
        throw new Error(errorMsg || 'Registration failed');
      }

      setSuccess('Account created successfully!');
      localStorage.setItem('token', data.token);
      setFormData({ name: '', email: '', password: '' });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://digi-backend-project.vercel.app/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = Array.isArray(data.msg) ? data.msg.join(', ') : data.msg;
        throw new Error(errorMsg || 'Login failed');
      }

      // Fetch user data
      const userResponse = await fetch(`https://digi-backend-project.vercel.app/api/email/${encodeURIComponent(email)}`);
      const userData = await userResponse.json();
      
      const userInfo = { 
        user_email: email, 
        user_username: userData.username, 
        user_address: userData.address 
      };
      
      SetTheEmail(userInfo);
      login(data.token, userInfo);
      setSuccess('Logged to the account successfully!');
      setFormData({ email: '', password: '' });
      navigate('/home');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row min-vh-100 align-items-center">

        <div className="col-lg-7 d-none d-lg-block p-0">
          <img
            src={side}
            alt=""
            className="w-80 h-100 object-fit-cover"
          />
        </div>

        <div className="col-lg-5 d-flex justify-content-center">
          <div className="w-75">

            <h4 className="mb-3">
              {isLogin ? "Login" : "Create an account"}
            </h4>

            <p className="mb-3">
              Enter your details below
            </p>

            {error && (
              <div className="alert alert-danger">{error}</div>
            )}

            {success && (
              <div className="alert alert-success">{success}</div>
            )}

            {isLogin ? (
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  name="email"
                  className="form-control mb-4 p-3 border-0 border-bottom"
                  placeholder="Email or Phone Number"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="password"
                  name="password"
                  className="form-control mb-4 p-3 border-0 border-bottom"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <div className='d-flex justify-content-between align-items-center'>
                  <button type="submit" className="btn btn-danger w-50 p-3">
                    Login
                  </button>
                  <p className='text-danger' style={{ cursor: "pointer" }}>
                    Forget Password
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister}>
                <input
                  type="text"
                  name="name"
                  className="form-control mb-4 p-3 border-0 border-bottom"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  className="form-control mb-4 p-3 border-0 border-bottom"
                  placeholder="Email or Phone Number"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="password"
                  name="password"
                  className="form-control mb-4 p-3 border-0 border-bottom"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="submit"
                  className="btn btn-danger w-100 p-3"
                  disabled={loading || success}
                >
                  {loading ? 'Creating Account...' : success ? 'Account Created!' : 'Create Account'}
                </button>

                <button className="btn border mt-4 w-100 p-3">
                  <img src={icon} alt="" className="pe-2" />
                  Sign up with Google
                </button>
              </form>
            )}

            <p className="text-center mt-3">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span
                className="ms-2 text-dark fw-bold"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setSuccess('');
                  setFormData({ name: '', email: '', password: '' });
                }}
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};