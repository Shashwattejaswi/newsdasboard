import logo from './logo.svg';
import ArticleCard from './ArticleCard';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
function App() {

  let [article,setArticle]=useState([]);
  const [loading,setLoading]=useState(false);
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
        setArticle(data.articles);
        console.log("article");

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
  },[])
  
  return (
    
    <>
    <header className='mainHeader'>
        <h1>hey, power</h1>
      
    </header>
    <div className='cardWall'>
    {loading?<h1>ruk ja</h1>:article.map((article,key)=><ArticleCard key={key} article={article}/>)}

    </div>
    </>
  
    
  );
}

export default App;
