import React from "react";

interface BlogsCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
export default function BlogsCard({authorName,title,content,publishedDate}: BlogsCardProps) {
  return (
    <div className="my-1 border-b pt-2 pb-3 px-3">
      <div className="flex items-center text-sm mb-2">
        <div className="bg-blue-400 rounded-full h-5 w-5 text-slate-100 flex justify-center items-center text-xs">{authorName[0]}</div>
        <div className="ml-1 flex justify-between items-center gap-1">
          <div className="font-light">{authorName} </div>
          <div className="font-extralight text-gray-500 text-xs">&#x2022;</div> 
          <div className="text-gray-500">{publishedDate}</div>
        </div>
      </div>
      <div className="font-bold text-xl mb-1"> {title} </div>
      {content.length>100?<div className=""> {content.slice(0,100) + "..."} </div>:<div> {content} </div> } 
      <div className="mt-5 text-xs text-slate-400"> {Math.floor(content.length/100)} min read </div>
    </div>
  );
}
