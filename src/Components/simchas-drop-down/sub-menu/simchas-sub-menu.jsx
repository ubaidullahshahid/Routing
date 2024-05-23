import React from "react";
import "./style.css";

const SubMenu = ({ subMenu }) => {
  return (
    <span className="sub-menu">
      {subMenu.map((item, index) => (
        <p
          key={index}
          className={`sub-menu-link ${item.isIcon ? "icon-true" : ""}`}
        >
          {item.isIcon && <span className="sub-menu-icon">{item.icon}</span>}
          <span className={item.isIcon ? "text-icon-true" : ""}>
            {item.text}
          </span>
        </p>
      ))}
    </span>
  );
};

export default SubMenu;
