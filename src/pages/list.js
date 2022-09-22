import React from "react";
import ArticleCard from "../components/ArticleCard";

function List() {
  return (
    <main className="pageWrapper">
      <h1>Articles</h1>
      <ArticleCard blurb="testing testing testing" date="article date" imageAlt="" imageSrc="" title="Article Title" />
      <ArticleCard blurb="testing testing testing" date="article date" imageAlt="" imageSrc="" title="Article Title" />
      <ArticleCard blurb="testing testing testing" date="article date" imageAlt="" imageSrc="" title="Article Title" />
    </main>
  );
}

export default List;
