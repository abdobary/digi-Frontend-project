import React, { useState, useEffect } from "react";
import { useAuth } from '../Context/AuthContext';
import Img4 from "../images/Dev4.png";
import Img7 from "../images2/7.png";
import Img6 from "../images2/6.png";
import Img5 from "../images2/5.png";

export default function AllProduct() {
    const { token } = useAuth();
    const [loadingStates, setLoadingStates] = useState({});
    const [notification, setNotification] = useState({ show: false, message: '', type: '' });
    const [likedProducts, setLikedProducts] = useState({});
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [products, setProducts] = useState([]);

    // Static products data
    const staticProducts = [
        {
            id: 1,
            img: Img7,
            name: "HAVIT HV-G92 Gamepad",
            price: 120,
            oldPrice: 160,
            rating: 5,
            reviews: 88,
            discount: "-40%",
        },
        {
            id: 2,
            img: Img6,
            name: "AK-900 Wired Keyboard",
            price: 960,
            oldPrice: 1160,
            rating: 4,
            reviews: 75,
            discount: "-35%",
        },
        {
            id: 3,
            img: Img5,
            name: "IPS LCD Gaming Monitor",
            price: 370,
            oldPrice: 400,
            rating: 5,
            reviews: 99,
            discount: "-30%",
        },
        {
            id: 4,
            img: Img4,
            name: "S-Series Comfort Chair",
            price: 375,
            oldPrice: 400,
            rating: 4,
            reviews: 65,
            discount: "-25%",
        },
    ];

    // Fetch all products from database when component mounts
    useEffect(() => {
        fetchAllProducts();
    }, []);

    const fetchAllProducts = async () => {
        try {
            setLoadingProducts(true);
            const response = await fetch('https://digi-backend-project.vercel.app/api/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            const dbProducts = await response.json();
            
            // Create a map of product names that exist in database
            const likedMap = {};
            dbProducts.forEach(product => {
                // Match by product name to mark as liked
                staticProducts.forEach(staticProduct => {
                    if (staticProduct.name === product.name) {
                        likedMap[staticProduct.id] = true;
                    }
                });
            });
            
            setLikedProducts(likedMap);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoadingProducts(false);
        }
    };

    const showNotification = (message, type = 'success') => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification({ show: false, message: '', type: '' });
        }, 3000);
    };

    const createProduct = async (product) => {
        // Check if product is already in database
        if (likedProducts[product.id]) {
            showNotification(`${product.name} is already in your wishlist!`, 'info');
            return;
        }

        if (!token) {
            showNotification('Please login first', 'error');
            return;
        }

        setLoadingStates(prev => ({ ...prev, [product.id]: true }));

        try {
            const response = await fetch('https://digi-backend-project.vercel.app/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: product.name,
                    price: product.price
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to create product');
            }

            // Mark product as liked
            setLikedProducts(prev => ({ ...prev, [product.id]: true }));
            showNotification(`${product.name} added to wishlist!`, 'success');
        } catch (error) {
            showNotification(error.message, 'error');
        } finally {
            setLoadingStates(prev => ({ ...prev, [product.id]: false }));
        }
    };

    if (loadingProducts) {
        return (
            <div className="container my-5 text-center">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading products...</p>
            </div>
        );
    }

    return (
        <div className="container my-5">
            {/* Notification */}
            {notification.show && (
                <div className={`position-fixed top-0 end-0 m-3 alert alert-${notification.type === 'success' ? 'success' : notification.type === 'info' ? 'info' : 'danger'} shadow-lg`} style={{ zIndex: 9999 }}>
                    {notification.message}
                </div>
            )}

            <div className="row g-4 mt-5">
                <h3 className="mb-3">All Products</h3>
                {staticProducts.map((p) => (
                    <div key={p.id} className="col-6 col-md-4 col-lg-3">
                        <div className="border rounded overflow-hidden position-relative bg-white h-100">
                            {p.discount && (
                                <span className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 small">
                                    {p.discount}
                                </span>
                            )}

                            <div className="position-absolute top-0 end-0 d-flex flex-column gap-1 p-2">
                                <button 
                                    className="btn btn-white btn-sm border rounded-circle p-0"
                                    onClick={() => createProduct(p)}
                                    disabled={loadingStates[p.id] || likedProducts[p.id]}
                                    style={{ width: '32px', height: '32px' }}
                                >
                                    <i 
                                        className={`bi ${loadingStates[p.id] ? 'bi-hourglass-split' : likedProducts[p.id] ? 'bi-heart-fill' : 'bi-heart'}`}
                                        style={{ color: likedProducts[p.id] ? 'red' : 'black' }}
                                    ></i>
                                </button>
                                <button 
                                    className="btn btn-white btn-sm border rounded-circle p-0"
                                    style={{ width: '32px', height: '32px' }}
                                >
                                    <i className="bi bi-eye"></i>
                                </button>
                            </div>

                            <img
                                src={p.img}
                                alt={p.name}
                                className="w-100 bg-light p-3"
                                style={{ height: 160, objectFit: "contain" }}
                            />

                            <div className="p-3 text-center">
                                <div className="mb-1" style={{ fontSize: 13 }}>
                                    {p.name}
                                </div>
                                <div className="mb-1">
                                    <span className="fw-bold text-danger me-2">${p.price}</span>
                                    {p.oldPrice && (
                                        <span className="text-muted text-decoration-line-through">
                                            ${p.oldPrice}
                                        </span>
                                    )}
                                </div>
                                <div className="text-warning mb-1">
                                    {"★".repeat(p.rating)}
                                    {"☆".repeat(5 - p.rating)}
                                    <span className="text-muted"> ({p.reviews})</span>
                                </div>
                                <button 
                                    className="btn btn-dark btn-sm w-100 mt-2"
                                    onClick={() => createProduct(p)}
                                    disabled={loadingStates[p.id] || likedProducts[p.id]}
                                >
                                    {loadingStates[p.id] ? 'Adding...' : likedProducts[p.id] ? 'Added to Wishlist' : 'Add To Cart'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}