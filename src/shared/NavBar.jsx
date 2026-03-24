import { Link } from 'react-router-dom'
import logo from '../images/Logo (2).png'
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light border-bottom">
        <div className="container d-flex align-items-center justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" srcSet="" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {/* Show Home when logged in */}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link to="home" className="nav-link active" aria-current="page">Home</Link>
                </li>
              )}

              {/* Show Features when logged in */}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link to="singleproduct" className="nav-link">Features</Link>
                </li>
              )}

              {/* Show Products when logged in */}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link to="allproducts" className="nav-link">Products</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Search and Account Icon Container */}
          <div className='d-flex align-items-center gap-3'>
            {/* Search Input */}
            {isLoggedIn && (
              <div className='position-relative' style={{ width: '250px' }}>
                <input
                  className="form-control bg-secondary-subtle p-3 border-0 rounded-4"
                  type="search"
                  placeholder="What are you looking for"
                  aria-label="Search"
                />
                <button className="btn position-absolute end-0 top-0 me-2 h-100" type="submit">
                  <i className="bi bi-search fs-5"></i>
                </button>
              </div>
            )}

            {/* Heart Icon - Wishlist */}
            {isLoggedIn && (
              <Link to="/wishlist">
                <button className='bg-transparent border-0 p-0'>
                  <i class="fa-solid fa-heart fs-4"></i>
                </button>
              </Link>
            )}

            {/* Account Icon */}
            {isLoggedIn && (
              <Link to="/account">
                <button className='bg-transparent border-0 p-0'>
                  <i className="fa-solid fa-user fs-4"></i>
                </button>
              </Link>
            )}

            {/* Logout Button */}
            {isLoggedIn && (
              <button
                className='bg-transparent border-0 p-0'
                onClick={() => {
                  logout();
                  navigate('/');
                }}
              >
                <i className="fa-solid fa-right-from-bracket fs-4"></i>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}