import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineSlowMotionVideo,
} from "react-icons/md";
import { LuBaby } from "react-icons/lu";
import { IoIosCut } from "react-icons/io";
import { FaChartBar, FaGlassCheers } from "react-icons/fa";
import { GiBigDiamondRing, GiDiamondRing } from "react-icons/gi";
import { TbBottle } from "react-icons/tb";
import { PiFlowerTulipDuotone } from "react-icons/pi";
import { VscFileSubmodule } from "react-icons/vsc";
import "./style.css";

const SimchasDropDown = () => {
  return (
    <div>
      <span className="simchas-drop-down">
        <div className="drop-down-link-icon-wrap">
          <p className="drop-down-link">
            <span className="drop-down-icon">
              <FaCartShopping />
            </span>
            BabyBoy
          </p>
          <MdOutlineKeyboardArrowRight className="right-arrow" />
        </div>
        <p className="drop-down-link">
          <span className="drop-down-icon">
            <LuBaby />
          </span>
          Kidush
        </p>
        <p className="drop-down-link">
          <span className="drop-down-icon">
            <IoIosCut />
          </span>
          Upsherin
        </p>
        <div className="drop-down-link-icon-wrap">
          <p className="drop-down-link">
            <span className="drop-down-icon">
              <FaChartBar />
            </span>
            Bar Mitzwah
          </p>
          <MdOutlineKeyboardArrowRight className="right-arrow" />
        </div>
        <div className="drop-down-link-icon-wrap">
          <p className="drop-down-link">
            <span className="drop-down-icon">
              <GiBigDiamondRing />
            </span>
            Tenoyem
          </p>
          <MdOutlineKeyboardArrowRight className="right-arrow" />
        </div>
        <div className="drop-down-link-icon-wrap">
          <p className="drop-down-link">
            <span className="drop-down-icon">
              <TbBottle />
            </span>
            Bavarfen
          </p>
          <MdOutlineKeyboardArrowRight className="right-arrow" />
        </div>
        <div className="drop-down-link-icon-wrap">
          <p className="drop-down-link">
            <span className="drop-down-icon">
              <FaGlassCheers />
            </span>
            Wedding
          </p>
          <MdOutlineKeyboardArrowRight className="right-arrow" />
        </div>
        <p className="drop-down-link">
          <span className="drop-down-icon">
            <PiFlowerTulipDuotone />
          </span>
          Shiva Bruches
        </p>
        <p className="drop-down-link">
          <span className="drop-down-icon">
            <MdOutlineSlowMotionVideo />
          </span>
          Videos
        </p>
        <div className="drop-down-link-icon-wrap">
          <p className="drop-down-link">
            <span className="drop-down-icon">
              <VscFileSubmodule />
            </span>
            Others
          </p>
          <MdOutlineKeyboardArrowRight className="right-arrow" />
        </div>
      </span>
    </div>
  );
};

export default SimchasDropDown;
