import React from 'react'
import { useBlog } from '../hooks/hooks'
import { useParams } from 'react-router-dom'
import Appbar from '../components/Appbar';

export default function Blog() {
  const {id}=useParams();
  if(!id)return <div className='text-red-700'>Error: Blog Id is missing!! </div>
  const {blog,loading}=useBlog(id)
  return <>
    <Appbar authorName={blog.author.name}></Appbar>
    {loading?<div className='flex justify-center items-center mt-52 italic'>Loading...</div>:<BlogDetails blog={blog}></BlogDetails>}
  </>
}

function BlogDetails({blog}:any){
    const publishedDate="Dec 3, 2023"
  return <div>
    <div className='grid grid-cols-3 gap-x-6 p-10 mx-4 my-4'>

      {/* Left  */}
      <div className='col-span-2'>
        <div className='text-3xl font-extrabold mb-2.5'> {blog.title} </div>
        <div className='text-gray-500 mb-2.5'> {publishedDate} </div>
        <div className=''> {blog.content} </div>
      </div>

      {/* Right */}
      <div className='col-span-1'> 
        <div className='font-semibold mb-3 pt-2 pl-2 text-lg'>Author</div>
        <div className='flex justify-center items-center gap-x-4'>
          <div className='bg-gray-400 w-6 h-6 border rounded-full p-3 '> </div>
          <div>
            <div className='text-xl font-bold mb-2'> {blog.author.name} </div>
            <div> Master of mirth, purveyor of puns and the funniest person in the kingdom </div>
          </div>
        </div>
      </div>

    </div>
  </div>
}
