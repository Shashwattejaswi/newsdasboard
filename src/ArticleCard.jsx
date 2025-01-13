import '../src/ArticleCard.css'
import Label from './Label';

const ArticleCard=({article})=>{
    let forLabel=[{display:article.author,placeHolder:"author"},{display:article.publishedAt.toLocaleString(),placeHolder:"date"}];
    let image=article.urlToImage;
    let s=article.content!=null? article.content:"sorry please";

    let contentArray=s.split(" ");
    contentArray.pop();
    contentArray.pop();
    contentArray=contentArray.join(" ");
    return(
        <div className="Box">
            <header>
                <div className="labelBox">
                    {
                        forLabel.map((pin)=><Label pin={pin}/>)
                    }
                
                </div>
                
            </header>
            {image!=null?<img className="img" src={image} alt="incomplete information"/>:<div className='img'>not found</div>}
            <div className="content">
            <h2 className='title'>{article.title}</h2>
            
                <h3>{article.description+ contentArray}</h3>
            </div>
        </div>
    )
}
export default ArticleCard;