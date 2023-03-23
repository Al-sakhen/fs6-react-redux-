import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const { value, minNum, maxNum } = useSelector(({ counter }) => counter);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary border">
                <div className="container">
                    <ul className="d-flex list-unstyled gap-4 mt-2">
                        <li>
                            <NavLink className='text-decoration-none text-white' to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='text-decoration-none text-white' to="/products">Products</NavLink>
                        </li>
                    </ul>

                    <h5 className="ms-auto fw-bolder">Redux toolkit 🤫😎</h5>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
