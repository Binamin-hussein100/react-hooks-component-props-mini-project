import React from "react";
import Article from "./article"

function ArticleList(props){
    console.log("ar:",props.posts)
    const postsLists = props.posts
    const loopedPosts = postsLists.map((post)=>{
        return <Article key={post.id}/>
    })

    return (
        <main>
            {loopedPosts}
        </main>
    )
}

export default ArticleList