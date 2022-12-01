import React from "react";
import Article from "./Article";

const Articles = ({ articles }) => {

    const articleNodes = articles.map((article, index) => {
        return (
            <Article article={article} key={index}/>
        )
    })


    return (
        <>
            {articleNodes}
        </>
    )
}

export default Articles;