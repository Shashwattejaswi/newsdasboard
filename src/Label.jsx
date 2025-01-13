import { Link } from "react-router"
import './ArticleCard.css'
 const Label=({pin})=>{
 return(
    <a className='label' title={pin.placeHolder} href="#"> {pin.display}</a>
 )
}
export default Label;