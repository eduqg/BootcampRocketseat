import React, { Component } from 'react';

import PostItem from '../PostItem';

import './index.css';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julia Alcantara",
          avatar: "https://images.unsplash.com/photo-1548246828-91f225028f73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://images.unsplash.com/photo-1474311063486-1a54b6319023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            },
            content: "Toda hora"
          },
          {
            id: 2,
            author: {
              name: "Textao",
              avatar: "https://images.unsplash.com/photo-1474311063486-1a54b6319023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor et nulla eu efficitur. Donec malesuada turpis eget tellus interdum convallis. Suspendisse viverra velit eu orci viverra ultricies. Donec nec efficitur libero. Cras volutpat turpis at erat feugiat, in malesuada massa rutrum. Sed non purus ut metus scelerisque mollis quis quis ligula. Donec tempor at sem vel viverra. Sed vulputate magna dignissim lectus maximus egestas. Morbi semper ultrices ex, a maximus diam accumsan lacinia."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Janice Macêdo",
          avatar: "https://images.unsplash.com/photo-1521117660421-ce701ed42966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        date: "04 Jun 2019",
        content: "Pessoal, oi",
        comments: [
          {
            id: 1,
            author: {
              name: "Eduardo Gomes",
              avatar: "https://images.unsplash.com/photo-1553654057-870acfcfabd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
            },
            content: "oi"
          },
          {
            id: 2,
            author: {
              name: "Berenice da Silva",
              avatar: "https://images.unsplash.com/photo-1433588641602-7c1083c4f0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            },
            content: "Oi"
          },
          {
            id: 3,
            author: {
              name: "Shadow Moon",
              avatar: "https://images.unsplash.com/photo-1479929165333-0adc171e37af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1084&q=80"
            },
            content: "Entendi nada da minha série"
          },
          {
            id: 4,
            author: {
              name: "Diego Fernandes",
              avatar: "https://images.unsplash.com/photo-1474311063486-1a54b6319023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            },
            content: "Faaaaaala dev!"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="postlist">
        {
          this.state.posts.map(post => <PostItem key={post.id} data={post} />)
        }
      </div>
    );
  }
}
