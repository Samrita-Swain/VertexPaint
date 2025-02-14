import { Link } from 'react-router-dom';
import Footer1 from "./Footer1"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  const textColor={
    color: '#a7a7a7',
  }
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
              <h6>Get to Know Us</h6>
              <ul>
              <li><Link to="/">Home</Link>
              </li>
        <li><Link to="/">Categories</Link></li>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/">Career</Link></li>
        <li><Link to="/">Blog</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h6>Paints & Products</h6>
              <ul>
              <li><Link to="/">Interior Wall Paints</Link></li>
        <li><Link to="/">Exterior Wall Paints</Link></li>
        <li><Link to="/">Wall Textures</Link></li>
        <li><Link to="/">Wallpapers</Link></li>
        <li><Link to="/">Water- Proofing</Link></li>
        <li><Link to="/">Wood Paints</Link></li>
        <li><Link to="/">Metal Paints</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h6>POLICIES</h6>
              <ul>
              <li>
              <Link to="/">Warranty
              </Link></li>
        <li><Link to="/">Quality Policy</Link></li>
        <li><Link to="/">Customer Policy</Link></li>
        <li><Link to="/">Position Statement</Link></li>
        <li><Link to="/">Environmental Policy</Link></li>
        <li><Link to="/">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h6 style={textColor}>
              Address: Naraingarh Road, Ikolaha,
Khanna, Ikolahi, Punjab
              </h6>
              <h6 style={textColor}>Pin: 141 401</h6>
              <br />
              <h6 style={textColor}><span>Phone:</span>9888 509 253</h6>
              <h6 style={textColor}><span>Email:</span>vertexpaints@gmail.com</h6>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h6>
              Connect with us
              </h6>
              <div className="icons">
              <FaFacebook />
              <FaXTwitter />
              <FaYoutube />
              <FaSquareInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1/>
    </div>
  )
}

export default Footer
