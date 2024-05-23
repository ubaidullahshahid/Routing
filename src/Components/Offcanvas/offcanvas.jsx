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
            <p>
              <span>
                <FaCartShopping />
              </span>
              BabyBoy
              <MdOutlineKeyboardArrowRight />
            </p>
            <p>
              <span>
                <LuBaby />
              </span>
              Kidush
            </p>
            <p>
              <span>
                <IoIosCut />
              </span>
              Upsherin
            </p>
            <div>
              <p>
                <span>
                  <FaChartBar />
                </span>
                Bar Mitzwah
                <MdOutlineKeyboardArrowRight />
              </p>
            </div>
            <div>
              <p>
                <span>
                  <GiBigDiamondRing />
                </span>
                Tenoyem
                <MdOutlineKeyboardArrowRight />
              </p>
            </div>
            <div>
              <p>
                <span>
                  <TbBottle />
                </span>
                Bavarfen
                <MdOutlineKeyboardArrowRight />
              </p>
            </div>
            <div>
              <p>
                <span>
                  <FaGlassCheers />
                </span>
                Wedding
                <MdOutlineKeyboardArrowRight />
              </p>
            </div>
            <p>
              <span>
                <PiFlowerTulipDuotone />
              </span>
              Shiva Bruches
            </p>
            <p>
              <span>
                <MdOutlineSlowMotionVideo />
              </span>
              Videos
            </p>
            <div>
              <p>
                <span>
                  <VscFileSubmodule />
                </span>
                Others
                <MdOutlineKeyboardArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
