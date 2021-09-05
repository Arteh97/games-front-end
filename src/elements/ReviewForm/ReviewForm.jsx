import React from "react";
import { useState } from "react";
import styles from "./ReviewForm.module.css";
import axios from "axios";

const ReviewForm = () => {
  const [reviewTitleInput, setReviewTitleInput] = useState([]);
  const [reviewBodyInput, setReviewBodyInput] = useState([]);
  const [ownerInput, setOwnerInput] = useState([]);
  const [designerInput, setDesignerInput] = useState([]);
  const [categoryInput, setCategoryInput] = useState([]);

  const handleTitleChange = (e) => {
    setReviewTitleInput(e.currentTarget.value);
  };

  const handleBodyChange = (e) => {
    setReviewBodyInput(e.currentTarget.value);
  };

  const handleOwnerChange = (e) => {
    setOwnerInput(e.currentTarget.value);
  };

  const handleDesignerChange = (e) => {
    setDesignerInput(e.currentTarget.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {};
    newReview.owner = ownerInput;
    newReview.title = reviewTitleInput;
    newReview.review_body = reviewBodyInput;
    newReview.designer = designerInput;
    newReview.category = categoryInput;
    console.log(newReview);
    return axios.post("https://arteh97.herokuapp.com/api/reviews", {
      owner: newReview.owner,
      title: newReview.title,
      review_body: newReview.review_body,
      designer: newReview.designer,
      category: newReview.category,
    });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h2>Post Review</h2>
        <label className={styles.field}>
          Owner:
          <textarea
            onChange={handleOwnerChange}
            rows="1"
            value={ownerInput}
            type="text"
            placeholder="Owner goes here..."
          />
        </label>
        <label className={styles.field}>
          Review Title:
          <textarea
            onChange={handleTitleChange}
            rows="1"
            value={reviewTitleInput}
            type="text"
            placeholder="Review title here..."
          />
        </label>
        <label className={styles.field}>
          Body:
          <textarea
            onChange={handleBodyChange}
            rows="3"
            value={reviewBodyInput}
            type="text"
            placeholder="Review goes here..."
          />
        </label>
        <label type="submit" className={styles.field}>
          Designer
          <textarea
            onChange={handleDesignerChange}
            rows="1"
            value={designerInput}
            placeholder="Designer goes here..."
          />
        </label>
        <label className={styles.field}>
          Category:
          <textarea
            onChange={handleCategoryChange}
            rows="1"
            value={categoryInput}
            type="text"
            placeholder="Category goes here..."
          />
        </label>
        <button className={styles.button} type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
