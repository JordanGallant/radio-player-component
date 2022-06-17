import React from "react";
import "./RadioPlayerContainer.css";
import DropDownMenu from "./DropDownMenu.js";

const RadioPlayerContainer = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const onClick = () => setShowMenu(true);

  return (
    <>
      <div className="main-container">
        <div className="top-container">
          <div className="play-box">
            <span> icon </span>
            <button className="play-text">PLAY</button>
          </div>
          <div className="google-calender-intergration-text-div">
            <h5 className="google-calender-intergration-text">Lorem Ipsum</h5>
          </div>
        </div>
        <div className="bottom-content">
          <h2 className="radio-name"> The Other Radio</h2>
          <div className="menu-div">
            <span> icon </span>
            <button className="menu-button">
              <h1 className="menu-text" onClick={onClick}>
                Menu
              </h1>
            </button>
          </div>
        </div>
        {showMenu ? <DropDownMenu /> : null}
      </div>
    </>
  );
};

export default RadioPlayerContainer;
