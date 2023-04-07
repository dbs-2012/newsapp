import React from 'react'

const NewsItem = (props) => {

        let { title, description, imageURL, newsURL, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                <span className="badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span>
                    </div>
                    <img src={!imageURL ? "https://images.hindustantimes.com/tech/img/2023/02/19/1600x900/Pleiades_WiseAntonucci_5000_1676798874178_1676798890004_1676798890004.jpg" : imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
