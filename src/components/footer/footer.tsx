import React from "react";
import Logo from "../../assets/images/nytimes-wordmark.svg";
import "./footer.css"
import { footerSections } from "../../assets/data";
import { footerLinksSection1 } from "../../assets/data";
import { footerLinksSection2 } from "../../assets/data";
import { footerLinksSection3 } from "../../assets/data";
import { footerBottomLinks } from "../../assets/data";


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <header className="footer-header">
                <img src={Logo} alt={"nyt-logo"} className="footer-nyt-logo" ></img>
                <div className="footer-to-home-div">{`Go to Home Page >>`}</div>
            </header>
            <div>
                <div className="footer-inner-div">
                    {footerSections.map((section, index) => (
                        <div key={index} className="footer-section">
                            <p className="footer-section-title">{section.title}</p>
                            <ul className="footer-subcategories">
                                {section.subcategories.map((subcategory, subIndex) => (
                                    <li key={subIndex} className="footer-subcategory">
                                        <a href="" className="footer-subcategory-link">
                                            {subcategory}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="footer-right-section">
                        <div className="footer-upper-right-div">
                            <div>
                                <div><p className="footer-section-title">{footerLinksSection1[0].title}</p></div>
                                <ul className="footer-subcategories">
                                    {
                                        footerLinksSection1[0].subcatogeries.map((sections, index) => {
                                            return (
                                                <li key={index} className="footer-subcategory-right-div">
                                                    <a href="" className="footer-subcategory-link-right-div">
                                                        <img src={sections.imagePath} className="footer-icons" alt={sections.text}></img>
                                                        <span>{sections.text}</span>
                                                    </a>

                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <ul className="newsletter-div-ul">
                                {
                                    footerLinksSection2.map((section, index) => {
                                        return (
                                            <li className="newsletter-div-li" key={index}>
                                                {section}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            {
                                <ul className="newsletter-div-ul">
                                    {
                                        footerLinksSection3.map((section, index) => {
                                            return (
                                                <li className="newsletter-div-li" key={index}>
                                                    {section}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            }
                        </div>
                    </div>
                </div>
                <ul className="copyright-div">
                    {footerBottomLinks.map((section, index) => {
                        return (
                            <li className="footer-copy-right-li" key={index}>
                                {section.text}
                            </li>
                        )
                    })}

                </ul>
            </div>
        </footer>
    );
}

export default Footer;
