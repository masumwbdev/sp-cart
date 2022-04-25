import React from 'react';
import './Navbar.css'

const Navbar = ({ setShow, size }) => {
    return (
        <div>
            <nav>
                <div className="nav_box">
                    <span className="my_shop" onClick={() => setShow(true)}>
                        My Shoping
                    </span>
                    <div className="cart" onClick={() => setShow(false)}>
                        <span>
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        <span>{size}</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;