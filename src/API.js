import { nanoid } from "nanoid";

export const getComments = async () => {
  return [
    {
      parentCommentId: null,
      commentId: 1,
      commentText: "text",
      childComments: [],
      Likes: 0,
    },
    {
      parentCommentId: null,
      commentId: 2,
      commentText: "text2",
      childComments: [
        {
          parentCommentId: 2,
          commentId: 3,
          commentText: "text2Cooment",
          childComments: [],
          Likes: 0,
        },
      ],
      Likes: 1,
    },
  ];
};

// export const createComment = async (text, parentId = null) => {
//   return {
//     id: Math.random().toString(36).substr(2, 9),
//     body: text,
//     parentId,
//     userId: "1",
//     username: "John",
//     createdAt: new Date().toISOString(),
//   };
// };

// export const updateComment = async (text) => {
//   return { text };
// };

// export const deleteComment = async () => {
//   return {};
// };
