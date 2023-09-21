import "./dispatches.css";
import { worldNewsModule, listWorldNews } from "../../assets/module";
import { Link } from "react-router-dom";
import place_holder_img from "../../assets/images/placeholder-image.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getTimeAgo } from "../getTimeAgo";
import { formatNames } from "../formatNames";



interface dispatches {
  worldnews: worldNewsModule | undefined;
  startIndex: number;
  endIndex: number;
  heading: string;
  anchorText: string;
}

function Dispatches(props: dispatches): any {
  let slicedResults: listWorldNews[] = [];

  if (props.worldnews) {
    slicedResults = props.worldnews.results.slice(props.startIndex, props.endIndex + 1);
  }




  if (props.worldnews) {
    return (


      <section>
        <div className="dispatch-div">
          <header className="dispatch-header">
            <div>
              {props.heading}
            </div>
            <Link to={`${props.heading}`} className="more-in-dispatches">
              {props.anchorText} <small>{">"}</small><span><img alt="" /></span>
            </Link>
          </header>
          <ol className="dispatch-list">
            {slicedResults.map((item, index) => (
              <div>
                <li
                   key={index+1}
                  className={`dispatch-inner-div ${index === 0 ? "first-item-dispatches" : ""} ${index === slicedResults.length - 1 ? " last-item-dispatches" : ""}`}
                >
                  <Link className="route-next-page"
                    to={`/article/${item.byline}`}
                    state={{ item }}
                    key={index}
                  >
                    <div className="dispatch-li-inner-div">
                      <figure className="dispatch-figure">
                        <div className="dispatch-img-div">
                          {item.multimedia && item.multimedia.length > 1 ? (
                            <LazyLoadImage
                              src={item.multimedia[1].url ? item.multimedia[1].url : place_holder_img}
                              className="dispatch-img"
                              alt={item.multimedia[0].caption}
                              placeholderSrc={place_holder_img}

                            />
                          ) : (
                            <LazyLoadImage src={place_holder_img} className="dispatch-img" alt={item.multimedia ? item.multimedia[0].caption : ""} placeholderSrc={place_holder_img} />
                          )}
                        </div>
                      </figure>
                      <p className="dispatch-title">{item.title}</p>
                    </div>
                  </Link>
                </li>
                <li
                  key={index}
                  className={`dispatch-inner-div-700 ${index === 0 ? "first-item-dispatches" : ""} ${index === slicedResults.length - 1 ? " last-item-dispatches" : ""}`}
                >
                  <Link className="route-next-page"
                    to={`/article/${item.byline}`}
                    state={{ item }}
                    key={index}
                  >
                    <div className="dispatch-li-inner-div">
                      <div className="dispatch-article-div">
                        <p className="mini-highlight-title ">{item.title}</p>
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

                      <figure className="dispatch-figure">
                        <div className="dispatch-img-div">
                          {item.multimedia && item.multimedia.length > 1 ? (
                            <LazyLoadImage
                              src={item.multimedia[1].url ? item.multimedia[1].url : place_holder_img}
                              className="dispatch-img"
                              alt={item.multimedia[0].caption}
                              placeholderSrc={place_holder_img}

                            />
                          ) : (
                            <LazyLoadImage src={place_holder_img} className="dispatch-img" alt={item.multimedia ? item.multimedia[0].caption : ""} placeholderSrc={place_holder_img} />
                          )}
                        </div>
                      </figure>
                    </div>
                  </Link>
                </li>

              </div>

            ))}
          </ol>
        </div>
      </section>
    )


  } else {
    return (
      <div className="dispatch-div-loading">
        {`  ${props.heading} Loading`}
      </div>
    )
  }



}

export default Dispatches;
