import React from "react";
import { IoMenu } from "react-icons/io5";
import "./style.css";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { IoIosCut } from "react-icons/io";
import { FaChartBar, FaGlassCheers } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { TbBottle } from "react-icons/tb";
import { PiFlowerTulipDuotone } from "react-icons/pi";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineContactSupport } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Offcanvas = () => {
  const menuItems = [
    {
      icon: <FaCartShopping fontSize={20} />,
      text: "BabyBoy",
    },
    {
      icon: <LuBaby fontSize={20} />,
      text: "Kidush",
    },
    {
      icon: <IoIosCut fontSize={20} />,
      text: "Upsherin",
    },
    {
      icon: <FaChartBar fontSize={20} />,
      text: "Bar Mitzwah",
    },
    {
      icon: <GiBigDiamondRing fontSize={20} />,
      text: "Tenoyem",
    },
    {
      icon: <TbBottle fontSize={20} />,
      text: "Bavarfen",
    },
    {
      icon: <FaGlassCheers fontSize={20} />,
      text: "Wedding",
    },
    {
      icon: <PiFlowerTulipDuotone fontSize={20} />,
      text: "Shiva Bruches",
    },
    {
      icon: <MdOutlineSlowMotionVideo fontSize={20} />,
      text: "Videos",
    },
    {
      icon: <VscFileSubmodule fontSize={20} />,
      text: "Others",
    },
  ];

  return (
    <div>
      <div className="offcanvas-container">
        <div
          className="offcanvas-button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBackdrop"
          aria-controls="offcanvasWithBackdrop"
        >
          <IoMenu fontSize={20} />
        </div>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasWithBackdrop"
          aria-labelledby="offcanvasWithBackdropLabel"
        >
          <div class="offcanvas-header">
            <div className="offcanvas-links-wrap">
              <div className="offcanvas-header-links">
                <IoMdHeartEmpty fontSize={20} />
                <Link className="offcanvas-link">Wishlist</Link>
              </div>
              <div className="offcanvas-header-links">
                <MdOutlineContactSupport fontSize={20} />
                <Link className="offcanvas-link">Contact Us</Link>
              </div>
              <div className="offcanvas-header-links">
                <CgProfile fontSize={20} />
                <Link className="offcanvas-link">Account</Link>
              </div>
            </div>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div className="offcanvas-menu-wrap">
              {menuItems.map((item, index) => (
                <p key={index} className="offcanvas-menu">
                  <span>{item.icon}</span>
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
