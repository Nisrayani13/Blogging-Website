import React from 'react';
import BlogsCard from './BlogsCard';

export default function Blogs() {
  return (
    <div className="flex justify-center">
       <BlogsCard
        authorName="Alice Johnson"
        title="The Future of AI Top 10 Travel Destinations for 2024 Mastering the Art of Cooking"
        content="How an ugly single page website makes $5,000 a month with affiliate marketing How an ugly single page website makes $5,000 a month with affiliate marketing How an ugly single page website makes $5,000 a month with affiliate marketing"
        publishedDate="October 3, 2024"
      />
      
      {/* <BlogsCard
        authorName="Bob Williams"
        title="Top 10 Travel Destinations for 2024"
        content="From hidden gems to popular tourist spots, this list covers the top travel destinations you should consider in 2024."
        publishedDate="September 25, 2024"
      />
      
      <BlogsCard
        authorName="Emma Davis"
        title="Mastering the Art of Cooking"
        content="Cooking is not just about following recipes; it's an art. Learn tips and tricks to enhance your culinary skills in this guide."
        publishedDate="August 15, 2024"
      /> */}
    </div>
  );
}
