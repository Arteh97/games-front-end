import React from "react";
import { useState } from "react";
import styles from "./CommentForm.module.css";
import axios from "axios";
import { useParams } from "react-router";

const CommentForm = () => {
  const { review_id } = useParams();
  const [authorInput, setAuthorInput] = useState([]);
  const [bodyInput, setBodyInput] = useState([]);

  const handleAuthorChange = (e) => {
    setAuthorInput(e.currentTarget.value);
  };

  const handleBodyChange = (e) => {
    setBodyInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {};
    newComment.username = authorInput;
    newComment.body = bodyInput;
    console.log(newComment);
    return axios.post(
      `https://arteh97.herokuapp.com/api/reviews/${review_id}/comments`,
      {
        body: newComment.body,
        username: newComment.username,
      }
    );
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h2>Post Comment</h2>
        <label className={styles.field}>
          Author:
          <textarea
            onChange={handleAuthorChange}
            rows="1"
            value={authorInput}
            type="text"
            placeholder="Author goes here..."
          />
        </label>
        <label className={styles.field}>
          Comment:
          <textarea
            onChange={handleBodyChange}
            rows="2"
            value={bodyInput}
            type="text"
            placeholder="Comment goes here..."
          />
        </label>
        <button className={styles.button} type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
