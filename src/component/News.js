import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
// import DualRing from './DualRing.gif';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


import './news.css';

const News = (props) => {


  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true)

  
  const newsupdate = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=c4ea455e764842dd838b044edc34b140&page=${page}`;
   setLoading(true)

    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json()
    
    props.setProgress(75);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }


  useEffect(() => {
    newsupdate();

  }, [])



  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.newsupdate();

  // }
  // handlePreviewsClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.newsupdate();

  // }  
  const fetchMoreData = async () => {
    


   
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=c4ea455e764842dd838b044edc34b140&page=${page}`;
    setPage(page + 1)

    let data = await fetch(url);
    let parseData = await data.json()
    
    
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)


  }


  
  return (
    <>

      <h2 style={{ textAlign: 'center', marginBottom: '2pc' }}>Today's most important updates</h2>
      {/* {this.state.loading && <div className="text-center">
        <img src={DualRing} alt="gif is not working" />
      </div>} */}
      {loading}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="row" >
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} />
            </div>
          }
          )}

        </div>
      </InfiniteScroll>
      {/* <div className="container">
          <button className="btnNext" type='buttton' onClick={this.handleNextClick} >
            Next &rarr;</button>
          <button className="btnPreviews" type='button' onClick={this.handlePreviewsClick} disabled={this.state.page <= 1}>
            &larr;Previews</button>
        </div> */}

    </>
  )
}
News.defaultProps = {
  catagory: 'business'
}
News.propTypes = {
  catagory: PropTypes.string,
  pageSize: PropTypes.number
}

export default News








