import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VoteButton from "../../elements/VoteButton/VoteButton";
import CommentForm from "../../elements/CommentForm/CommentForm";
import styles from "./Review.module.css";

const Review = (props) => {
  const [voted, setVoted] = useState(false);
  const { review_id } = useParams();

  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://arteh97.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => response.json())
      .then((body) => {
        setReview(body.review[0]);
      });
  }, [review, voted]);

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
          console.log(body.comments);
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
        <VoteButton
          voted={voted}
          setVoted={setVoted}
          value={review.review_id}
        />
        <div className={styles.comments}>Comments</div>
        <div className="container mt-5">
          <CommentForm />
          {comments.map((comment) => {
            if (comment.msg === "No comments found") {
              return <p>No comments found!</p>;
            } else {
              return (
                <div className="row">
                  <div key={comment.comment_id}>Author: {comment.author}</div>
                  <div>{comment.body}</div>
                  <div>Votes: {comment.votes}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
