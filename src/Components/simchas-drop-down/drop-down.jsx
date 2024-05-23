import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineSlowMotionVideo,
} from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { IoIosCut } from "react-icons/io";
import { FaChartBar, FaGlassCheers } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { TbBottle } from "react-icons/tb";
import { PiFlowerTulipDuotone } from "react-icons/pi";
import { VscFileSubmodule } from "react-icons/vsc";
import "./style.css";
import SubMenu from "./sub-menu/simchas-sub-menu";

const links = [
  {
    icon: <FaCartShopping />,
    text: "BabyBoy",
    arrow: true,
    submenu: [
      { icon: <LuBaby />, text: "BabyBoy", isIcon: true },
      { isIcon: false, text: "BabyBoy Submenu 2" },
      { isIcon: false, text: "BabyBoy Submenu 3" },
      { isIcon: false, text: "BabyBoy Submenu 4" },
    ],
  },
  {
    icon: <LuBaby />,
    text: "Kidush",
    arrow: false,
    submenu: [],
  },
  {
    icon: <IoIosCut />,
    text: "Upsherin",
    arrow: false,
    submenu: [],
  },
  {
    icon: <FaChartBar />,
    text: "Bar Mitzwah",
    arrow: true,
    submenu: [
      { icon: <FaChartBar />, text: "Bar Mitzwah ", isIcon: true },
      { isIcon: false, text: "Bar Mitzwah Submenu 2" },
      { isIcon: false, text: "Bar Mitzwah Submenu 3" },
      { isIcon: false, text: "Bar Mitzwah Submenu 4" },
    ],
  },
  {
    icon: <GiBigDiamondRing />,
    text: "Tenoyem",
    arrow: true,
    submenu: [
      { icon: <GiBigDiamondRing />, text: "Tenoyem", isIcon: true },
      { isIcon: false, text: "Tenoyem Submenu 2" },
      { isIcon: false, text: "Tenoyem Submenu 3" },
      { isIcon: false, text: "Tenoyem Submenu 4" },
    ],
  },
  {
    icon: <TbBottle />,
    text: "Bavarfen",
    arrow: true,
    submenu: [
      { icon: <TbBottle />, text: "Bavarfen", isIcon: true },
      { isIcon: false, text: "Bavarfen Submenu 2" },
      { isIcon: false, text: "Bavarfen Submenu 3" },
      { isIcon: false, text: "Bavarfen Submenu 4" },
    ],
  },
  {
    icon: <FaGlassCheers />,
    text: "Wedding",
    arrow: true,
    submenu: [
      { icon: <FaGlassCheers />, text: "Wedding", isIcon: true },
      { isIcon: false, text: "Wedding Submenu 2" },
      { isIcon: false, text: "Wedding Submenu 3" },
      { isIcon: false, text: "Wedding Submenu 4" },
    ],
  },
  {
    icon: <PiFlowerTulipDuotone />,
    text: "Shiva Bruches",
    arrow: false,
    submenu: [],
  },
  {
    icon: <MdOutlineSlowMotionVideo />,
    text: "Videos",
    arrow: false,
    submenu: [],
  },
  {
    icon: <VscFileSubmodule />,
    text: "Others",
    arrow: true,
    submenu: [
      { icon: <VscFileSubmodule />, text: "Others", isIcon: true },
      { isIcon: false, text: "Others Submenu 2" },
      { isIcon: false, text: "Others Submenu 3" },
      { isIcon: false, text: "Others Submenu 4" },
    ],
  },
];

const SimchasDropDown = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <span className="simchas-drop-down">
        {links.map((link, index) => (
          <div
            key={index}
            className={link.arrow ? "drop-down-link-icon-wrap" : ""}
            onMouseEnter={() => link.arrow && setHoveredIndex(index)}
            onMouseLeave={() => link.arrow && setHoveredIndex(null)}
          >
            <p className="drop-down-link">
              <span className="drop-down-icon">{link.icon}</span>
              {link.text}
            </p>
            {link.arrow && (
              <MdOutlineKeyboardArrowRight className="right-arrow" />
            )}
            {hoveredIndex === index && <SubMenu subMenu={link.submenu} />}
          </div>
        ))}
      </span>
    </div>
  );
};

export default SimchasDropDown;
