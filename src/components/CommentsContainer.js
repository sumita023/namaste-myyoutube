import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "Sumita",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Sumita",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Sumita",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Sumita",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Sumita",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Sumita",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                          {
                            name: "Sumita",
                            text: "Lorem ipsum dolor sit amet, consectetur adip",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Sumita",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
          {
            name: "Sumita",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Sumita",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Sumita",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
      {
        name: "Sumita",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Sumita",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Sumita",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Sumita",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Sumita",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
