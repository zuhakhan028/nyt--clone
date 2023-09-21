import React from "react";
import { worldNewsModule } from "../../assets/module";
import "./hightlights.css"
import { getTimeAgo } from "../getTimeAgo";
import { formatNames } from "../formatNames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import place_holder_img from "../../assets/images/placeholder-image.png"
import { Link } from "react-router-dom";



interface highlightsData {
    worldnews: worldNewsModule | undefined;
}


function Highlights(props: highlightsData) {
    if (!props.worldnews) {
        return (
            <div className="loading-div-page">
                We are Loading Most relevant news for you in a moment.
            </div>
        );
    }

    const consecutiveHeadlines = [];
    let consecutiveCount = 0;


    for (let i = 0; i < props.worldnews.results.length; i++) {
        const result = props.worldnews.results[i];

        if (
            result.title &&
            result.abstract &&
            result.created_date &&
            result.multimedia &&
            result.multimedia[0] &&
            result.multimedia[1] &&
            result.multimedia[0].caption &&
            result.multimedia[1].url &&
            result.multimedia[0].copyright &&
            result.byline
        ) {
            consecutiveHeadlines.push(result);
            consecutiveCount++;

            if (consecutiveCount === 4) {
                break;
            }
        }
    }


    if (consecutiveHeadlines.length >= 4) {
        return (
            <section className="collection-highlight-container">
                <div>
                    <ol className="top-highlights-list">
                        <div className="collection-highlight-container-inner-div">
                            {consecutiveHeadlines.slice(0, 2).map((result, index) => (
                                <li key={result.title} className={`headline-${index + 1}-li`}>
                                    <Link
                                        to={`/article/${result.byline}`}
                                        className="route-next-page"
                                        state={result}
                                    >
                                        <article className="highlight-article">
                                            <figure className="fig-div">
                                                <div>
                                                    <LazyLoadImage
                                                        src={result.multimedia[1].url}
                                                        className={`headline-${index + 1}-img`}
                                                        alt={result.multimedia[0].caption}
                                                        placeholderSrc={place_holder_img}
                                                    />
                                                </div>
                                                <figcaption className="fig-caption">
                                                    <span >
                                                        {result.multimedia[0].copyright.toUpperCase()}
                                                    </span>
                                                </figcaption>
                                            </figure>
                                            <div>
                                                <h3 className={`hightlights-title`}>
                                                    {result.title}
                                                </h3>
                                                <p className={`highlight-abstract`}>
                                                    {result.abstract}
                                                </p>
                                                <p className={`time-ago`}>
                                                    <span className="byline-span">
                                                        {`${getTimeAgo(result.created_date)} .`}
                                                    </span>

                                                    <span
                                                        className={`byline-span-author`}
                                                    >
                                                        {formatNames(result.byline)
                                                            ? formatNames(result.byline)
                                                            : "By NEW YORK TIMES"}
                                                    </span>
                                                </p>
                                            </div>
                                        </article>
                                    </Link>
                                </li>
                            ))}
                        </div>



                        <li className="headline-3-li">
                            <div className="highlight-right-top-div">
                                <Link
                                    to={`/article/${consecutiveHeadlines[3].byline}`}
                                    className="route-next-page"
                                    state={consecutiveHeadlines[3]}
                                >
                                    <article className="highlight-article">

                                        <div>
                                            <h3 className="hightlights-title">
                                                {consecutiveHeadlines[3].title}
                                            </h3>
                                            <div className="highlights-right-div">
                                                <span>
                                                    <figure className="highlights-right-div-fig">
                                                        <div>
                                                            <LazyLoadImage
                                                                src={consecutiveHeadlines[3].multimedia[1].url}
                                                                className="headline-3-img"
                                                                alt={consecutiveHeadlines[3].multimedia[0].caption}
                                                                placeholderSrc={place_holder_img}
                                                            />
                                                        </div>
                                                        <figcaption className="fig-caption">
                                                            <span>
                                                                {consecutiveHeadlines[3].multimedia[0].copyright.toUpperCase()}
                                                            </span>
                                                        </figcaption>
                                                    </figure>
                                                </span>
                                            </div>
                                            <p className="highlight-abstract">
                                                {consecutiveHeadlines[3].abstract}
                                            </p>
                                            <p className="time-ago-right-div">
                                                <span className="byline-span">{`${getTimeAgo(consecutiveHeadlines[3].created_date)} .`} </span>
                                                <span className="byline-span-author">
                                                    {formatNames(consecutiveHeadlines[3].byline)}
                                                </span>
                                            </p>
                                        </div>

                                    </article>
                                </Link>
                            </div>

                            <div key={consecutiveHeadlines[3].title} className={`headline-3-li-700`}>
                                <Link
                                    to={`/article/${consecutiveHeadlines[3].byline}`}
                                    className="route-next-page"
                                    state={consecutiveHeadlines[3]}
                                >
                                    <article className="highlight-article">
                                        <figure className="fig-div">
                                            <div>
                                                <LazyLoadImage
                                                    src={`https://img.gs/pvftqstccr/${consecutiveHeadlines[3].multimedia[1].url}`}
                                                    className={`headline-1-img`}
                                                    alt={consecutiveHeadlines[3].multimedia[0].caption}
                                                    placeholderSrc={place_holder_img}
                                                />
                                            </div>
                                            <figcaption className="fig-caption">
                                                <span >
                                                    {consecutiveHeadlines[3].multimedia[0].copyright.toUpperCase()}
                                                </span>
                                            </figcaption>
                                        </figure>
                                        <div>
                                            <h3 className={`hightlights-title`}>
                                                {consecutiveHeadlines[3].title}
                                            </h3>
                                            <p className={`highlight-abstract`}>
                                                {consecutiveHeadlines[3].abstract}
                                            </p>
                                            <p className={`time-ago`}>
                                                <span className="byline-span">
                                                    {`${getTimeAgo(consecutiveHeadlines[3].created_date)} .`}
                                                </span>

                                                <span
                                                    className={`byline-span-author`}
                                                >
                                                    {formatNames(consecutiveHeadlines[3].byline)
                                                        ? formatNames(consecutiveHeadlines[3].byline)
                                                        : "By NEW YORK TIMES"}
                                                </span>
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            </div>


                            <div key={consecutiveHeadlines[2].title} className={`headline-3-li-700`}>
                                <Link
                                    to={`/article/${consecutiveHeadlines[2].byline}`}
                                    className="route-next-page"
                                    state={consecutiveHeadlines[2]}
                                >
                                    <article className="highlight-article">
                                        <figure className="fig-div">
                                            <div>
                                                <LazyLoadImage
                                                    src={`https://img.gs/pvftqstccr/${consecutiveHeadlines[2].multimedia[1].url}`}
                                                    className={`headline-1-img`}
                                                    alt={consecutiveHeadlines[2].multimedia[0].caption}
                                                    placeholderSrc={place_holder_img}
                                                />
                                            </div>
                                            <figcaption className="fig-caption">
                                                <span >
                                                    {consecutiveHeadlines[2].multimedia[0].copyright.toUpperCase()}
                                                </span>
                                            </figcaption>
                                        </figure>
                                        <div>
                                            <h3 className={`hightlights-title`}>
                                                {consecutiveHeadlines[2].title}
                                            </h3>
                                            <p className={`highlight-abstract`}>
                                                {consecutiveHeadlines[2].abstract}
                                            </p>
                                            <p className={`time-ago`}>
                                                <span className="byline-span">
                                                    {`${getTimeAgo(consecutiveHeadlines[2].created_date)} .`}
                                                </span>

                                                <span
                                                    className={`byline-span-author`}
                                                >
                                                    {formatNames(consecutiveHeadlines[2].byline)
                                                        ? formatNames(consecutiveHeadlines[2].byline)
                                                        : "By NEW YORK TIMES"}
                                                </span>
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            </div>



                            <div className="highlight-right-bottom-div">
                                <Link
                                    to={`/article/${consecutiveHeadlines[2].byline}`}
                                    className="route-next-page"
                                    state={consecutiveHeadlines[2]}
                                >
                                    <article className="highlight-article">

                                        <div>
                                            <h3 className="hightlights-title">
                                                {consecutiveHeadlines[2].title}
                                            </h3>
                                            <div className="highlights-right-div">
                                                <span>
                                                    <figure className="highlights-right-div-fig">
                                                        <div>
                                                            <LazyLoadImage
                                                                src={consecutiveHeadlines[2].multimedia[1].url}
                                                                className="headline-3-img"
                                                                alt={consecutiveHeadlines[2].multimedia[0].caption}
                                                                placeholderSrc={place_holder_img}
                                                            />
                                                        </div>
                                                        <figcaption className="fig-caption">
                                                            <span className="highlight-right-div-caption-span">
                                                                {consecutiveHeadlines[2].multimedia[0].copyright.toUpperCase()}
                                                            </span>
                                                        </figcaption>
                                                    </figure>
                                                </span>
                                            </div>
                                            <p className="highlight-abstract">
                                                {consecutiveHeadlines[3].abstract.length > 80
                                                    ? consecutiveHeadlines[3].abstract.slice(0, 90) + "."
                                                    : consecutiveHeadlines[3].abstract}
                                            </p>
                                            <p className="time-ago-right-div">
                                                <span className="byline-span">{`${getTimeAgo(consecutiveHeadlines[2].created_date)} .`} </span>
                                                <span className="byline-span-author">
                                                    {formatNames(consecutiveHeadlines[2].byline)}
                                                </span>
                                            </p>
                                        </div>

                                    </article>
                                </Link>
                            </div>



                        </li>
                    </ol>
                </div>

            </section>
        );
    } else {
        return (
            <div className="loading-div-page">
                We are Loading Most relevant news for you in a moment.
            </div>
        );
    }
}

export default Highlights;







