import React, { useEffect, useState } from "react";

const Reviews = () => {

  const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9090/api/reviews')
        .then((response) => response.json())
        .then((body) => {
            setReviews(body.reviews);
        }).catch((err) => console.log(err))
    }, [reviews]);


    return (
        <div className="rectangle-page">
            <h1>Reviews</h1>
            <div>
                <ul>
                    {reviews.map((review) => {
                        return (
                            <li key={review.review_id} className="review">
                                <div className="review_img">
                                    <img src={review.review_img_url} alt="img" height="100px" width="100px"></img>
                                </div>
                                <div className="review-props">{review.review_id}</div>
                                <div className="review-props">{review.category}</div>
                                <div className="review-props">{review.owner}</div>
                                <div className="review-props">{review.designer}</div>
                                <div className="review-props">{review.title}</div>
                                <div className="review-body">{review.body}</div>
                                <div className="review-props">{review.created_at}</div>
                                <div className="review-props">{review.votes}</div>
                                <div className="review-props">{review.comment_count}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        </div>
    );
};

export default Reviews;