import { Form } from 'react-router-dom';
import logo from '../images/Logo (3).png';
import frame from '../images/Frame 719.png';
export const Footer = () => {
  return (
 <>
 <footer className="bg-black text-light pt-5">
        <div className="container">

          {/* 5 Columns */}
          <div className="d-flex justify-content-between flex-wrap">

            {/* Column 1 */}
            <div className="flex-fill me-3">
              <img src={logo} alt="Logo" className="d-inline-block align-text-top "  />
              <h5 className="text-white mt-3">Subscribe</h5>
              <p className="text-white mt-2">Get 10% off your first order</p>
              <div className="input-group mb-3 w-75">
                <input
                  type="email"
                  className="form-control text-white bg-black border-end-0 email"
                  placeholder="enter your email"
                />
                <button className="btn btn-outline-light border-start-0">
                  <i className="bi bi-arrow-right-circle"></i>
                </button>
              </div>
            </div>

            {/* Column 2: Support */}
            <div className="flex-fill me-3">
              <h5 className="mb-3">Support</h5>
              <ul className="list-unstyled tele">
                <li className="pb-2">111 Bijoy Sarani, Dhaka,<br /> DH 1515, Bangladesh.</li>
                <li className="pb-2">exclusive@gmail.com</li>
                <li className="pb-2">+88015-88888-9999</li>
              </ul>
            </div>

            {/* Column 3: Account */}
            <div className="flex-fill me-3">
              <h5 className="mb-3">Account</h5>
              <ul className="list-unstyled tele">
                <li className="pb-2">My Account</li>
                <li className="pb-2">Login / Register</li>
                <li className="pb-2">Cart</li>
                <li className="pb-2">Wishlist</li>
                <li className="pb-2">Shop</li>
              </ul>
            </div>

            {/* Column 4: Quick Link */}
            <div className="flex-fill me-3">
              <h5 className="mb-3">Quick Link</h5>
              <ul className="list-unstyled tele">
                <li className="pb-2">Privacy Policy</li>
                <li className="pb-2">Terms Of Use</li>
                <li className="pb-2">FAQ</li>
                <li className="pb-2">Contact</li>
              </ul>
            </div>

            {/* Column 5: Social + Newsletter */}
            <div className="flex-fill ">
              <h5 className="mb-3">Download App</h5>
              <div className="input-group mb-3 d-flex flex-column">
                <p className='fs-6'>Save $3 with App New User Only</p> 
                <img src={frame} alt="" srcset="" width={220} />
              
              </div>
              <div className="d-flex gap-3 mt-2">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-tiktok"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </div>

          </div>
 

        </div>
      </footer>
 </>
  )
}
 