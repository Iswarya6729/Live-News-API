import React, { Component } from 'react'

export default class Newsitems extends Component {
    render() {
        let { title, description, url, linkUrl, author, date, source } = this.props;

        return (
            <div className='container mt-4'>
                <div className='card position-relative'>
                    <img
                        src={url}
                        alt="News Thumbnail"
                        className="card-img-top"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/400x200?text=Image+Not+Found";
                        }}
                    />


                    <div className="card-body">
                        <span className='badge rounded-pill bg-danger text-light'
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "10px"
                            }}
                        >
                            {source}
                        </span>

                        <h5 className='card-title text-success'>
                            {title ? title.slice(0, 50) + (title.length > 50 ? "..." : "") : "No Title"}
                        </h5>

                        <p className='card-text'>
                            {description ? description.slice(0, 120) + (description.length > 120 ? "..." : "") : "No description"}
                        </p>

                        <p className="text-muted mb-1">By: <strong>{author ? author : "Anonymous"}</strong></p>
                        <p className="text-muted">Published At: <em>{new Date(date).toLocaleString()}</em></p>

                        <a href={linkUrl} className='btn btn-danger' target='_blank' rel='noreferrer'>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
