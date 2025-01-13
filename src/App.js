import ArticleCard from './ArticleCard';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { useState,useEffect } from 'react';
function App() {
  let[allAritcle,setallArticle]=useState(null);
  let [author,setAuhtor]=useState([]);
  let [article,setArticle]=useState(null);
  const [loading,setLoading]=useState(true);
  const API_KEY='f3fdd83d0c4e460e9075f349f18ef450';
  const API_URL=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f3fdd83d0c4e460e9075f349f18ef450`


  useEffect(()=>{
    const fatching =async()=> {
      try{
        const response=await fetch(API_URL);
        
        if(!response.ok)
        {
          throw new Error("nhi ho paya");
          
        }
        const data=await response.json();
        setallArticle(data.articles); 
      }
      catch(error)
      {
        console.log(error.message);
      }
      finally{
        setLoading(false);
      }
    }
    fatching(); 
  },[]);

  useEffect(()=>{
    setArticle(allAritcle);
    let allAuthor=['all'];
    allAritcle!==null && allAritcle.forEach(element => {
      element.author!==null && allAuthor.push(element.author);
    });
    setAuhtor(allAuthor);
  },[allAritcle])
  
  const selectAuther=(a)=>
  {
    const val=a.target.value;
    setArticle( val==="all"? allAritcle:allAritcle.filter((a)=>a.author===val))
  }
  
  return (
    
    <>
    <header className='mainHeader'>
        <h1>hey, power</h1>
        <div className='filter'>
          <select className='label' onChange={(a)=>{selectAuther(a)}}>
              {author.map((aouth)=><option>{aouth}</option>)}
          </select>
        </div>
    </header>
    <div className='cardWall'>
    {(loading || article==null)?<h1>loading...</h1>:(article.map((article,key)=>article.urlToImage!=null?<ArticleCard key={key} article={article}/>:""))}

    
    </div>

    </>
    
  
    
  );
}

export default App;
