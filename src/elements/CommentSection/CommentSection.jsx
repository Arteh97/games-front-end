import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./CommentSection.module.css";

const CommentSection = (props) => {
  const [liked, setLiked] = useState(false);
  const [comment_id, setComment_id] = useState([]);
  const [comments, setComments] = useState([]);
  const { review_id } = props;

  const updateVotes = (e) => {
    e.preventDefault();
    setLiked(false);
    setComment_id(e.currentTarget.value);
    return axios
      .patch(`https://arteh97.herokuapp.com/api/comments/${comment_id}`, {
        inc_votes: 1,
      })
      .then(() => {
        setLiked(true);
      });
  };

  useEffect(() => {
    fetch(`https://arteh97.herokuapp.com/api/reviews/${review_id}/comments`)
      .then((response) => response.json())
      .then((body) => {
        const err = [];
        if (body.msg === "No comments found") {
          err.push(body);
          setComments(err);
        } else {
          setComments(body.comments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [review_id, liked]);

  return (
    <div className="container mt-5">
      <div className={styles.content}>
        {comments.map((comment) => {
          if (comment.msg === "No comments found") {
            return <p>No Comments Found!</p>;
          } else {
            return (
              <li key={comment.comment_id} className={styles.card}>
                <div className={styles.author}>{comment.author}</div>
                <div className={styles.comment_body}>{comment.body}</div>
                <div className={styles.votes}>{comment.votes}</div>
                <button
                  value={comment.comment_id}
                  onClick={updateVotes}
                  className={styles.button}
                >
                  Like 💙
                </button>
              </li>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CommentSection;
