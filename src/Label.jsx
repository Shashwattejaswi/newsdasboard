import { Link } from "react-router"
import './ArticleCard.css'
 const Label=({pin})=>{
 return(
    <a className='label' href="#"> {pin}</a>
 )
}
export default Label;