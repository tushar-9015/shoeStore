import React from "react";
import Logo from "../Logo";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite, MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const userToken = false;

  const navLinks = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Products",
      slug: "/products",
    },
    {
      name: "About",
      slug: "/about",
    },
  ];

  const navLinksSecond = [
    {
      id: 1,
      name: <FaUser />,
      slug: "/login",
      active: true,
    },
    {
      id: 2,
      name: <FaShoppingCart />,
      slug: "/cart",
      active: true,
    },
    {
      id: 3,
      name: <MdOutlineFavorite />,
      slug: "/wishlist",
      active: true,
    },
  ];
  return (
    <header className="nav-container">
      <div className="nav-left-side">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="nav-center-side">
        {navLinks.map((item) => (
          <Link to={item.slug}>
            <li key={item.name}>
              <h5 className="page-name">{item.name}</h5>
            </li>
          </Link>
        ))}
      </div>
      <div className="nav-right-side">
        {userToken ? (
          <NavLink to="./login">
            <span>
              <MdLogout />
            </span>
          </NavLink>
        ) : (
          <NavLink to="./login">
            <span>
              <FaUser />
            </span>
          </NavLink>
        )}

        <NavLink to="./wishlist">
          <MdOutlineFavorite />

          {/* {userToken && wishlist.length !== 0 && <span>{wishlist.length}</span>}  */}
        </NavLink>

        <NavLink to="./cart">
          <FaShoppingCart />
          {/* {userToken && cart.length !== 0 && <span>{cart.length}</span>} */}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
