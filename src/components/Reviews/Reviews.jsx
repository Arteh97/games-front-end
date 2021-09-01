import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

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
                <div>{review.category}</div>
                <div>{review.owner}</div>
                <div>{review.designer}</div>
                <div>{review.title}</div>
                <div>{review.review_body}</div>
                <div>{review.created_at}</div>
                <div>{review.votes}</div>
                <div>{review.comment_count}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
