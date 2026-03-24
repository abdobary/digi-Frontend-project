import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import mobImage from '../images/Mob1.png';
import dev1IMG from '../images/Dev1.png';
import dev2IMG from '../images/Dev2.png';
import dev3IMG from '../images/Dev3.png';
import dev4IMG from '../images/Dev4.png';
import dev5IMG from '../images/Dev5.png';
import dev6IMG from '../images/Dev6.png';
import dev7IMG from '../images/Dev7.png';
import dev8IMG from '../images/Dev8.png';
import dev9IMG from '../images/Dev9.png';

{/* 
--------------------------------------------------------to scroll the cards--------------------------------------------------------

Add useRef import at the top:
useRef gives you direct access to a DOM element so you can manipulate it (like scrolling, focusing, or reading values) without causing re-renders.

const scrollRef = useRef(null);

const scrollLeft = () => {                                                           const scrollRight = () => {
    if (scrollRef.current) {                                                            if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });                     scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }                                                                                       }
};                                                                                   };

<button onClick={scrollLeft} ...>
<button onClick={scrollRight} ...>
Change the cards container from <div className='d-flex gap-5'> to:

<div 
    ref={scrollRef} // Connects this div to the scrollRef we created. This allows the scroll buttons to access and control this div's scrolling behavior.
    className="d-flex overflow-auto gap-5" 
    style={{ 
        whiteSpace: "nowrap", 
        scrollbarWidth: "thin",
        paddingBottom: "10px",
        overflowX: "auto",
        scrollBehavior: "smooth"
    }}
>
Wrapped each card in a div with style={{ flex: "0 0 auto" }} to prevent them from shrinking.

Added a 5th card to demonstrate scrolling with more items.
------------------------------------------------------------------------------------------------------------------------------------
*/}

export const Home = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleWishlistClick = () => {
        navigate('/allproducts', { state: { message: 'Wishlist from here' } });
    };

    const handleViewClick = () => {
        navigate('/allproducts', { state: { message: 'View from here' } });
    };

    return (
        <>
            
            <div className="d-flex align-items-center w-75 mx-auto">
                <div className='d-flex flex-column gap-2 p-5' style={{ width: "18%" }}>
                    <div className='d-flex'>
                        <button className='border border-0 bg-transparent text-start'>Woman's Fashion</button>
                        <i class="fa-solid fa-angle-right mt-2" style={{ marginLeft: "5%" }}></i>
                    </div>
                    <div className='d-flex'>
                        <button className='border border-0 bg-transparent text-start'>Men's Fashion</button>
                        <i class="fa-solid fa-angle-right mt-2" style={{ marginLeft: "5%" }}></i>
                    </div>
                    <button className='border border-0 bg-transparent text-start'>Electronics</button>
                    <button className='border border-0 bg-transparent text-start'>Home & Lifestyle</button>
                    <button className='border border-0 bg-transparent text-start'>Medicine</button>
                    <button className='border border-0 bg-transparent text-start'>Sports & Outdoor</button>
                    <button className='border border-0 bg-transparent text-start'>Baby's & Toys</button>
                    <button className='border border-0 bg-transparent text-start'>Groceries & Pets</button>
                    <button className='border border-0 bg-transparent text-start'>Health & Beauty</button>
                </div>

                <div class="vr mx-3"></div>

                <div className='bg-dark w-75 ms-auto m-5'>
                    <div class="d-flex justify-content-between align-items-center text-white rounded">
                        <div className='p-5'>
                            <div className='d-flex'>
                                <i class="fa-solid fa-apple-whole fa-4x"></i>
                                <h5 class="fw-bold mt-4" style={{ marginLeft: "2%" }}>iPhone 14 Series</h5>
                            </div>
                            <div class="display-6 fw-bold mb-3">Up to 10%<br />off Voucher</div>
                            <a href="#" class="text-white text-decoration-none border-bottom pb-1">Shop Now →</a>
                        </div>

                        <img src={mobImage} className='p-5' alt="iPhone" />
                    </div>
                    <div className="d-flex justify-content-center gap-2 mt-3 mb-3">
                        <button className="bg-white rounded-circle" style={{ width: "15px", height: "15px" }}></button>
                        <button className="bg-secondary rounded-circle" style={{ width: "15px", height: "15px" }}></button>
                        <button className="bg-secondary rounded-circle" style={{ width: "15px", height: "15px" }}></button>
                    </div>
                </div>

            </div>


            <br />
            <br />
            <br />


            <div className="" style={{ width: "70%", marginLeft: "15%" }}>
                <div className='d-flex align-items-center gap-3'>
                    <h2 className='bg-danger rounded'><span style={{ opacity: 0.0 }}>$</span></h2>
                    <h2 className='fw-bold text-danger'>Today's</h2>
                </div>
                <div className='mt-3 d-flex gap-3 align-items-end'>
                    <h1 className='fw-bold mb-0'>Flash Sales</h1>
                    <div className='text-center' style={{ marginLeft: "10%" }}>
                        <h5 className='mb-0'>Days</h5>
                        <h5 className='mb-0 fw-bold'>03</h5>
                    </div>
                    <h5 className='mb-0 fw-bold text-danger mb-2'>:</h5>
                    <div className='text-center'>
                        <h5 className='mb-0'>Hours</h5>
                        <h5 className='mb-0 fw-bold'>23</h5>
                    </div>
                    <h5 className='mb-0 fw-bold text-danger mb-2'>:</h5>
                    <div className='text-center'>
                        <h5 className='mb-0'>Minutes</h5>
                        <h5 className='mb-0 fw-bold'>19</h5>
                    </div>
                    <h5 className='mb-0 fw-bold text-danger mb-2'>:</h5>
                    <div className='text-center'>
                        <h5 className='mb-0'>Seconds</h5>
                        <h5 className='mb-0 fw-bold'>56</h5>
                    </div>
                    <button className='rounded-circle mb-2 border border-0' onClick={scrollLeft} style={{ marginLeft: "38%" }}><i class="fa-solid fa-arrow-left fa-2x"></i></button>
                    <button className='rounded-circle mb-2 border border-0' onClick={scrollRight}><i class="fa-solid fa-arrow-right fa-2x"></i></button>
                </div>
                <br />

                {/* ---------------------------------------------------------------------------------------------------------------------------------------*/}
                {/* ---------------------------------------------------------- div of the cards ---------------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------------------------------------------------------------------*/}
                <div
                    ref={scrollRef}
                    className="d-flex overflow-auto gap-5"
                    style={{
                        whiteSpace: "nowrap",
                        scrollbarWidth: "thin",
                        paddingBottom: "10px",
                        overflowX: "auto",
                        scrollBehavior: "smooth"
                    }}
                >
                    {/* --------------------------------------------------------------Card 1--------------------------------------------------------------*/}
                    <div style={{ flex: "0 0 auto" }}>
                        <button className="border-0 bg-transparent p-0">
                            <div className="card border-0 shadow-sm rounded-4" style={{ width: "250px" }}>
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-danger text-white rounded-pill px-2 py-1 position-absolute top-0 start-0 m-2" style={{ fontSize: "12px" }}>
                                        -40%
                                    </div>
                                    <div className="bg-light d-flex align-items-center justify-content-center overflow-hidden" style={{ height: "200px", borderRadius: "16px 16px 0 0" }}>
                                        <img src={dev1IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">HAVIT HV-G92 Gamepad</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$120</span>
                                        <span className="text-muted text-decoration-line-through">$160</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(88)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* --------------------------------------------------------------Card 2--------------------------------------------------------------*/}
                    <div style={{ flex: "0 0 auto" }}>
                        <button className="border-0 bg-transparent p-0">
                            <div className="card border-0 shadow-sm rounded-4" style={{ width: "250px" }}>
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-danger text-white rounded-pill px-2 py-1 position-absolute top-0 start-0 m-2" style={{ fontSize: "12px" }}>
                                        -40%
                                    </div>
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0" }}>
                                        <img src={dev2IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">AK-900 Wired Keyboard</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$160</span>
                                        <span className="text-muted text-decoration-line-through">$160</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(75)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* --------------------------------------------------------------Card 3--------------------------------------------------------------*/}
                    <div style={{ flex: "0 0 auto" }}>
                        <button className="border-0 bg-transparent p-0">
                            <div className="card border-0 shadow-sm rounded-4" style={{ width: "250px" }}>
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-danger text-white rounded-pill px-2 py-1 position-absolute top-0 start-0 m-2" style={{ fontSize: "12px" }}>
                                        -30%
                                    </div>
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0" }}>
                                        <img src={dev3IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">IPS LCD Gaming Monitor</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$570</span>
                                        <span className="text-muted text-decoration-line-through">$400</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(90)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* --------------------------------------------------------------Card 4--------------------------------------------------------------*/}
                    <div style={{ flex: "0 0 auto" }}>
                        <button className="border-0 bg-transparent p-0">
                            <div className="card border-0 shadow-sm rounded-4" style={{ width: "250px" }}>
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-danger text-white rounded-pill px-2 py-1 position-absolute top-0 start-0 m-2" style={{ fontSize: "12px" }}>
                                        -25%
                                    </div>
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0" }}>
                                        <img src={dev4IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%", marginLeft: "20%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2' style={{ marginLeft: "20%" }}>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">S-Series Comfort Chair</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$375</span>
                                        <span className="text-muted text-decoration-line-through">$400</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(94)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* --------------------------------------------------------------Card 5--------------------------------------------------------------*/}
                    <div style={{ flex: "0 0 auto" }}>
                        <button className="border-0 bg-transparent p-0">
                            <div className="card border-0 shadow-sm rounded-4" style={{ width: "250px" }}>
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-danger text-white rounded-pill px-2 py-1 position-absolute top-0 start-0 m-2" style={{ fontSize: "12px" }}>
                                        -35%
                                    </div>
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0" }}>
                                        <img src={dev1IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">S-Series Coffee Table</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$375</span>
                                        <span className="text-muted text-decoration-line-through">$400</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(94)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    {/* --------------------------------------------------------------Card 6--------------------------------------------------------------*/}
                    <div style={{ flex: "0 0 auto" }}>
                        <button className="border-0 bg-transparent p-0">
                            <div className="card border-0 shadow-sm rounded-4" style={{ width: "250px" }}>
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-danger text-white rounded-pill px-2 py-1 position-absolute top-0 start-0 m-2" style={{ fontSize: "12px" }}>
                                        -40%
                                    </div>
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0" }}>
                                        <img src={dev2IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">AK-900 Wired Keyboard</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$160</span>
                                        <span className="text-muted text-decoration-line-through">$160</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(75)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                {/* ---------------------------------------------------------------------------------------------------------------------------------------*/}
                {/* ----------------------------------------------------- End of the div of the cards ---------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------------------------------------------------------------------*/}
            </div>

            <br />
            <br />
            <br />

            <div className="d-flex justify-content-center align-items-center">
                <button className='bg-danger rounded px-5 py-3 border border-0 text-white' onClick={handleViewClick}>View All Products</button>
            </div>

            <br />
            <br />

            <hr className="w-75 mx-auto" style={{ paddingLeft: "10px", paddingRight: "10px" }} />

            <br />
            <br />
            <br />

            <div className="" style={{ width: "70%", marginLeft: "15%" }}>
                <div className='d-flex align-items-center gap-3'>
                    <h2 className='bg-danger rounded'><span style={{ opacity: 0.0 }}>$</span></h2>
                    <h2 className='fw-bold text-danger'>Categories</h2>
                </div>
                <div className='mt-3 d-flex gap-3 align-items-end'>
                    <h1 className='fw-bold mb-0'>Browse By Category</h1>

                    <button className='rounded-circle mb-2 border border-0' style={{ marginLeft: "63%" }}><i class="fa-solid fa-arrow-left fa-2x"></i></button>
                    <button className='rounded-circle mb-2 border border-0'><i class="fa-solid fa-arrow-right fa-2x"></i></button>
                </div>

                <br />
                <br />
                <br />

                <div className='d-flex flex-wrap gap-3 w-100'>
                    {/*----------------------------------------------------------*/}
                    <button className='border rounded-3 p-5 bg-transparent text-center flex-grow-1' style={{ minWidth: "120px" }}>
                        <i class="fa-solid fa-mobile-alt fa-4x"></i><br /><br />
                        <span>Phones</span>
                    </button>
                    {/*----------------------------------------------------------*/}
                    <button className='border rounded-3 p-5 bg-transparent text-center flex-grow-1' style={{ minWidth: "120px" }}>
                        <i class="fa-solid fa-desktop fa-4x"></i><br /><br />
                        <span>Computers</span>
                    </button>
                    {/*----------------------------------------------------------*/}
                    <button className='border rounded-3 p-5 bg-transparent text-center flex-grow-1' style={{ minWidth: "120px" }}>
                        <i class="fa-regular fa-bell fa-4x"></i><br /><br />
                        <span>Alarms</span>
                    </button>
                    {/*----------------------------------------------------------*/}
                    <button className='border rounded-3 p-5 bg-transparent text-center flex-grow-1' style={{ minWidth: "120px" }}>
                        <i class="fa-solid fa-camera fa-4x"></i><br /><br />
                        <span>Cameras</span>
                    </button>
                    {/*----------------------------------------------------------*/}
                    <button className='border rounded-3 p-5 bg-transparent text-center flex-grow-1' style={{ minWidth: "120px" }}>
                        <i class="fa-solid fa-headphones fa-4x"></i><br /><br />
                        <span>Headphones</span>
                    </button>
                    {/*----------------------------------------------------------*/}
                    <button className='border rounded-3 p-5 bg-transparent text-center flex-grow-1' style={{ minWidth: "120px" }}>
                        <i class="fa-solid fa-dice-two fa-4x"></i><br /><br />
                        <span>Gaming</span>
                    </button>
                    {/*----------------------------------------------------------*/}
                </div>
            </div>

            <br />
            <br />
            <br />

            <hr className="w-75 mx-auto" style={{ paddingLeft: "10px", paddingRight: "10px" }} />

            <br />
            <br />
            <br />

            <div className="" style={{ width: "70%", marginLeft: "15%" }}>
                <div className='d-flex align-items-center gap-3'>
                    <h2 className='bg-danger rounded'><span style={{ opacity: 0.0 }}>$</span></h2>
                    <h2 className='fw-bold text-danger'>This Month</h2>
                </div>
                <div className='mt-3 d-flex gap-3 align-items-end'>
                    <h2 className="fw-bold mb-0" style={{ whiteSpace: "nowrap", width: "16%"}}>Best Selling Products</h2>
                    <button className='bg-danger rounded px-5 py-3 border border-0 text-white' onClick={handleViewClick} style={{ marginLeft: "68%" }}>View All</button>
                </div>
                <br />

                {/* ---------------------------------------------------------------------------------------------------------------------------------------*/}
                {/* ---------------------------------------------------------- div of the cards ---------------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className="d-flex overflow-auto gap-5" style={{ width: "97%" }}>
                    {/* --------------------------------------------------------------Card 1--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center overflow-hidden" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev1IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">HAVIT HV-G92 Gamepad</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$120</span>
                                        <span className="text-muted text-decoration-line-through">$160</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(88)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* --------------------------------------------------------------Card 2--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev2IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">AK-900 Wired Keyboard</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$160</span>
                                        <span className="text-muted text-decoration-line-through">$160</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(75)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* --------------------------------------------------------------Card 3--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev3IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">IPS LCD Gaming Monitor</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$570</span>
                                        <span className="text-muted text-decoration-line-through">$400</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(90)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* --------------------------------------------------------------Card 4--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev4IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%", marginLeft: "20%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2' style={{ marginLeft: "20%" }}>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">S-Series Comfort Chair</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$375</span>
                                        <span className="text-muted text-decoration-line-through">$400</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(94)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img src={dev5IMG} alt="iPhone" style={{ width: "68%", marginLeft: "15%" }} />

            <br />
            <br />
            <br />
            <br />

            <div className="" style={{ width: "70%", marginLeft: "15%" }}>
                <div className='d-flex align-items-center gap-3'>
                    <h2 className='bg-danger rounded'><span style={{ opacity: 0.0 }}>$</span></h2>
                    <h2 className='fw-bold text-danger'>Our Products</h2>
                </div>
                <div className='mt-3 d-flex gap-3 align-items-end'>
                    <h1 className='fw-bold mb-0'>Explore Our Products</h1>
                    <button className='rounded-circle mb-2 border border-0' style={{ marginLeft: "58%" }}><i class="fa-solid fa-arrow-left fa-2x"></i></button>
                    <button className='rounded-circle mb-2 border border-0'><i class="fa-solid fa-arrow-right fa-2x"></i></button>
                </div>
                <br />

                {/* ---------------------------------------------------------------------------------------------------------------------------------------*/}
                {/* ---------------------------------------------------------- div of the cards ---------------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------------------------------------------------------------------*/}
                <div className="d-flex overflow-auto gap-5" style={{ width: "97%" }}>
                    {/* --------------------------------------------------------------Card 1--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center overflow-hidden" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev1IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">HAVIT HV-G92 Gamepad</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$120</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(88)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* --------------------------------------------------------------Card 2--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev2IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">AK-900 Wired Keyboard</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$160</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(75)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* --------------------------------------------------------------Card 3--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev3IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">IPS LCD Gaming Monitor</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$570</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(90)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* --------------------------------------------------------------Card 4--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev4IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%", marginLeft: "20%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2' style={{ marginLeft: "20%" }}>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">S-Series Comfort Chair</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$375</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(94)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <br />
                <br />

                <div className="d-flex overflow-auto gap-5"  style={{ width: "97%" }}>
                    {/* --------------------------------------------------------------Card 4--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev4IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%", marginLeft: "20%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2' style={{ marginLeft: "20%" }}>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">S-Series Comfort Chair</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$375</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(94)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    {/* --------------------------------------------------------------Card 3--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev3IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">IPS LCD Gaming Monitor</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$570</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(90)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    {/* --------------------------------------------------------------Card 2--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev2IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">AK-900 Wired Keyboard</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$160</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(75)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    {/* --------------------------------------------------------------Card 1--------------------------------------------------------------*/}
                    <div style={{ flex: "1 0 auto", minWidth: "250px", maxWidth: "300px" }}>
                        <button className="border-0 bg-transparent p-0 w-100">
                            <div className="card border-0 shadow-sm rounded-4 w-100">
                                <div className="d-flex position-relative bg-light rounded">
                                    <div className="bg-light d-flex align-items-center justify-content-center overflow-hidden" style={{ height: "200px", borderRadius: "16px 16px 0 0", width: "100%" }}>
                                        <img src={dev1IMG} alt="iPhone" style={{ width: "68%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} />
                                    </div>
                                    <div className='d-flex flex-column gap-2 mt-2'>
                                        <button className='border border-0 bg-transparent' onClick={handleWishlistClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-heart"></i></button>
                                        <button className='border border-0 bg-transparent' onClick={handleViewClick} style={{ marginLeft: "-35px" }}><i class="fa-regular fa-eye"></i></button>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="fw-bold mb-2 text-start">HAVIT HV-G92 Gamepad</h6>
                                    <div className="d-flex gap-2 mb-2">
                                        <span className="fw-bold text-danger">$120</span>
                                    </div>
                                    <div className="text-warning small text-start">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <span className="text-secondary ms-1">(88)</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                {/* ---------------------------------------------------------------------------------------------------------------------------------------*/}
                {/* ----------------------------------------------------- End of the div of the cards ---------------------------------------------------- */}
                {/* ---------------------------------------------------------------------------------------------------------------------------------------*/}
            </div>

            <br />
            <br />
            <br />

            <div className="d-flex justify-content-center align-items-center">
                <button className='bg-danger rounded px-5 py-3 border border-0 text-white' onClick={handleViewClick}>View All Products</button>
            </div>

            <br />
            <br />

            <hr className="w-75 mx-auto" style={{ paddingLeft: "10px", paddingRight: "10px" }} />

            <br />
            <br />
            <br />

            <div className="container mt-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="bg-danger rounded" style={{ width: "20px", height: "40px" }}></div>
                    <h5 className="text-danger fw-bold mb-0">Featured</h5>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold mb-0">New Arrival</h2>
                </div>

                <div className="row g-4">
                    {/* PlayStation 5 - Large Card */}
                    <div className="col-md-6">
                        <div className="text-white rounded-4 p-5" style={{
                            height: "400px",
                            backgroundImage: `url(${dev6IMG})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}>
                            <h2 className="fw-bold">PlayStation 5</h2>
                            <p>Black and White version of the PS5 coming out on sale.</p>
                            <button className="btn btn-outline-light rounded-0">Shop Now →</button>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row g-4">
                            {/* Women's Collections */}
                            <div className="col-12">
                                <div className="text-white rounded-4 p-4" style={{
                                    height: "190px",
                                    backgroundImage: `url(${dev7IMG})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }}>
                                    <h4 className="fw-bold">Women's Collections</h4>
                                    <p>Featured woman collections that give you another vibe.</p>
                                    <button className="btn btn-outline-light rounded-0">Shop Now →</button>
                                </div>
                            </div>

                            <div className="col-md-6">
                                {/* Speakers */}
                                <div className="text-white rounded-4 p-4" style={{
                                    height: "190px",
                                    backgroundImage: `url(${dev8IMG})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                }}>
                                    <h5 className="fw-bold">Speakers</h5>
                                    <p>Amazon wireless speakers</p>
                                    <button className="btn btn-outline-light rounded-0">Shop Now →</button>
                                </div>
                            </div>

                            <div className="col-md-6">
                                {/* Perfume */}
                                <div className="text-white rounded-4 p-4" style={{
                                    height: "190px",
                                    backgroundImage: `url(${dev9IMG})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }}>
                                    <h5 className="fw-bold">Perfume</h5>
                                    <p>GUCCI INTENSE OUD EDP</p>
                                    <button className="btn btn-outline-light rounded-0">Shop Now →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className="container mt-5 mb-5">
                <div className="row g-4 text-center">
                    <div className="col-md-4">
                        <div className="p-4">
                            <i className="fa-solid fa-truck fa-3x mb-3"></i>
                            <h5 className="fw-bold">FREE AND FAST DELIVERY</h5>
                            <p className="text-muted">Free delivery for all orders over $140</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4">
                            <i className="fa-solid fa-headset fa-3x mb-3"></i>
                            <h5 className="fw-bold">24/7 CUSTOMER SERVICE</h5>
                            <p className="text-muted">Friendly 24/7 customer support</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4">
                            <i className="fa-solid fa-shield-alt fa-3x mb-3"></i>
                            <h5 className="fw-bold">MONEY BACK GUARANTEE</h5>
                            <p className="text-muted">We return money within 30 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}