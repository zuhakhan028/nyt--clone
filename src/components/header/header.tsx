import React, { useState } from "react";
import "./header.css";
import hamburger_icon from "../../assets/images/hamburger.svg";
import logo from "../../assets/images/nytimes-wordmark.svg";
import search_icon from "../../assets/images/searchicon.svg";
import drop_down_icon from "../../assets/images/dropdown.svg";
import SideBar from "../sidebar/sideBar";
import profile_icon from "../../assets/images/profile.svg"

interface HeaderProps {
  text: string;
}

function Header(props: HeaderProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="outer-header-div">
      <div className="header">
        <div className="inner-header-div">
          <div className="header-left-section">
            <div
              className="header-icons-div"
              onClick={toggleSidebar}
              style={{ cursor: "pointer" }}
            >
              <img className="hamburger-icon" src={hamburger_icon} alt="menu" />
            </div>
            <div className="header-icons-div">
              <img className="search-icon" src={search_icon} alt="search" />
            </div>
          </div>
          <div className="header-middle-section">
            <div className="news-section">{props.text}</div>
            <div>
              <div className="logo-div">
                <div onClick={toggleSidebar}>
                  <img className="logo-icon" src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="header-right-section">
            <div className="subscription-button">
              SUBSCRIBE FOR &#8377;600/YEAR
            
            </div>
            <div className="account-div">
              Account
              <img className="drop_down_icon" src={drop_down_icon} alt="drop_down" />
            
            </div>
            <img src={profile_icon} className="profile-icon-img"></img>
          </div>
        </div>
      </div>
      {isSidebarOpen && <SideBar isOpen={isSidebarOpen} onClose={closeSidebar}/>}
    </header>
  );
}

export default Header;
