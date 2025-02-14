import React from 'react';
import { X, Mail, Phone, MapPin, Clock } from 'lucide-react';

interface DrawerProps{
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="drawer-backdrop" onClick={onClose}></div>
      )}
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="drawer-content">
          <h2 className="drawer-title">Store Information</h2>
          
          <div className="info-section">
            <div className="info-item">
              <Clock className="info-icon" />
              <div>
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>123 Store Street</p>
                <p>City, State 12345</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>
            
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>info@store.com</p>
              </div>
            </div>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;