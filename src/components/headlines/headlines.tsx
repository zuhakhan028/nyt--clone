import "./headlines.css"
import CountriesList from "../countriesList/countriesList"
import Highlights from "../highlights/highlights";
import MiniHighlights from "../minihighlights/miniHighlights";
import Dispatches from "../dispatches/dispatches";
import LatestSections from "../latestsections/latestSections";
import { WorldNewsFunction } from "../../network/network";

const HeadLines:React.FC=()=> {

  let worldNewsResult = WorldNewsFunction()
  
  return (
    <>
      <h1 className="headlines">World News</h1>
      <nav className="countries-navbar">
        <ul className="countries-list">
          <CountriesList />
        </ul>
      </nav>
      <>
        <Highlights worldnews={worldNewsResult} />
        <MiniHighlights worldnews={worldNewsResult} startIndex={4} endIndex={8} />
        <MiniHighlights worldnews={worldNewsResult} startIndex={9} endIndex={13} />
        <Dispatches worldnews={worldNewsResult} startIndex={14} endIndex={18} heading={"Dispatches"} anchorText={"More in Dispatches"} />
        <Dispatches worldnews={worldNewsResult} startIndex={19} endIndex={23} heading={"The Saturday Profile"} anchorText={"More in The Saturday Profile"} />
        <LatestSections worldnews={worldNewsResult} />
      </>
    </>
  )


}
export default HeadLines