import BlogsCard from '../components/BlogsCard';
import Appbar from '../components/Appbar';
import useBlogs from '../hooks/hooks';
import BlogSkeleton from '../components/BlogSkeleton';

export default function Blogs() {
  const {blogs,loading}=useBlogs();
  const publishedDate="October 3, 2024";

  return (
    <div className='pt-20 min-h-screen bg-gray-100'>
      <div className="flex justify-center flex-col">
        <Appbar></Appbar>
        <div className='text-2xl font-bold mx-8 mb-5 mt-2'>Latest Posts</div>
        {loading?<div>
          <BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
          <BlogSkeleton></BlogSkeleton>
        </div>:
            <div className='flex flex-col items-center mx-6'>
            {blogs.map(function(blog){
                return <BlogsCard key={blog.id} id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={publishedDate}></BlogsCard>
            })}
        </div>
        }
      </div>
    </div>
  );
}
