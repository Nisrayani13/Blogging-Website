import { useBlog } from '../hooks/hooks'
import { useParams } from 'react-router-dom'
import Appbar from '../components/Appbar';
import BlogDetailsSkeleton from '../components/BlogDetailsSkeleton';

export default function Blog() {
  const {id}=useParams();
  if(!id)return <div className='text-red-700'>Error: Blog Id is missing!! </div>
  console.log(`id:${id}`)
  const {blog,loading}=useBlog(id)
  console.log(`blog:${JSON.stringify(blog)}`)
  return <div className='pt-14'>
    <Appbar></Appbar>
    {loading?
      <BlogDetailsSkeleton></BlogDetailsSkeleton>:<BlogDetails blog={blog}></BlogDetails>
    }
  </div>
}

function BlogDetails({blog}:any){
    const publishedDate="Dec 3, 2023"
  return <div>
    <div className='grid grid-cols-3 gap-x-4 sm:gap-x-6 p-10 mx-2 sm:mx-4 my-4'>

      {/* Left  */}
      <div className='col-span-2'>
        <div className='text-2xl font-extrabold mb-2.5 break-words'> {blog.title} </div>
        <div className='text-gray-500 mb-2.5'> {publishedDate} </div>
        <div className='break-words text-lg'> {blog.content} </div>
      </div>

      {/* Right */}
      <div className='col-span-1'> 
        <div className='font-semibold mb-3 pt-2 pl-0 sm:pl-2 text-lg'>Author</div>
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
