import React from "react";
import { Link } from "react-router-dom";

interface SigncardProps{
  children:React.ReactNode,
  heading:string,
  subheading:string,
  linktext:string,
  linkTo:string,
  buttonText:string,
  onClick: ()=> void
}

export default function Signcard({
  children,
  heading,
  subheading,
  linktext,
  linkTo,
  buttonText,
  onClick
}:SigncardProps) {
  const aboutTitle="Unleash Your Voice, Share Your Story"
  const aboutContent="Welcome to Blogosphere, where your thoughts inspire and your stories shape conversations. Whether you're here to write, read, or connect, this is your space to express ideas, explore new perspectives, and engage with a passionate community of creators."
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">

      {/* Left Half */}
      <div className="col-span-1 h-screen items-center flex justify-center">
        <div className="w-2/4">
          <div className="text-3xl font-bold mb-1 text-center"> {heading} </div>
          <div className="text-base text-gray-600 pt-1 text-center">Start Your journey with Blogosphere</div>
          <div className="py-3">{children}</div>
          <button onClick={onClick} className="mt-0.5 bg-black text-white border rounded-lg w-full p-1.5 ">{buttonText} </button>
          <div className="pt-1 flex justify-center">
            <div className="text-base mr-0.5 sm:mr-1.5">{subheading}</div>
            <Link to={linkTo} className="underline text-blue-500">{linktext} </Link>
          </div>
        </div>
      </div>

      {/* Right Half */}
      <div className="invisible lg:visible col-span-1 h-screen bg-slate-100 items-center flex justify-center">
        <div className="flex items-center justify-center">
          <div className="mx-10 px-4">
            <div className="text-center font-bold text-2xl mb-3"> "{aboutTitle}"" </div>
            <div className="text-lg font-semibold"> {aboutContent} </div>
          </div>
        </div>
      </div>
    </div>
  );
}
