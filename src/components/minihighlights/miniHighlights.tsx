import React from "react";
import { worldNewsModule, listWorldNews } from "../../assets/module";
import "./miniHighLights.css";
import { Link } from "react-router-dom";
import place_holder_img from "../../assets/images/placeholder-image.png"
import { LazyLoadImage } from "react-lazy-load-image-component";

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
            <li
              key={index}
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
                        <LazyLoadImage src={item.multimedia[0].url} className="mini-highlight-img" alt={item.multimedia[0].caption} placeholderSrc={place_holder_img}/>
                      ) : (
                        <div className="image-not-available">Image not available</div>
                      )}
                    </div>
                  </figure>
                  <p className="mini-highlight-title">
                    <span className="mini-highlight-title">{item.title}</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default MiniHighlights;
