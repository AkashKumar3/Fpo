import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css'; // Add a custom CSS file for additional styling

const Navbar = () => {
  return (
    <div>
      <nav className='navbar-main'>
      {/* <div className="navbar-left">
          <img src={'https://th.bing.com/th?id=OIP.SN8Sb3zD2xPNd-7e-nZeoQHaMk&w=191&h=325&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'} alt="Logo" className="logo-img" />
        </div> */}
        <a href="#" className='mrd'>Ministry of Ruler Development</a>
        <div className='navbar-links'>
            {/* <div className= 'navbar-links-images'>
            <img src="https://th.bing.com/th/id/OIP.zwS0iqEVsJzavs1JXqwEQAHaD2?w=315&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            </div > */}
      
          <a href="/rentEquipments">Rent Equipments</a>
          <a href="buy-seeds.html">Cold Storage</a>
          <a href="rent-equipment.html">Government Schemes</a>
          <a href="/marketplace">Marketplace</a>
          <a href="sell-goods.html">Shop</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
