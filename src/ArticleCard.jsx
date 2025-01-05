import '../src/ArticleCard.css'
import Label from './Label';

const ArticleCard=({article})=>{
    let forLabel=[article.author,article.publishedAt.toLocaleString()];
    let image=article.urlToImage;
    return(
        <div className="Box">
            <header>
                <div className="labelBox">
                    {
                        forLabel.map((pin)=><Label pin={pin}/>)
                    }
                
                </div>
                <h2 className='title'>{article.title}</h2>
            </header>
            {image!=null?<img className="img" src={image} alt="incomplete information"/>:<div className='img'>not found</div>}
            <div className="content">
                <h3>{article.description}</h3>
            </div>
        </div>
    )
}
export default ArticleCard;