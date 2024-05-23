import React from "react";
import Logo from "../../images.png";
import "./style.css";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import SimchasDropDown from "../simchas-drop-down/drop-down";
import { IoCartOutline } from "react-icons/io5";
import Offcanvas from "../Offcanvas/offcanvas";

const NewHeader = () => {
  return (
    <>
      <div>
        <div className="header-container">
          <div className="header-sub-container">
            <div className="logo-wrap">
              <img src={Logo} className="logo" />
              <p className="beta-logo">BETA</p>
            </div>
            <div className="links-icons-wrap">
              <div className="links-wrap">
                <Link className="link">Home</Link>
                <Link className="link ocassions-link">
                  Occasions
                  <span className="ocassions-drop-down">
                    <p className="drop-down-link">Chanukah</p>
                    <p className="drop-down-link">Chanukah</p>
                  </span>
                </Link>
                <Link className="link simchas-link">
                  Simchas
                  <SimchasDropDown />
                </Link>
                <Link className="link">Videos</Link>
                <Link className="link">Custom</Link>
                <Link className="link">Contact Us</Link>
              </div>
              <IoMdHeartEmpty className="nav-icons" />
              <FiShoppingCart className="nav-icons" />
              <CgProfile className="nav-icons" />
            </div>
          </div>
          <div className="responsive-sub-container">
            <Offcanvas />
            <div className="logo-wrap">
              <img src={Logo} className="logo logo-res" />
              <p className="beta-logo beta-logo-res">BETA</p>
            </div>
            <div>
              <IoCartOutline fontSize={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHeader;
