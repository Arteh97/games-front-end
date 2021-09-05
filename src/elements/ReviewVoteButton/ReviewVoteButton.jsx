import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./ReviewVoteButton.module.css";

const ReviewVoteButton = (props) => {
  const { voted, setVoted } = props;
  const { review_id } = useParams();

  const updateVotes = (e) => {
    e.preventDefault();
    if (voted === true) return;
    return axios
      .patch(`https://arteh97.herokuapp.com/api/reviews/${review_id}/`, {
        inc_votes: 1,
      })
      .then(() => {
        setVoted(true);
      });
  };

  return (
    <button className={styles.button} onClick={updateVotes}>
      {voted ? "👍 Voted!" : "Vote?"}
    </button>
  );
};

export default ReviewVoteButton;
