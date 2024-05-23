import React from "react";
import { IoMenu } from "react-icons/io5";
import "./style.css";
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
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineContactSupport } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Offcanvas = () => {
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
            {/* <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">
              Offcanvas with backdrop
            </h5> */}
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
              <p className="offcanvas-menu">
                <span>
                  <FaCartShopping fontSize={20} />
                </span>
                BabyBoy
              </p>
              <p className="offcanvas-menu">
                <span>
                  <LuBaby fontSize={20} />
                </span>
                Kidush
              </p>
              <p className="offcanvas-menu">
                <span>
                  <IoIosCut fontSize={20} />
                </span>
                Upsherin
              </p>
              <p className="offcanvas-menu">
                <span>
                  <FaChartBar fontSize={20} />
                </span>
                Bar Mitzwah
              </p>
              <p className="offcanvas-menu">
                <span>
                  <GiBigDiamondRing fontSize={20} />
                </span>
                Tenoyem
              </p>
              <p className="offcanvas-menu">
                <span>
                  <TbBottle fontSize={20} />
                </span>
                Bavarfen
              </p>
              <p className="offcanvas-menu">
                <span>
                  <FaGlassCheers fontSize={20} />
                </span>
                Wedding
              </p>
              <p className="offcanvas-menu">
                <span>
                  <PiFlowerTulipDuotone fontSize={20} />
                </span>
                Shiva Bruches
              </p>
              <p className="offcanvas-menu">
                <span>
                  <MdOutlineSlowMotionVideo fontSize={20} />
                </span>
                Videos
              </p>
              <p className="offcanvas-menu">
                <span>
                  <VscFileSubmodule fontSize={20} />
                </span>
                Others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
