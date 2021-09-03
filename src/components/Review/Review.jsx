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
      });
  }, [review]);

  useEffect(() => {
    fetch(`https://arteh97.herokuapp.com/api/reviews/${review_id}/comments`)
      .then((response) => response.json())
      .then((body) => {
        const err = [];
        if (body.msg === "No comments found") {
          err.push(body);
          setComments(err);
          console.log(err);
        } else {
          setComments(body.comments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [review_id]);

  return (
    <div className="container mt-5">
      <div key={review.review_id} className={styles.card}>
        <div className={styles.review_img}>
          <img
            src={review.review_img_url}
            alt="img"
            height="100px"
            width="100px"
          ></img>
        </div>
        <div>{review.title}</div>
        <div className={styles.review_body}>{review.review_body}</div>
        <div>Owner: {review.owner}</div>
        <div>Designer: {review.designer}</div>
        <div>Category: {review.category}</div>
        <div>Created At: {review.created_at}</div>
        <div>Votes: {review.votes}</div>
        <div className={styles.comments}>Comments</div>
        <div className="container mt-5">
          <ul>
            {comments.map((comment) => {
              if (comment.msg === "No comments found") {
                return <p>No comments found!</p>;
              } else {
                return <li key={comment.comment_id}>{comment.comment_id}</li>;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Review;
