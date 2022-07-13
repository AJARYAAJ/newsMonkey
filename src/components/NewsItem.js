import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
        <div className='my-3'>
            <div className="card">
                <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0}}>
                    <span className='badge rounded-pill bg-danger'>{source}</span>
                </div>
                <img src={imageUrl ? imageUrl : "https://sportshub.cbsistatic.com/i/r/2022/07/12/2ee1781f-4f80-40ae-b934-422988750962/thumbnail/1200x675/d40c1db73566d69beb19fecbad5b2e94/steelersstadium.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By {author ? author : "unknown"} On {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}

export default NewsItem