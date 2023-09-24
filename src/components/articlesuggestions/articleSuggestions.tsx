import "./articleSuggestions.css"
import { WorldNewsFunction } from "../../network/network"
import { EachCountryNewsFunction } from "../../network/network"
import { LazyLoadImage } from "react-lazy-load-image-component"
import place_holder_img from "../../assets/images/placeholder-image.png"
interface articleSuggestions{
    countryname:string
}

const ArticleSuggestions : React.FC<articleSuggestions> =(props)=> {
let lengthOfSuggestions=0
const eachCountryNews= EachCountryNewsFunction(props.countryname);
const eachCountryNewsSuggestion=eachCountryNews?.response.docs
console.log(eachCountryNewsSuggestion)
function imageForSugestions(multimediaItem:string){
    if(multimediaItem){
        return(
            `https://static01.nyt.com/${multimediaItem}`
        )
    }else{
        return(
                    place_holder_img
        )
    }
  
}

if (!eachCountryNewsSuggestion) {
    return (
      <div className="loading-div-page">
      Loading The Most Relevant News
      </div>
    );
  }
else

{




    return (
        <>
            <div className="more-in-continent-div">
                <div className="country-suggestion-header">
                {`MORE IN ${props.countryname.toUpperCase()}`}
                </div>
              <div className="more-in-continent-inner-div">
              {
                eachCountryNewsSuggestion.map((value,index)=>
               
                {
                    return(
                        <div key={index} className="each-country-suggestion-div">
                            <figure className="fig-div-article-suggestions">
                            
                            <LazyLoadImage src={imageForSugestions(value.multimedia[0].legacy.xlarge)} placeholderSrc={place_holder_img} alt={value.headline.main} className="article-suggestion-img"/>
                             <figcaption className="fig-caption">
                                {value.multimedia[0].caption?value.multimedia[0].caption:"New York Times"}
                             </figcaption>
                            </figure>
                           <h1 className="each-country-suggestion-title">
                           {value.headline.main?value.headline.main:"New York Times"}
                           </h1>
                          
                           <div>
                           <div className="byline-span-author">{value.byline.original?value.byline.original:"by New York Times"}</div>
                           <div></div>
                           </div>
                      
                        </div>
                    )
                })
               }
              </div>
 
            </div>
          
        </>
    )
}
   
}

export default ArticleSuggestions