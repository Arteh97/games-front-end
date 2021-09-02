import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://arteh97.herokuapp.com/api/reviews")
      .then((response) => response.json())
      .then((body) => {
        setReviews(body.reviews);
      })
      .then(() => {})
      .catch((err) => console.log(err));
  }, [reviews]);

  return (
    <div className={styles.container}>
      <header>Reviews</header>
      <div className={styles.content}>
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.review_id} className={styles.review}>
                <div className={styles.review_img}>
                  <img
                    src={review.review_img_url}
                    alt="img"
                    height="100px"
                    width="100px"
                  ></img>
                </div>
                <Link to={`/reviews/${review.review_id}`}>
                  <button className={styles.button} value={review.review_id}>
                    {review.review_title}
                  </button>
                </Link>
                <div className={styles.review_body}>{review.review_body}</div>
                <div>Owner: {review.owner}</div>
                <div>Designer: {review.designer}</div>
                <div>Category: {review.category}</div>
                <div>Created At: {review.created_at}</div>
                <div>Votes: {review.votes}</div>
                <div>Comment Count: {review.comment_count}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
