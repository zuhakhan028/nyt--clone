import { countriesList } from "../../assets/data";
import "./countriesList.css"
import { Link } from "react-router-dom";



const CountriesList: React.FC = () => {
    return (
        <>
            {
                countriesList.map((key) => {
                    return (
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
