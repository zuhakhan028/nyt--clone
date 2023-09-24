
import { useState } from "react";
import search_icon from "../../assets/images/searchicon.svg"
import "./eachCountryNews.css"
import { EachCountryNewsData } from "../../assets/module";
import { EachCountryNewsDataResults } from "../../assets/module";
import { formatDate } from "../formatDate";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder_img from "../../assets/images/placeholder-image.png"
import { formatNames } from "../formatNames";

interface eachCountryNews {
    data: EachCountryNewsData | undefined
}
const EachCountryNews: React.FC<eachCountryNews> = (props) => {
    const [activeSection, setActiveSection] = useState<string>("Latest");
    const { countryname } = useParams();
    const handleSectionClick = (section: string) => {
        setActiveSection(section);
    };
    let CountryNewsData: EachCountryNewsDataResults[] = props.data?.response?.docs || [];
    let contryNewsDataLength = CountryNewsData.length - 1

    if (CountryNewsData) {

        return (
            <section className="latest-section-each-country">
                <nav>
                    <ul className="latest-section-ul">
                        <li className="latest-section-li">
                            <a
                                className={`${activeSection === "Latest"
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
                                className={`${activeSection === "Search"
                                    ? "latest-section-clicked"
                                    : "latest-section-not-clicked"
                                    }`}
                                onClick={() => handleSectionClick("Search")}
                            >
                                <span className="search-icon-latest-section"><img src={search_icon} alt={"search-icon"}></img></span> Search
                            </a>
                        </li>
                    </ul>
                </nav>

                {activeSection === "Latest" &&
                    <ol className="each-country-ul">
                        {props.data ? <div>
                            <div>
                                {CountryNewsData.map((item, index) => {
                                    return (
                                        <li key={index} className="each-country-news-page-li">
                                            <div key={index} className={contryNewsDataLength == index ? "last-list-item-each-country" : "latest-section-list-each-country"}>
                                                <div className="formatted-date">
                                                    {formatDate(item.pub_date)

                                                    }
                                                </div>
                                                <Link
                                                    to={`/country/${countryname}/article/${item.abstract}`}
                                                    state={{ item }}
                                                    className="route-next-page">
                                                    <article className="article-latest-section-list">
                                                        <div className="article-latest-section-inner-div">
                                                            <h3 className="dispatch-title-h3">{item.headline.main}</h3>
                                                            <p className="latest-list-section-abstract">{item.abstract}</p>
                                                            <div className="byline-span-author">{formatNames(item.byline.original)}</div>
                                                        </div>
                                                        <div>
                                                            <figure className="latest-list-section-figure">
                                                                <div>
                                                                    <div>
                                                                        {item?.multimedia?.[0]?.legacy?.xlarge ? (
                                                                            <LazyLoadImage src={`https://static01.nyt.com/${item.multimedia[0].legacy.xlarge}`} alt={item.multimedia[0].caption} className="latest-list-section-img" placeholderSrc={placeholder_img} />
                                                                        ) : (
                                                                            <>
                                                                                <LazyLoadImage src={placeholder_img} className="latest-list-section-img" placeholderSrc={placeholder_img}></LazyLoadImage>
                                                                            </>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </article>
                                                </Link>
                                            </div>


                                            {/* repsonsive for mobile code */}
                                            <div key={index + 1} className={contryNewsDataLength == index ? "last-list-item-425" : "latest-section-list-425"}>
                                                <Link
                                                    to={`/country/${countryname}/article/${item.abstract}`}
                                                    state={{ item }}
                                                    className="route-next-page">
                                                    <article className="article-latest-section-list">
                                                        <div className="article-latest-section-inner-div">
                                                            <h3 className="dispatch-title-h3">{item.headline.main}</h3>
                                                            <p className="latest-list-section-abstract">{item.abstract}</p>
                                                            <div className="byline-span-author">{formatNames(item.byline.original)}</div>
                                                        </div>
                                                        <div>
                                                            <figure className="latest-list-section-figure">
                                                                <div>
                                                                    <div>
                                                                        {item?.multimedia?.[0]?.legacy?.xlarge ? (
                                                                            <LazyLoadImage src={`https://static01.nyt.com/${item.multimedia[0].legacy.xlarge}`} alt={item.multimedia[0].caption} className="latest-list-section-img" placeholderSrc={placeholder_img} />
                                                                        ) : (
                                                                            <>
                                                                                <LazyLoadImage src={placeholder_img} className="latest-list-section-img" placeholderSrc={placeholder_img}></LazyLoadImage>
                                                                            </>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </article>
                                                </Link>
                                            </div>
                                        </li>
                                    )
                                }
                                )}
                            </div>

                        </div> : <div></div>}
                    </ol>}


                {activeSection === "Search" &&
                    <section>
                        <label className="results-fetched-div">{`  results sorted by `}
                            <select className="select-search-div">
                                <option>newest</option>
                                <option>oldest</option>
                            </select>
                        </label>
                        <ol className="each-country-ul">
                            {props.data ? <div>
                                <div>
                                    {CountryNewsData.map((item, index) => {
                                        return (
                                            <li key={index} className="each-country-news-page-li">
                                                <div key={index} className={contryNewsDataLength == index ? "last-list-item-each-country" : "latest-section-list-each-country"}>
                                                    <div className="formatted-date">
                                                        {formatDate(item.pub_date)

                                                        }
                                                    </div>
                                                    <Link
                                                        to={`/country/${countryname}/article/${item.abstract}`}
                                                        state={{ item }}
                                                        className="route-next-page">
                                                        <article className="article-latest-section-list">
                                                            <div className="article-latest-section-inner-div">
                                                                <h3 className="dispatch-title-h3">{item.headline.main}</h3>
                                                                <p className="latest-list-section-abstract">{item.abstract}</p>
                                                                <div className="byline-span-author">{formatNames(item.byline.original)}</div>
                                                            </div>
                                                            <div>
                                                                <figure className="latest-list-section-figure">
                                                                    <div>
                                                                        <div>
                                                                            {item?.multimedia?.[0]?.legacy?.xlarge ? (
                                                                                <LazyLoadImage src={`https://static01.nyt.com/${item.multimedia[0].legacy.xlarge}`} alt={item.multimedia[0].caption} className="latest-list-section-img" placeholderSrc={placeholder_img} />
                                                                            ) : (
                                                                                <>
                                                                                    <LazyLoadImage src={placeholder_img} className="latest-list-section-img" placeholderSrc={placeholder_img}></LazyLoadImage>
                                                                                </>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </figure>
                                                            </div>
                                                        </article>
                                                    </Link>
                                                </div>

                                                {/* responsive for mobile code */}
                                                <div key={index + 1} className={contryNewsDataLength == index ? "last-list-item-425" : "latest-section-list-425"}>
                                                    <Link
                                                        to={`/country/${countryname}/article/${item.abstract}`}
                                                        state={{ item }}
                                                        className="route-next-page">
                                                        <article className="article-latest-section-list">
                                                            <div className="article-latest-section-inner-div">
                                                                <h3 className="dispatch-title-h3">{item.headline.main}</h3>
                                                                <p className="latest-list-section-abstract">{item.abstract}</p>
                                                                <div className="byline-span-author">{formatNames(item.byline.original)}</div>
                                                            </div>
                                                            <div>
                                                                <figure className="latest-list-section-figure">
                                                                    <div>
                                                                        <div>
                                                                            {item?.multimedia?.[0]?.legacy?.xlarge ? (
                                                                                <LazyLoadImage src={`https://static01.nyt.com/${item.multimedia[0].legacy.xlarge}`} alt={item.multimedia[0].caption} className="latest-list-section-img" placeholderSrc={placeholder_img} />
                                                                            ) : (
                                                                                <>
                                                                                    <LazyLoadImage src={placeholder_img} className="latest-list-section-img" placeholderSrc={placeholder_img}></LazyLoadImage>
                                                                                </>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </figure>
                                                            </div>
                                                        </article>
                                                    </Link>
                                                </div>
                                            </li>
                                        )
                                    }


                                    )}
                                </div>

                            </div> 
                            : <div className="loading-div-page">
                                Loading The Most Relevant News For You 
                                </div>}
                        </ol>
                    </section>
                }

            </section>
        )
    } else {
        return (
            <div className="loading-div-page">
                Loading The Most Relevant News For You
            </div>
        )
    }


}

export default EachCountryNews



