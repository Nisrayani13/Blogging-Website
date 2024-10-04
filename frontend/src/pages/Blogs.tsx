import React from 'react';
import BlogsCard from '../components/BlogsCard';
import Appbar from '../components/Appbar';
import useBlogs from '../hooks/hooks';

export default function Blogs() {
  const {blogs,loading}=useBlogs();
  const publishedDate="October 3, 2024";
  return (
    <div className="flex justify-center flex-col">
       <Appbar authorName="Alice Johnson"></Appbar>
       {loading?<div className='italic text-center m-44'>Loading...</div>:
          <div className='flex flex-col items-center'>
          {blogs.map(function(blog){
              return <BlogsCard id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={publishedDate}></BlogsCard>
          })}
       </div>
       }
    </div>
  );
}
