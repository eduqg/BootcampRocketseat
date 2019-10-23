import React from 'react';

import './index.css';

export default function Comment({ data }) {
  return (
    <div className="comment">
      <div className="picture">
        <img src={data.author.avatar} />
      </div>
      <div className="content">
        <p className="name">{data.author.name}</p>
        <p className="textcomment">{data.content}</p>
      </div>
    </div>
  );
}
