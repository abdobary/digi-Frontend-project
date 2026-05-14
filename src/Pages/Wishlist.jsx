import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';
import dev1IMG from '../images/Dev1.png';
import dev2IMG from '../images/Dev2.png';
import dev3IMG from '../images/Dev3.png';
import dev4IMG from '../images/Dev4.png';

export default function Wishlist() {
  const { token, Userid, loading: authLoading } = useAuth(); // renamed to avoid conflict
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [deletingStates, setDeletingStates] = useState({});

  const getProductImage = (productName) => {
    if (productName.includes("Gamepad")) return dev1IMG;
    if (productName.includes("Keyboard")) return dev2IMG;
    if (productName.includes("Monitor")) return dev3IMG;
    if (productName.includes("Chair")) return dev4IMG;
    return dev1IMG;
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
  };

  const fetchWishlist = async () => {
    if (!Userid || !token) return;
    try {
      setLoading(true);
      const response = await fetch(
        `https://digi-backend-project.vercel.app/api/products/user/${encodeURIComponent(Userid)}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch wishlist');
      const data = await response.json();
      const productsWithImages = data.map((product) => ({
        ...product,
        image: getProductImage(product.name),
      }));
      setWishlistItems(productsWithImages);
    } catch (error) {
      console.error(error);
      showNotification('Failed to load wishlist', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Userid && token) {
      fetchWishlist();
    } else if (!authLoading && !Userid) {
      setLoading(false);
      setWishlistItems([]);
    }
  }, [Userid, token, authLoading]);

  const deleteFromWishlist = async (productId, productName) => {
    if (!token) {
      showNotification('Please login first', 'error');
      return;
    }
    setDeletingStates((prev) => ({ ...prev, [productId]: true }));
    try {
      const response = await fetch(
        `https://digi-backend-project.vercel.app/api/products/${productId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to delete');
      setWishlistItems((prev) => prev.filter((item) => item._id !== productId));
      showNotification(`${productName} removed from wishlist!`, 'success');
    } catch (error) {
      showNotification(error.message, 'error');
    } finally {
      setDeletingStates((prev) => ({ ...prev, [productId]: false }));
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const ratingValue = rating || 4;
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= ratingValue ? (
          <i key={i} className="fas fa-star"></i>
        ) : (
          <i key={i} className="fa-regular fa-star"></i>
        )
      );
    }
    return stars;
  };

  if (authLoading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Checking session...</span>
        </div>
        <p className="mt-2">Loading account...</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading your wishlist...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Wishlist</h2>
      {notification.show && (
        <div className={`position-fixed top-0 end-0 m-3 alert alert-${notification.type === 'success' ? 'success' : 'danger'} shadow-lg`} style={{ zIndex: 9999 }}>
          {notification.message}
        </div>
      )}
      {wishlistItems.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-heart fs-1 text-muted"></i>
          <h4 className="mt-3">Your wishlist is empty</h4>
          <p className="text-muted">Add items to your wishlist by clicking the heart icon on products</p>
        </div>
      ) : (
        <div className="d-flex overflow-auto gap-4" style={{ whiteSpace: 'nowrap', scrollbarWidth: 'thin', paddingBottom: '10px', overflowX: 'auto' }}>
          {wishlistItems.map((item) => (
            <div key={item._id} style={{ flex: '0 0 auto' }}>
              <div className="card border-0 shadow-sm rounded-4" style={{ width: '270px' }}>
                <div className="position-relative bg-light rounded-top" style={{ height: '200px' }}>
                  {item.oldPrice && (
                    <div className="bg-danger text-white rounded-pill px-2 py-1 position-absolute top-0 start-0 m-2" style={{ fontSize: '12px', zIndex: 1 }}>
                      -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}%
                    </div>
                  )}
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <img src={item.image} alt={item.name} style={{ width: '68%', height: 'auto', maxHeight: '80%', objectFit: 'contain' }} />
                  </div>
                  <div className="position-absolute top-0 end-0 mt-2 me-2 d-flex flex-column gap-2">
                    <button
                      className="border-0 bg-white rounded-circle p-2 shadow-sm"
                      onClick={() => deleteFromWishlist(item._id, item.name)}
                      disabled={deletingStates[item._id]}
                      style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <i className={deletingStates[item._id] ? 'fa-solid fa-spinner fa-spin' : 'fa-solid fa-heart'} style={{ color: 'red', fontSize: '18px' }}></i>
                    </button>
                    <button className="border-0 bg-white rounded-circle p-2 shadow-sm" style={{ width: '36px', height: '36px' }}>
                      <i className="fa-regular fa-eye" style={{ fontSize: '18px' }}></i>
                    </button>
                  </div>
                </div>
                <div className="card-body p-3">
                  <h6 className="fw-bold mb-2 text-start">{item.name}</h6>
                  <div className="d-flex gap-2 mb-2">
                    <span className="fw-bold text-danger">${item.price}</span>
                    {item.oldPrice && item.oldPrice !== item.price && (
                      <span className="text-muted text-decoration-line-through">${item.oldPrice}</span>
                    )}
                  </div>
                  <div className="text-warning small text-start">
                    {renderStars(item.rating)}
                    <span className="text-secondary ms-1">({item.reviews || 88})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <br /><br />
    </div>
  );
}
