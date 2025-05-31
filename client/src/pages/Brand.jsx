import { useState } from 'react';
import axios from 'axios';
import './Brand.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from '../assets/Group 111.png';
import heroImage from '../assets/heroImg.jpg';
import aboutImage from '../assets/van.png';
import delivery1 from '../assets/deliever1.png';
import delivery2 from '../assets/deliever2.png';
import delivery3 from '../assets/deliever3.png';
import vanDelivery from '../assets/vanDelievery.png';
import contactImage from '../assets/location.png';
import FaYoutube from '../assets/Icon-2.png';
import FaLinkedin from '../assets/Icon-3.png';
import FaXTwitter from '../assets/Icon.png';
import FaInstagram from '../assets/Icon-1.png';

const TechCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const techItems = [
    {
      image: delivery1,
      caption: "Seamless multi-vendor order processing and realtime inventory sync"
    },
    {
      image: delivery2,
      caption: "Predictive demand analytics and intelligent route optimisation"
    },
    {
      image: delivery3,
      caption: "Dynamic delivery assignments and 30min fulfillment capability"
    },
    {
      image: delivery3,
      caption: "Real-time customer interaction and live order tracking"
    },
    {
      image: delivery1,
      caption: "Vendor dashboards, performance incentives, and gamified engagement"
    }
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {techItems.map((item, index) => (
          <div key={index} className="tech-item">
            <img src={item.image} alt={`Tech ${index + 1}`} />
            <p className="tech-caption">{item.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function Brand() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  const [showMenu, setShowMenu] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
    const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/veloceeocontact`, formData);
      if (response.status === 201) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
          setShowModal(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

    useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);

   
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="#innovation" onClick={closeMenu}>Innovation</a></li>
          <li><a href="#vision" onClick={closeMenu}>Vision</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
        </ul>
      </nav>

      <div className="hero-container" id="home">
        <img src={heroImage} alt="Hero Banner" className="hero-image" />
      </div>

      <section className="about-section" id="about">
        <h2 className="about-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              A New Era of Q-Commerce. Veloceeo, a flagship initiative by Yugant Industries Pvt. Ltd., is redefining quick commerce by blending speed, sustainability, and local empowerment. Unlike conventional dark-store models, Veloceeo champions a region-first approach - integrating neighborhood stores, kirana outlets, and micro-warehouses into a smart, tech-enabled delivery network. Built to operate without costly infrastructure, Veloceeo is designed to scale rapidly while keeping commerce hyperlocal, inclusive, and future-ready.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
        </div>
      </section>

      <section className="tech-section" id="innovation">
        <h2 className="tech-heading">Technology & Innovation</h2>
        <p className="tech-paragraph">
          Smarter Commerce, Delivered Veloceeo's strength lies in its cutting-edge tech stack that powers:
        </p>
        <div className="tech-gallery">
          <TechCarousel />
        </div>
        <p className="tech-paragraph-2">
          Through these innovations, Veloceeo empowers local sellers to operate with the efficiency of large-scale chains - bridging the digital divide in urban retail.
        </p>
      </section>

      <section className="impact-section" id="vision">
        <h2 className="impact-heading">Impact & Vision</h2>
        <div className="impact-content">
          <img src={vanDelivery} alt="Impact" className="impact-image" />
          <div className="impact-text">
            <p className="impact-text-1">Local First, Nationwide Next</p>
            <p className="impact-text-2">
              Veloceeo is more than a delivery service — it's a movement toward inclusive digital commerce. By placing regional vendors at the heart of its logistics model, Veloceeo drives economic participation, customer trust, and sustainable urban development. With its scalable micro-logistics framework, the brand is poised to expand across India's cities and towns - ensuring that every essential reaches consumers fast, fairly, and locally.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 className="contact-heading">Contact Us</h2>
      </section>

      <section className="contact-section-1">

        <div className="contact-form-container">
          {showModal && (
            <div className="modal-overlay" style={{color:'green' ,fontSize:'20px' ,textAlign:'center' }} >
           
                
                <p>Thank you for Contacting Us </p>
              
              </div>
            
          )}
          <form onSubmit={handleSubmit}>
            <label className="form-label">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="form-input"
              disabled={isSubmitting}
            />
            <label className="form-label">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="form-input"
              disabled={isSubmitting}
            />
            <label className="form-label">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="form-input"
              disabled={isSubmitting}
            />
            <label className="form-label">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
              className="form-textarea"
              disabled={isSubmitting}
            ></textarea>
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
        <div className="contact-image-container">
          <img src={contactImage} alt="Contact Us" className="contact-image" />
        </div>
      </section>



      <footer className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <div className="logo">
              <img className="bottom-logo-img" src={logo} alt="Logo" />
            </div>
            <div className="social-icons">
              <img src={FaInstagram} alt="Instagram" className="insta-image" />
              <img src={FaYoutube} alt="YouTube" className="youtube-image" />
              <img src={FaLinkedin} alt="LinkedIn" className="linkedin-image" />
              <img src={FaXTwitter} alt="Twitter" className="twitter-image" />
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Veloceeo</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about" >About Us</a></li>
                <li><a href="#innovation" >Innovation</a></li>
                <li><a href="#vision" >Vision</a></li>
                <li><a href="#contact" >Contact Us</a></li>
              </ul>
            </div>
            <div className='footer-column' >
              <h4>Yugant</h4>
              <ul>
                <li onClick={() => navigate('/')} ><a >Home</a></li>
                <li onClick={() => navigate('/about')}><a>About Us</a> </li>
                <li onClick={() => navigate('/team')} ><a>Our Team</a></li>
                <li onClick={() => navigate('/services')} ><a>Services</a></li>
                <li onClick={() => navigate('/career')} ><a>Career</a></li>
                <li onClick={() => navigate('/contact')} ><a>Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>Blog</li>
                <li>Support</li>
                <li>Developers</li>
                <li>Color Tool</li>
                <li>Design Systems</li>
                <li>Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 Yugant Industries Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Brand;
