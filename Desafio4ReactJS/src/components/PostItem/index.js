import React from 'react';

import Comment from '../Comment';

import './index.css';

export default function PostItem({ data }) {
  console.log(data)
  return (
    <div className="postitem">
      <div className="author">
        <img src={data.author.avatar} alt="imgauthor" />
        <div>
          <p className="authorname">{data.author.name}</p>
          <p className="authordate">{data.date}</p>
        </div>
      </div>
      <div className="question">
        <h3>{data.content}</h3>
      </div>
      <hr/>
      {
        data.comments.map(comment => <Comment key={comment.id} data={comment} />)
      }

    </div>
  );
}
