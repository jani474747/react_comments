import React, { useRef, useState } from "react";
import { nanoid } from "nanoid";
const Allcomments = ({ getDate, getTime, comments, deleteComment, Allcommentss }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyFormValue, setReplyFormValue] = useState("");

  //   const nestedComments = (comments.childComments || []).map((item, index) => {
  //     return <Allcomments key={index} comments={item} />;
  //   });

  const handleChange = (e) => {
    e.preventDefault();
    setReplyFormValue(e.target.value);
  };

  const hanleReplyForm = () => {
    comments.childComments.push({
      parentCommentId: comments.commentId,
      commentId: nanoid(5),
      commentText: replyFormValue,
      getDate: getDate(),
      getTime: getTime(),
      childComments: [],
      Likes: 0,
    });
    setShowReplyForm(false);
  };

  return (
    <>
      <div className="each-comment">
        <div className="first">
          <p>{comments.userName}</p>
          <div>
            {comments.getDate} {comments.getTime}
          </div>
        </div>
        <div className="second">{comments.commentText}</div>
        {!showReplyForm ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button
              onClick={() => {
                setShowReplyForm(true);
              }}
            >
              Reply
            </button>
            <button>Edit</button>
            <button
              onClick={() => {
                deleteComment(Allcommentss, comments.commentId);
              }}
            >
              Delete
            </button>
          </div>
        ) : (
          <div>
            <textarea value={replyFormValue} onChange={handleChange}></textarea>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button onClick={hanleReplyForm}>Add</button>
              <button onClick={() => setShowReplyForm(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      <div className="inner-comment" style={{ marginLeft: "30px" }}>
        {comments.childComments.map((item, index) => {
          return (
            <>
              <Allcomments
                key={nanoid(5)}
                getDate={getDate}
                getTime={getTime}
                comments={item}
                Allcommentss={Allcommentss}
                deleteComment={deleteComment}
              />
              ;
            </>
          );
        })}
      </div>
    </>
  );
};

export default Allcomments;
