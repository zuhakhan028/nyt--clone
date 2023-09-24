import Header from "../header/header";
import "./moreDispatches.css"
import search_icon from ".././../assets/images/share.svg"
import { useEffect, useState } from "react";
import { worldNewsModule } from "../../assets/module";
import LatestSections from "../latestsections/latestSections";
import Footer from "../footer/footer";


interface MoreDispatches{
text:string
}
const MoreDispatches:React.FC<MoreDispatches>=(props)=>{


    let title=props.text;
    document.title=title;
    const [worldNewsResult, setWorldNewsResult] = useState<worldNewsModule>()
    var requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
    };
    useEffect(() => {
        let url;
        window.scroll(0,0)
        if (props.text === "Dispatches" || props.text === "The Saturday Profile") {
            url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=oj5apZ1t8GGl3mvFF2mfYtddMrB9BAsM";
        } else {
            url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q="${props.text.toLowerCase()}"&api-key=oj5apZ1t8GGl3mvFF2mfYtddMrB9BAsM`;
        }
    
        let requestOptions: any = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => setWorldNewsResult(result))
            .catch(error => console.log('error', error));
    }, [props.text]);

    if(worldNewsResult){
        return (
     
            <div className="more-dispatches">
                <div className='inner-app-div'>
                    <Header text={props.text.toUpperCase()} />
                    <section className='middle-section-dipatches'>
                        <div className="news-section-dispatches">
                            WORLD
                        </div>
                        <div className="news-section-dispatches-inner-div">
                            <div>
                            <h1 className="news-section-h1">
                                {props.text}
                            </h1>
                            {props.text=="The Saturday Profile" && <p className="tagline-more-disptches">A weekly profile of the individuals who are shaping the world around them.</p>}
                            </div>
                            
                            <div className="share-outer-div">
                                <a><img src={search_icon} className="share-img" alt={"share-img"}></img></a>
                            </div>
                        </div>                        
                        <LatestSections worldnews={worldNewsResult}/>
                        <Footer/>    
                    </section>            
                </div>
            </div>
        )
        }else{
            return(
                <div className="more-dispatches-loading-page">
                   {` Getting you the Most Relevant ${props.text}`}
                </div>
            )
    }
    
}

export default MoreDispatches;