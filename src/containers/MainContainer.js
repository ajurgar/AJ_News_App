import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { Route, Routes } from 'react-router-dom';
import Services from "./Services";
import Articles from "../components/Articles";
import HomePage from "./HomePage";
import JournalistsContainer from "./JournalistsContainer";
import { ErrorInfo } from "react";



const MainContainer = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => getAllArticles(), [])

    const getAllArticles = () => {
        Services.getNews()
        .then(news => setArticles(news.articles))
        
    }


    return (!articles) ? null : (
         
        <div>
            <NavBar />
            {/* <Articles articles={articles}/> */}
            <Routes>
                <Route path="/home" element={<HomePage articles={articles}/>} />
                <Route path="/" element={<HomePage articles={articles}/>} />
                <Route path="/articles/*" element={<Articles articles={articles}/>} />
                <Route path="/journalists/*" element={<JournalistsContainer/>} />
            </Routes>
            
        </div>

    )

}


export default MainContainer;