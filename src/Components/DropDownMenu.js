import React from "react";
import "./DropDownMenu.css";
const DropDownMenu = () => {
  return (
    <>
      <div className="main-dropdown-div">
        <div className="upper-content-div">
          <div className="big-button-div">
            <button className="big-button-routes">
              <h1 className="button-text">Archive</h1>
            </button>
            <button className="big-button-routes">
              <h1 className="button-text">Schedule</h1>
            </button>
            <button className="big-button-routes">
              <h1 className="button-text">Editorial</h1>
            </button>
            <button className="big-button-routes">
              <h1 className="button-text">Video</h1>
            </button>
            <button className="big-button-routes">
              <h1 className="button-text">Shop</h1>
            </button>
          </div>
          <div className="icon-div">
            <span>Icon</span>
          </div>
        </div>
        <div className="lower-content-div"></div>
      </div>
    </>
  );
};

export default DropDownMenu;
