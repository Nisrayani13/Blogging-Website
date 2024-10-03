import React from "react";

interface AppbarProps{
    authorName:string
}
export default function Appbar({authorName}:AppbarProps) {
  return (
    <div className="mx-4 flex items-center justify-between border-b mb-5 mt-1">
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
      <div className="bg-gray-800 rounded-full w-9 h-9 text-center text-slate-100 text-2xl">
        {authorName[0]}
      </div>

    </div>
  );
}
