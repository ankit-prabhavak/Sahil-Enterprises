import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
  return (
    <div className="blogItem rounded-md shadow-lg p-2 mb-8 hover:-translate-y-1">
      <div className="imgWrappe w-full overflow-hidden rounded-md group cursor-pointer">
        <img
          src={props.src}
          alt="blog"
          className="w-full transition-all group-hover:scale-105"
        />
      </div>
      <div className="info py-4">
        <h2 className="text-black text-[20px] font-semibold mb-3"><Link to='/' className='link'>{props.title}</Link></h2>
        <p className="text-[rgba(0,0,0,0.87)] text-[14px] font-normal mb-3 p-1">
          {props.description}
        </p>

        <Link
          to="/"
          className="link font-bold text-[16px] flex items-center gap-0"
        >
          Read More
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
