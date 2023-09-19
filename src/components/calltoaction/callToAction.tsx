import "./callToAction.css"
import gift_icon from "../../assets/images/gift.svg"
import share_icon from "../../assets/images/share.svg"
import save_icon from "../../assets/images/save.svg"


function CallToAction(){
    return(
        <div className="article-cta-div">
                        <div className="share-full-article">
                            <img src={gift_icon} alt={"gift-icon"} className="gift-icon" ></img>
                            <span>Share full article</span>
                        </div>
                        <div className="article-share-div"> <img src={share_icon} className="article-share-icon" alt={"share-icon"}></img></div>
                        <div className="article-share-div"> <img src={save_icon} className="article-save-icon" alt={"save-icon"}></img></div>

                    </div>
    )
}

export default CallToAction