import React from "react";
import { worldNewsModule, listWorldNews } from "../../assets/module";
import "./miniHighLights.css";
import { Link } from "react-router-dom";
import place_holder_img from "../../assets/images/placeholder-image.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { formatNames } from "../formatNames";
import { getTimeAgo } from "../getTimeAgo";
interface MiniHighlightsProps {
  worldnews: worldNewsModule | undefined;
  startIndex: number;
  endIndex: number;
}

function MiniHighlights(props: MiniHighlightsProps) {
  let slicedResults: listWorldNews[] = [];

  if (props.worldnews) {
    slicedResults = props.worldnews.results.slice(props.startIndex, props.endIndex + 1);
  }

  return (
    <section>
      <div className="mini-highlight-div">
        <ol className="mini-highlight-list">
          {slicedResults.map((item, index) => (
            <li key={index}>
              <div
                 
                className={`mini-highlight-inner-div ${index === 0 ? "first-item" : ""} ${index === slicedResults.length - 1 ? "last-item" : ""}`}
              >
                <Link
                  to={`/article/${item.byline}`}
                  className="route-next-page"
                  state={{ item }}
                >
                  <div className="highlight-li-inner-div">
                    <figure className="mini-highlight-figure">
                      <div className="mini-highlight-figure-inner-div">
                        {item.multimedia && item.multimedia.length > 0 && item.multimedia[0] ? (
                          <LazyLoadImage src={item.multimedia[0].url} className="mini-highlight-img" alt={item.multimedia[0].caption} placeholderSrc={place_holder_img} />
                        ) : (
                          <div className="image-not-available">Image not available</div>
                        )}
                      </div>
                    </figure>
                    <p className="mini-highlight-title">
                      <span className="mini-highlight-title">{item.title ? item.title : "New York Times"}</span>

                    </p>
                    <div className="mini-highlight-abstract">{item.abstract ? item.abstract : "New York Times"}</div>
                    <p className="time-ago-right-div-700">
                      <span className="byline-span">{`${getTimeAgo(item.created_date)} .`} </span>
                      <span className="byline-span-author">
                        {formatNames(item.byline)}
                      </span>
                    </p>
                  </div>
                </Link>
              </div>




              <div
                key={`${index}-700`}
                className={`mini-highlight-inner-div-700 ${index === 0 ? "first-item" : ""} ${index === slicedResults.length - 1 ? "last-item" : ""}`}
              >
                <Link
                  to={`/article/${item.byline}`}
                  className="route-next-page"
                  state={{ item }}
                >
                  <div className="highlight-li-inner-div-700">
                    <div>
                      <p className="mini-highlight-title">
                        <span className="mini-highlight-title">{item.title ? item.title : "New York Times"}</span>

                      </p>
                      <div className="mini-highlight-abstract">{item.abstract ? item.abstract : "New York Times"}</div>
                      <p className="time-ago-right-div-700">
                        <span className="byline-span">{`${getTimeAgo(item.created_date)} .`} </span>
                        <span className="byline-span-author">
                          {formatNames(item.byline)}
                        </span>
                      </p>
                      <p className={`time-ago`}>
                        <span className="byline-span">
                          {`${getTimeAgo(item.created_date)} .`}
                        </span>

                        <span
                          className={`byline-span-author`}
                        >
                          {formatNames(item.byline)
                            ? formatNames(item.byline)
                            : "By NEW YORK TIMES"}
                        </span>
                      </p>
                    </div>
                    <div className="mini-highlight-figure-div-700">
                      <figure className="mini-highlight-figure">
                        <div className="mini-highlight-figure-inner-div">
                          {item.multimedia && item.multimedia.length > 0 && item.multimedia[0] ? (
                            <LazyLoadImage src={item.multimedia[0].url} className="mini-highlight-img" alt={item.multimedia[0].caption} placeholderSrc={place_holder_img} />
                          ) : (
                            <div className="image-not-available">Image not available</div>
                          )}
                        </div>
                      </figure>
                    </div>



                  </div>
                </Link>
              </div>
            </li>


          ))}
        </ol>
      </div>
    </section>
  );
}

export default MiniHighlights;
