import React from "react";

export default function Signcard({
  children,
  heading,
  subheading,
  linktext,
  linkTo,
  buttonText,
  buttonTo,
}) {
  const aboutTitle="Unleash Your Voice, Share Your Story"
  const aboutContent="Welcome to Blogosphere, where your thoughts inspire and your stories shape conversations. Whether you're here to write, read, or connect, this is your space to express ideas, explore new perspectives, and engage with a passionate community of creators."
  return (
    <div className="grid grid-cols-2">

      {/* Left Half */}
      <div className="col-span-1 h-screen items-center flex justify-center">
        <div className="w-2/4">
          <div className="text-3xl font-bold mb-1 text-center"> {heading} </div>
          <div className="text-base text-gray-600 pt-1 text-center">Start Your journey with Blogosphere</div>
          <div className="py-3">{children}</div>
          <button className="mt-0.5 bg-black text-white border rounded-lg w-full p-1.5 ">{buttonText} </button>
          <div className="pt-1 flex justify-center">
            <div className="text-base mr-1.5">{subheading}</div>
            <a className="underline text-blue-400">{linktext} </a>
          </div>
        </div>
      </div>

      {/* Right Half */}
      <div className="col-span-1 h-screen bg-slate-100 ietms-center flex justify-center">
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
