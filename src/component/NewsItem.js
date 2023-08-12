import React from 'react'
import './NewsItems.css'
import news from './news.jpg'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div> 
                    <span className="badge rounded-pill"> {!source ? "Rs-News" : source} </span>
                    </div>
                    <img src={!imageUrl?news:imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,80)}...........</h5>
                        <p className="card-text">{description.slice(0,120)}...........</p>
                        <p className="card-text"><small className="text-muted">By {!author? "Rs-News" : author} On {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Full Coverage Of This Story</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem