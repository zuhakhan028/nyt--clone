import React, { useState } from "react";
import "./latestSections.css";
import searchicon from "../../assets/images/searchicon.svg"
import LatestSectionList from "../latestsectionlist/latestSecList";
import { worldNewsModule } from "../../assets/module";
interface LatestSectionsProps {
    worldnews:worldNewsModule | undefined
}

function LatestSections(props: LatestSectionsProps) {
  const [activeSection, setActiveSection] = useState<string>("Latest");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className="latest-section">
      <nav>
        <ul className="latest-section-ul">
          <li className="latest-section-li">
            <a
              className={`${
                activeSection === "Latest"
                  ? "latest-section-clicked" && "latest-section-clicked-again"
                  : "latest-section-not-clicked"
              }`}
              onClick={() => handleSectionClick("Latest")}
            >
              Latest
            </a>
          </li>
          <li className="latest-section-li">
            <a
              className={`${
                activeSection === "Search"
                  ? "latest-section-clicked"
                  : "latest-section-not-clicked"
              }`}
              onClick={() => handleSectionClick("Search")}
            >
             <span className="search-icon-latest-section"><img src={searchicon} style={{width:"16px", height:"16px"}} alt="search-icon"></img></span> Search 
            </a>
          </li>
        </ul>
      </nav>

      {activeSection=="Latest" && <LatestSectionList index={0} worldnews={props.worldnews}/>}
      {activeSection=="Search" && <LatestSectionList index={1} worldnews={props.worldnews}/>}
 
    </section>
  );
}

export default LatestSections;
