import axios from 'axios';
import React, { ChangeEvent, useState } from 'react'
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

interface blog{
    title:string,
    content:string,
    published: boolean,

}

export default function Publish() {
    const [title, setTitle] =useState("");
    const [content,setContent]=useState("");
    const navigate=useNavigate();

  const onClick=async ()=>{
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title:title,
                content:content
            },{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("jwt")}`
                }
            })
            navigate(`/blog/${response.data.postId}`);
        }catch(error:any){
            alert(error.message)
        }
  }
  return (
    <div className=''>
        <Topbar onClick={onClick}></Topbar>
        <div className='flex mx-8 mt-8'>
            <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="size-12 mt-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
            <div className='px-2 flex-grow'>
                <input type='text' placeholder='Title' className='px-2 block w-full text-3xl py-3 mb-4 border-l border-gray-300 break-words'
                    onChange={(event: ChangeEvent<HTMLInputElement>)=> setTitle((title)=> event.target.value)}
                ></input>
                <textarea rows={8} placeholder='Tell your story...' className='px-2 block w-full text-2xl italic break-words'
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>)=> setContent((content)=> event.target.value)}
                ></textarea>
            </div>
        </div>
    </div>
  )
}

interface TopbarProps{
    onClick:()=>void
}

function Topbar({onClick}:TopbarProps){
    return <div className="mx-4 px-4 flex items-center justify-between border-b mb-5 mt-1">
    <div className="flex justify-center items-center">
        <svg width="60" height="60"
            viewBox="0 -55 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
            <g>
            <path
                d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
                fill="#000000"
            ></path>
            </g>
        </svg>
        <div className="px-5 text-2xl font-bold">Blogosphere</div>
    </div>
    <div className="flex justify-between items-center gap-x-5">
        <button className="bg-green-600 rounded-full text-white py-1.5 px-4" onClick={onClick}>Publish</button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

    </div>

    </div>
}


