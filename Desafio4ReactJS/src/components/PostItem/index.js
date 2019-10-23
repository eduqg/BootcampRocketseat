import React from 'react';

import './index.css';

export default function PostItem({data}) {
  console.log(data)
  return (
    <div className="greatwhitecontainer">
        <h1>Hello</h1>
        <h3>{data.id}</h3>
        <h3>{data.date}</h3>
        <h3>{data.content}</h3>
    </div>
  );
}
