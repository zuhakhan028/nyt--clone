
import "./countryNews.css"
import { useParams } from "react-router-dom";

import Footer from "../footer/footer";
import Header from "../header/header";
import search_icon from "../../assets/images/searchicon.svg"
import EachCountryNews from "../eachcountrynews/eachCountryNews";
import { EachCountryNewsFunction } from "../../network/network";


const CountryNews:React.FC=()=>{
    const { countryname }:any = useParams();    
    const eachCountryNews= EachCountryNewsFunction(countryname)

    if (eachCountryNews) {
        return (
            <div className="more-dispatches">
                <div className='inner-app-div'>
                    <Header text={countryname.toUpperCase()} />
                    <section className='middle-section-each-country'>
                        <div className="news-section-each-country">
                            WORLD
                        </div>
                        <div className="news-section-dispatches-inner-div">
                            <div>
                                <h1 className="news-section-h1-each-country">
                                    {countryname}
                                </h1>
                            </div>
                            <div className="share-outer-div">
                                <a><img src={search_icon} className="share-img" alt="share-img"></img></a>
                            </div>
                        </div>
                        <EachCountryNews data={eachCountryNews}/>
                        <Footer />
                    </section>               
                </div>
               
            </div>

        );
    } else {
        return <div className="loading-country-news-div">{`Loading News for ${countryname}...`}</div>;
    }
}

export default CountryNews;

