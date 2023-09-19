import { countriesList } from "../../assets/data";
import "./countriesList.css"
import { Link } from "react-router-dom";
 function CountriesList(){
return(
    <>
        {
          
            countriesList.map((key)=>{
                return(
                    <li className="country-section" key={key}>
                           <Link to={`country/${key}`} className="country-link">{key.toUpperCase()}</Link>
                           </li>
                )
            })
        }
        </>
)

}
export default CountriesList
