import React, {useEffect, useState } from "react";

import { Row, Container } from "react-bootstrap";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import loader from "../loader1.gif";
  const News =(props)=> {

  
  const [article, setArticle] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  
  const  capitalizeFirstLetter =(string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const  update = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15efaca9e3994b44a1a6ca27b9c7bf81&page=
    ${page}&pagesize=${props.pageSize}`;
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    setArticle(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=15efaca9e3994b44a1a6ca27b9c7bf81&page=
    ${page + 1}&pagesize=${props.pageSize}`;
    setPage(page +1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(article.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News`
    update();
    // eslint-disable-next-line
  }, [])
    return (
      <>
        <h1 className="text-center mt-4">News - Headlines</h1>
        <hr />
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length < totalResults}
          loader={
            <div className="text-center">
              <img src={loader} alt={"loader"}></img>
            </div>
          }
        >
          <Container className="mt-5">
            <Row className="gap-5 justify-content-center">
              {article.map((Item) => {
                return (
                  <NewsItem
                    key={Item.url}
                    title={
                      Item.title
                        ? Item.title.length >= 45
                          ? Item.title.slice(0, 45) + "..."
                          : Item.title
                        : ""
                    }
                    content={
                      Item.description
                        ? Item.description.length >= 88
                          ? Item.description.slice(0, 88) + "..."
                          : Item.description
                        : ""
                    }
                    imageUrl={
                      !Item.urlToImage
                        ? "https://media.zenfs.com/en/bloomberg_markets_842/a2317b1b81985f5d9bdb5008cc69a169"
                        : Item.urlToImage
                    }
                    newsUrl={Item.url}
                    date={Item.publishedAt}
                  />
                );
              })}
            </Row>
          </Container>
        </InfiniteScroll>
        <hr />
      </>
    );
}
export default News
 News.defaultProps = {
  pageSize: 10,
  country: "us",
  category: "sports",
  totalResults: 0,
};
 News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};