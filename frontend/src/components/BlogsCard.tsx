import { Link } from "react-router-dom";

interface BlogsCardProps {
  id:string,
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}


// every blog card is a link. 
// when user comes on this it should be cursor pointer and when click on blogcard it should redirect to blog/<relevant_blog_id> page
// use 'Link' element from react-router-dom instead of 'a" tag (recommended)

export default function BlogsCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogsCardProps) {
  return (
    <Link
      to={`/blog/${id}`}
      className="w-full min-h-fit max-h-72 mx-4 bg-white rounded-lg shadow mb-3.5 overflow-hidden"
    >
      <div className="cursor-pointer mt-1 mb-2 mx-5 pt-2 pb-3 px-6">
        <div className="flex items-center text-sm mb-2">
          {/* Author avatar */}
          <div className="bg-gray-800 rounded-full h-6 w-6 text-slate-100 flex justify-center items-center text-sm pb-1">
            {authorName[0]}
          </div>
          <div className="ml-3 flex justify-between items-center gap-1">
            <div className="font-light">{authorName}</div>
            <div className="font-extralight text-gray-500 text-xs">
              &#x2022;
            </div>
            <div className="text-gray-500">{publishedDate}</div>
          </div>
        </div>
        {/* Title with ellipsis */}
        <div className="font-bold text-xl mb-1 w-full truncate">{title}</div>

        {/* Content with fixed height and ellipsis */}
        <div className="line-clamp-2 break-words">
          {content}
        </div>

        <div className="mt-5 text-sm text-slate-400">
          {Math.floor(content.length / 100)} min read
        </div>
      </div>
    </Link>
  );
}
