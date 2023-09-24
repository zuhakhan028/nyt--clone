import "./sideBar.css"
import { sidebarSections } from "../../assets/data";
import forward_icon from "../../assets/images/forwardarrow.svg"
interface sideBar {
    isOpen: boolean;
    onClose: () => void;
}
const SideBar: React.FC<sideBar> = (props) => {


    return (

        <div className={`sidebar ${props.isOpen ? "open" : ""}`} onMouseLeave={props.onClose}>
            <div className="sidebar-content">
                <a className="side-bar-home-page" href="/"> Home Page</a>
                {
                    sidebarSections.map((value, index) => {
                        return (
                            <div className="sidebar-sections" key={index}>
                                {value.map((value, index) => {
                                    return (
                                        <ul className="each-menu-section-ul" key={index}>
                                            <a href="/" className="sidebar-a-tag">
                                                <li className="each-menu-section-li">
                                                    {value}
                                                    <img src={forward_icon} className="forward-arrow" alt="forward_arrow"></img>
                                                </li>
                                            </a>

                                        </ul>
                                    )
                                })
                                } </div>)
                    })
                }

            </div>

        </div>
    )
}

export default SideBar