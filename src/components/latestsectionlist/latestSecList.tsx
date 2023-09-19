import React from "react";
import "./latestSectionList.css";
import { worldNewsModule } from "../../assets/module";
import { formatDate } from "../formatDate";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { formatNames } from "../formatNames";
import place_holder_img from "../../assets/images/placeholder-image.png"
interface LatestSectionListProps {
  index: number;
  worldnews: worldNewsModule | undefined;
}

function LatestSectionList(props: LatestSectionListProps) {


  if (props.index === 1) {
    if(props.worldnews){
      console.log(props.worldnews)
      const numResults = props.worldnews.num_results;
      console.log(numResults)
      return (
        <section>
          <label className="results-fetched-div">{` ${numResults} results sorted by `}  
          <select className="select-search-div"> 
            <option>newest</option>
            <option>oldest</option>
            </select>
            </label>
          
        <section className="latest-section-list-section">
          <div className="latest-section-left-div">
            <ol className="latest-section-ordered-list">
              {props.worldnews.results.map((item, index) => {
                if (item.title) {
                  const isLastItem = index === numResults - 1;
                  return (
                    <li key={index} className={` ${isLastItem ? "last-list-item" : "latest-section-list"}`}
                    >

                      <div className="formatted-date">
                        {formatDate(item.created_date)}
                      </div>
                      <Link
                      to={`/article/${item.byline}`} 
                      state={{ item }}
                      key={index}
                      className="route-next-page">
                        <article className="article-latest-section-list">
                          <div className="article-latest-section-inner-div">
                            <h3 className="dispatch-title-h3">{item.title}</h3>
                            <p className="latest-list-section-abstract">{item.abstract}</p>
                            <div className="byline-span-author">{formatNames(item.byline)}</div>
                          </div>
                          <div>
                            <figure className="latest-list-section-figure">
                              <div>
                                <div>
                                  {item.multimedia && item.multimedia[1] ? (
                                    <div>
                                      <LazyLoadImage
                                        src={item.multimedia[1].url}
                                        alt={item.multimedia[1].caption}
                                        className="latest-list-section-img"
                                        placeholderSrc={place_holder_img}
                                      />
                                    </div>
                                  ) : (
                                    <LazyLoadImage
                                      src={place_holder_img}
                                      alt={"img-not-avalaible"}
                                      className="latest-list-section-img"
                                    
                                    />
                                  )}
                                </div>
                              </div>
                            </figure>
                          </div>
                        </article>
                      </Link>
                    </li>
                  );
                } else {
                  return null; 
                }
              })}
            </ol>
          </div>
        </section>
        </section>
      );
    }else{
      return(
        <div>
          Loading
        </div>
      )
    }
    
  } else {
    if (props.worldnews) {
      const numResults = props.worldnews.num_results;
      return (

        <section className="latest-section-list-section">
          <div className="latest-section-left-div">
            <ol className="latest-section-ordered-list">
              {props.worldnews.results.map((item, index) => {
                if (item.title) {
                  const isLastItem = index === numResults - 1;
                  return (

                    <li key={index} className={` ${isLastItem ? "last-list-item" : "latest-section-list"}`}
                    >

                      <div className="formatted-date">
                        {formatDate(item.created_date)}
                      </div>
                      <Link
                      to={`/article/${item.byline}`} 
                    
                      state={{ item }}
                      key={index}
                      className="route-next-page">
                        <article className="article-latest-section-list">
                          <div className="article-latest-section-inner-div">

                            <h3 className="dispatch-title-h3">{item.title}</h3>


                            <p className="latest-list-section-abstract">{item.abstract}</p>
                            <div className="byline-span-author">{formatNames(item.byline)}</div>
                          </div>
                          <div>
                            <figure className="latest-list-section-figure">
                              <div>
                                <div>
                                  {item.multimedia && item.multimedia[1] ? (
                                    <div>
                                      <LazyLoadImage
                                        src={item.multimedia[1].url}
                                        alt={item.multimedia[1].caption}
                                        className="latest-list-section-img"
                                        placeholderSrc={place_holder_img}
                                      />
                                    </div>
                                  ) : (
                                    <LazyLoadImage
                                    src={place_holder_img}
                                      alt="img-not-avalaible"
                                      className="latest-list-section-img"
                                   
                                    />
                                  )}
                                </div>
                              </div>
                            </figure>
                          </div>
                        </article>
                      </Link>
                    </li>
                  );
                } else {
                  return null; 
                }
              })}
            </ol>
          </div>
        </section>
      );
    } else {
      return <div className="latest-news-loading-div">Loading Latest News for you</div>;
    }
  }
}

export default LatestSectionList;
