import React from "react"
import { formatDate } from "./formatDate";
import { formatNames } from "./formatNames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Link} from "react-router-dom"
import place_holder_img from "../assets/images/placeholder-image.png"

interface Pagination{
    paginationData:any;
    numResults:number
}




function Pagination(props:Pagination){
return(

 
 <div>
            {props.paginationData.map((item:any, index:any) => {
          if (item.title) {
            const isLastItem = index === props.numResults - 1;
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

 </div>


   
)
 
}

export default Pagination