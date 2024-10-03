import React, { lazy, useEffect, useState } from 'react'
import axios from "axios"
import { BACKEND_URL } from '../config';

interface Blog{
    id:string,
    title:string,
    content:string,
    author:{
        name:string
    }
}

export default function useBlogs() {
  const [blogs,setBlogs]=useState<Blog[]>([]);
  const [loading,setLoading]=useState<Boolean>(true)
  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    }).then(async function(response){
        console.log(response.data)
        setBlogs(response.data.posts)
        setLoading(false)
    })
  },[]);
  return {blogs,loading};
}
