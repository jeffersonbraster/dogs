import React from "react";
import PhotoCommentsForm from "./PhotoCommentsForm";
import { UserContext } from "../../UserContext";

import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSections = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSections.current.scrollTop = commentsSections.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSections} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}</b>:{" "}
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
