import React from "react";

function Article() {
  const backgroundImageUrl = "url(https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png)";
  const headerStyle = { backgroundImage: backgroundImageUrl, padding: "40px 25px" };

  return (
    <main className="article">
      <header className="article--header" style={headerStyle}>
        <div className="article--header--wrapper">
          <h1>Article Title</h1>
          <p>Wednesday, August 22</p>
          <p className="blurb">testing testing testing</p>
        </div>
      </header>
      <section className="article--content">{/* SECTION */}</section>
    </main>
  );
}

export default Article;
