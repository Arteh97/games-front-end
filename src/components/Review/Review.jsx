import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewVoteButton from "../../elements/ReviewVoteButton/ReviewVoteButton";
import CommentForm from "../../elements/CommentForm/CommentForm";
import CommentSection from "../../elements/CommentSection/CommentSection";
import styles from "./Review.module.css";

const Review = (props) => {
  const [voted, setVoted] = useState(false);
  const { review_id } = useParams();

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`https://arteh97.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => response.json())
      .then((body) => {
        setReview(body.review[0]);
      });
  }, [review_id, voted]);

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
        <ReviewVoteButton
          voted={voted}
          setVoted={setVoted}
          value={review.review_id}
        />
        <div className={styles.comments}>Comments</div>
        <div className="container mt-5">
          <CommentForm />
        </div>
        <CommentSection review_id={review_id} />
      </div>
    </div>
  );
};

export default Review;
