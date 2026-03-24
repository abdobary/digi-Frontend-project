import React, { useState } from "react";
import mainImg from "../images2/main.png";
import { useNavigate } from 'react-router-dom'
import Img1 from "../images2/1.png";
import Img2 from "../images2/2.png";
import Img3 from "../images2/3.png";
import Img4 from "../images2/4.png";
import Img7 from "../images2/7.png";
import Img6 from "../images2/6.png";
import Img5 from "../images2/5.png";
import Img42 from "../images2/4-2.png";

export default function SingleProduct() {
  const [count, setCount] = useState(2);
  const [mainImage, setMainImage] = useState(mainImg);

  const navigate = useNavigate();

  const handleViewClick = () => {
        navigate('/allproducts');
    };

  const products = [
    {
      img: Img7,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 5,
      reviews: 88,
      discount: "-40%",
    },
    {
      img: Img6,
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      rating: 4,
      reviews: 75,
      discount: "-35%",
    },
    {
      img: Img5,
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      rating: 5,
      reviews: 99,
      discount: "-30%",
    },
    {
      img: Img42,
      title: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 4,
      reviews: 65,
    },
  ];

  return (
    <div className="container my-5">
      <nav>
        <small className="text-muted">
          Account / Gaming /{" "}
          <strong className="text-dark">Havic HV G-92 Gamepad</strong>
        </small>
      </nav>

      <div className="row mt-4 g-4">
        <div className="col-md-6 d-flex gap-3">
          <div className="d-flex flex-column gap-2">
            {[Img1, Img2, Img3, Img4].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="product"
                className="img-thumbnail"
                width="70"
                height="70"
                style={{ cursor: "pointer", objectFit: "cover" }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="flex-grow-1 d-flex justify-content-center align-items-center bg-light rounded" style={{ height: "400px" }}>
            <img 
              src={mainImage} 
              alt="main" 
              style={{ 
                maxWidth: "100%", 
                maxHeight: "100%", 
                objectFit: "contain" 
              }} 
            />
          </div>
        </div>

        <div className="col-md-6">
          <h3>Havic HV G-92 Gamepad</h3>

          <div className="mb-2 d-flex align-items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`bi ${i < 4 ? "bi-star-fill" : "bi-star"} text-warning`}
              ></i>
            ))}
            <small className="text-muted ms-2">(150 Reviews)</small> |{" "}
            <span className="text-success ms-1">In Stock</span>
          </div>

          <h4 className="text-danger">$192.00</h4>

          <p className="text-muted">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive.
          </p>

          <div className="mb-3 d-flex align-items-center gap-2">
            <span>Colours:</span>
            <span
              className="bg-primary rounded-circle"
              style={{ width: 20, height: 20 }}
            ></span>
            <span
              className="bg-danger rounded-circle"
              style={{ width: 20, height: 20 }}
            ></span>
          </div>

          <div className="mb-3">
            <span className="me-2">Size:</span>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`btn btn-sm me-1  ${size === "M" ? "btn-danger" : "btn-outline-secondary"}`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="input-group w-auto">
              <button
                onClick={() => setCount(Math.max(1, count - 1))}
                className="btn btn-outline-secondary"
              >
                -
              </button>
              <input
                type="text"
                className="form-control text-center"
                value={count}
                readOnly
                style={{ width: "50px" }}
              />
              <button
                onClick={() => setCount(count + 1)}
                className="btn btn-outline-secondary"
              >
                +
              </button>
            </div>
            <button className="btn btn-danger btn-lg px-4" onClick={handleViewClick}>Buy Now</button>
            <button className="btn btn-outline-secondary" onClick={handleViewClick}>
              <i className="bi bi-heart"></i>
            </button>
          </div>

          <div className="border rounded p-3 mb-4">
            <div className="d-flex gap-3 mb-3">
              <i className="bi bi-truck"></i>
              <div>
                <strong>Free Delivery</strong>
                <p className="mb-0 small text-muted">
                  Enter your postal code...
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 border-top pt-3 mt-3">
              <i className="bi bi-arrow-repeat"></i>
              <div>
                <strong>Return Delivery</strong>
                <p className="mb-0 small text-muted">Free 30 Days Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-5">
        {products.map((p, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <div className="border rounded overflow-hidden position-relative bg-white h-100">
              {p.discount && (
                <span className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 small">
                  {p.discount}
                </span>
              )}

              <div className="position-absolute top-0 end-0 d-flex flex-column gap-1 p-2">
                <button className="btn btn-white btn-sm border rounded-circle p-0">
                  <i className="bi bi-heart" onClick={handleViewClick}></i>
                </button>
                <button className="btn btn-white btn-sm border rounded-circle p-0">
                  <i className="bi bi-eye"></i>
                </button>
              </div>

              <img
                src={p.img}
                alt={p.title}
                className="w-100 bg-light p-3"
                style={{ height: 160, objectFit: "contain" }}
              />

              <div className="p-3 text-center">
                <div className="mb-1" style={{ fontSize: 13 }}>
                  {p.title}
                </div>
                <div className="mb-1">
                  <span className="fw-bold text-danger me-2">${p.price}</span>
                  <span className="text-muted text-decoration-line-through">
                    ${p.oldPrice}
                  </span>
                </div>
                <div className="text-warning mb-1">
                  {"★".repeat(p.rating)}
                  {"☆".repeat(5 - p.rating)}
                  <span className="text-muted"> ({p.reviews})</span>
                </div>
                <button className="btn btn-dark btn-sm w-100 mt-2" onClick={handleViewClick}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}