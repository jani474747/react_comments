import React, { useEffect, useState } from "react";
import Allcomments from "./Allcomments";
import Form from "./Form";
import { nanoid } from "nanoid";

// import { getComments } from "../API";

export const CommentContainer = () => {
  const getDate = () => {
    var today = new Date();
    return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  };
  const getTime = () => {
    var today = new Date();
    return today.getHours() + ":" + today.getMinutes();
  };

  const [comments, SetComments] = useState([
    // {
    //   parentid: null,
    //   id: 1,
    //   commentText: "comment1",
    //   getDate: getDate(),
    //   getTime: getTime(),
    //   childComments: [],
    //   Likes: 0,
    // },
    // {
    //   parentid: null,
    //   id: 2,
    //   commentText: "comment2",
    //   getDate: getDate(),
    //   getTime: getTime(),
    //   childComments: [
    //     {
    //       parentCommentId: 2,
    //       userName: "REKHIL",
    //       commentId: 3,
    //       commentText: "comment2coment",
    //       getDate: getDate(),
    //       getTime: getTime(),
    //       childComments: [],
    //       Likes: 0,
    //     },
    //     {
    //       parentCommentId: 2,
    //       commentId: 3,
    //       commentText: "comment2coment",
    //       getDate: getDate(),
    //       getTime: getTime(),
    //       childComments: [],
    //       Likes: 0,
    //     },
    //   ],
    //   Likes: 1,
    // },
  ]);

  const addComment = (text) => {
    SetComments([
      ...comments,
      {
        parentCommentId: null,
        commentId: nanoid(5),
        commentText: text,
        getDate: getDate(),
        getTime: getTime(),
        childComments: [],
        Likes: 0,
      },
    ]);
  };

  function  deleteComment(allComments, newCommentId) {
    for (let i in allComments) {
      if (allComments[i].commentId === newCommentId) { 
			comments.splice(i, 1);
      SetComments([...allComments])
      } else if (allComments[i].childComments.length > 0) {
        deleteComment(allComments[i].childComments, newCommentId);
      }
    }

      // SetComments([...comments])

  };
  

//replit.com/@PrathyuPrasad/Nodejs-3#index.js:1:4

 return (
  <div>
    <Form addComment={addComment} />

    <div className="all-comments">
      {comments.map((itm, index) => {
        return (
          <Allcomments
            getDate={getDate}
            getTime={getTime}
            key={index}
            comments={itm}
            deleteComment={deleteComment}
            Allcommentss={comments}
          />
        );
      })}
    </div>
  </div>
);
};
