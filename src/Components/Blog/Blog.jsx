import React from 'react';
import { CgLaptop } from 'react-icons/cg';

import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
  // console.log(handleBookmark);
  const { title, author, author_img, cover } = blog;
  return (
    <div className="m-2">
      {/* <h1>{id}</h1>
      <h1>{title}</h1> */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="" src={cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author flex justify-around items-center">
            <h3>{author}</h3>
            <img className="w-16" src={author_img}></img>
            <button onClick={() => handleBookmark(blog)}>
              <FaBookmark size={30} />
            </button>
          </div>
          <h2 className="card-title">{title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>

          <div className="flex">
            {blog.hashtags.map((has) => (
              <p key={has}>{has}</p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleMarkAsRead(blog.reading_time,blog.id)}
              className="btn btn-primary"
            >
              mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;