import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Review.module.css";

const Review = (props) => {
  const { review_id } = useParams();

  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://arteh97.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => response.json())
      .then((body) => {
        setReview(body.review[0]);
      })
      .then(() => {
        fetch(`https://arteh97.herokuapp.com/api/reviews/${review_id}/comments`)
          .then((response) => response.json())
          .then((body) => {
            setComments(body.comments);
          });
      });
  }, [review]);

  return (
    <div className={styles.container}>
      <li key={review.review_id} className={styles.review}>
        <div className={styles.review_img}>
          <img
            src={review.review_img_url}
            alt="img"
            height="100px"
            width="100px"
          ></img>
        </div>
        {review.review_title}
        <div className={styles.review_body}>{review.review_body}</div>
        <div>Owner: {review.owner}</div>
        <div>Designer: {review.designer}</div>
        <div>Category: {review.category}</div>
        <div>Created At: {review.created_at}</div>
        <div>Votes: {review.votes}</div>
        <div className={styles.comments}>Comments</div>
      </li>
      {comments.map((comment) => {
        if (comment.length === 0) {
          return <p>No Comments Found!</p>;
        } else {
          return <li key={comment.comment_id}>{comment.body}</li>;
        }
      })}
    </div>
  );
};

export default Review;
