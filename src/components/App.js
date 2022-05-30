import React from "react";
import blogData from "../data/blog";
import Header from "./header"
import About from "./about"
import ArticleList from "./articleList"

console.log(blogData);
console.log(blogData.image)
console.log('blogs',blogData.posts)

function App() {
  return (
    <div className="App">
      <Header title='blog'/>
      <About dp={blogData.image} txt={blogData.about}/>
      <ArticleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;
