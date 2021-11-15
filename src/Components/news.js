import React from "react";
import Newscard from "./newscard";

function News() {
  return (
    <div className="news">

    <Newscard/>
    <Newscard/>
    <Newscard/>
    <Newscard/>

    <div className="news__title">
    <p className="news__newstext">News</p>
    </div>

    <div className="news__decorstrip"></div>

    </div>
  );
}

export default News;
