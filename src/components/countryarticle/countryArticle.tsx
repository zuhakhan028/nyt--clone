import React from "react";
import "./CountryArticle.css";
import Header from "../header/header";
import { useLocation } from "react-router-dom";
import Footer from "../footer/footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { formatDate } from "../formatDate";
import splitStringIntoParagraphs from "../splitparagraph";
import { articleBody } from "../../assets/data";
import CommentsButton from "../commentsbutton/commentsButton";
import { formatDateTime } from "../formatDateandTime";
import CallToAction from "../calltoaction/callToAction";
import place_holder_img from "../../assets/images/placeholder-image.png";
import auth_1 from "../../assets/images/auth-1.png";

function CountryArticle() {
  window.scroll(0, 0);
  const location = useLocation();
  const countryArticleNews = location.state.item;
  document.title = countryArticleNews.headline.main;

  if (!countryArticleNews) {
    return null; 
  }

  const headline = countryArticleNews.headline.main || "";
  const abstract = countryArticleNews.abstract || "";
  const multimedia = countryArticleNews.multimedia || [];
  const subsectionName =
    countryArticleNews.subsection_name || countryArticleNews.section_name || "";
  const bylineOriginal =
    (countryArticleNews.byline && countryArticleNews.byline.original) || "";
  const pubDate = countryArticleNews.pub_date || "";

  const multimediaItem =
    multimedia.length > 0 && multimedia[0].legacy ? multimedia[0] : null;
  const xlargeUrl = multimediaItem
    ? `https://static01.nyt.com/${multimediaItem.legacy.xlarge}`
    : place_holder_img;


    console.log(multimediaItem)

  return (
    <div className="each-article-main-div">
      <Header text={subsectionName.toUpperCase()} />

      <section className="each-article-section">
        <div className="each-article-top-div">
          <h1 className="article-title">{headline}</h1>
          <p className="each-article-abstract">{abstract}</p>
          <div className="article-top-div">
            <CallToAction />
            <div className="article-middle-div">
              <figure className="article-figure">
                <div>
                  <LazyLoadImage
                    className="article-main-img"
                    src={xlargeUrl ? xlargeUrl:place_holder_img}
                    alt={multimediaItem ? multimediaItem.caption : "img-not-availabe"}
                    placeholderSrc={place_holder_img}
                  />
                </div>
                <figcaption className="article-fig-caption">
                  {multimediaItem.caption ? multimediaItem.caption : "New York Times Cover."}
                  <span className="article-img-copyright">
                    {multimediaItem.copyright ? multimediaItem.copyright : " credits NYT"}
                  </span>
                </figcaption>
              </figure>
              <p className="article-byline">
                <img src={auth_1} className="auth-img" alt="Author" />
                By <span className="article-byline-span">{bylineOriginal.slice(3)}</span>
              </p>
              <div className="article-formatted-date">
                {formatDate(pubDate)}
                <span className="article-formatted-date-span">{`Updated ${formatDateTime(pubDate)}`}</span>
              </div>
              <div className="article-paragraph-content">
                {splitStringIntoParagraphs(articleBody, multimediaItem ? xlargeUrl:place_holder_img ,
                 multimediaItem.legacy.xlarge.caption?multimediaItem.legacy.xlarge.caption:"caption-not-available")}
              </div>
            </div>
            <CommentsButton />
            <div className="article-end-cta-div">
              <CallToAction />
            </div>
          </div>
        </div>
        <div className="each-article-bottom-div">
        <Footer />
        </div>
      </section>
   
    </div>
  );
}

export default CountryArticle;
