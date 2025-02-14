import { useEffect } from 'react';
import ImageCarousel from "./ImageCarousel";
import { FaArrowRight } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Optional: Controls the animation duration
      once: true, // Optional: Ensures the animation happens only once
    });

    // Optional: If you dynamically load content or need to reset AOS
    AOS.refresh();
  }, []);

  return (
    <div>
      <ImageCarousel/>
      <div className="second-band">
        <div className="container">
          <div className="content">
          <h1>Discover our world of paint and decor</h1>
          <p>One stop solution for all you need to keep your living space intact.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="second-band-box">
              <div className="overlay"></div>
                <div className="background-image">
                  <img src="/images/Interior-Paints.webp" alt="" />
                </div>
                <div className="second-box-content">
                  <h5>Interior Paints</h5>
                </div>
                <div className="overlay-content">
                <h5>Interior Paints</h5>
                <p>Discover a diverse selection of interior paints catering to luxury, premium and economy along with designer Royale collection.</p>
                <button>View Deatils <FaArrowRight className="icon"/></button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="second-band-box">
              <div className="overlay"></div>
                <div className="background-image">
                  <img src="/images/Exterior-Paints.jpg" alt="" />
                </div>
                <div className="second-box-content">
                  <h5>Exterior Paints</h5>
                </div>
                <div className="overlay-content">
                <h5>Exterior Paints</h5>
                <p>Enhance your outdoor spaces with our range of exterior paints and textures tailored for you, from high-end to budget-friendly.</p>
                <button>View Deatils <FaArrowRight className="icon"/></button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="second-band-box">
              <div className="overlay"></div>
                <div className="background-image">
                  <img src="/images/Wall-Textures.webp" alt="" />
                </div>
                <div className="second-box-content">
                  <h5>Wall Textures</h5>
                </div>
                <div className="overlay-content">
                <h5>Wall Textures</h5>
                <p>Transform your interiors with special texture finishes- Royale Play, inspired by themes around the world, for a personalized.</p>
                <button>View Deatils <FaArrowRight className="icon"/></button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="second-band-box">
              <div className="overlay"></div>
                <div className="background-image">
                  <img src="/images/Wallpapers.webp" alt="" />
                </div>
                <div className="second-box-content">
                  <h5>Wallpapers</h5>
                </div>
                <div className="overlay-content">
                <h5>Wallpapers</h5>
                <p>Discover our extensive wallpaper collections, offering a range of designs from Artisanal to exclusive Sabyasachi collection.</p>
                <button>View Deatils <FaArrowRight className="icon"/></button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="second-band-box">
              <div className="overlay"></div>
                <div className="background-image">
                  <img src="/images/Water-Proofing.webp" alt="" />
                </div>
                <div className="second-box-content">
                  <h5>Water Proofing</h5>
                </div>
                <div className="overlay-content">
                <h5>Water- Proofing</h5>
                <p>Explore our waterproofing solutions, designed to shield all areas from terrace or bathroom, guaranteeing a leak-proof space.</p>
                <button>View Deatils <FaArrowRight className="icon"/></button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="second-band-box">
              <div className="overlay"></div>
                <div className="background-image">
                  <img src="/images/Wood-Paints.webp" alt="" />
                </div>
                <div className="second-box-content">
                  <h5>Wood Paints</h5>
                </div>
                <div className="overlay-content">
                <h5>Wood Paints</h5>
                <p>Delve into our wood finishing options, offering a spectrum of finishes from Clear to Coloured, suitable for all wood types.</p>
                <button>View Deatils <FaArrowRight className="icon"/></button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="second-band-box">
              <div className="overlay"></div>
                <div className="background-image">
                  <img src="/images/Metal-Paints.jpg" alt="" />
                </div>
                <div className="second-box-content">
                  <h5>Metal Paints</h5>
                </div>
                <div className="overlay-content">
                <h5>Metal Paints</h5>
                <p>Explore our range of enamel paints for specially formulated paints that protect and beautify surfaces, and are easy-to-clean.</p>
                <button>View Deatils <FaArrowRight className="icon"/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-band">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
