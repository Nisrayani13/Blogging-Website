import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Topbar></Topbar>
      <div className='mx-7 my-14'>
        <div className='font-bold text-2xl sm:text-3xl mb-4'>Welcome to Blogosphere</div>
        <div className='text-xl sm:text-2xl'>Share your thoughts, discover new ideas, and connect with writers from around the world.</div>
      </div>
      <div className='flex justify-center mt-12'>
        <div className='bg-white border rounded-lg shadow-md flex flex-col justify-center items-center px-6 py-5'>
            <div className='font-semibold text-xl sm:text-2xl m-2'>Join Blogosphere Today</div>
            <div className='mb-5 text-base sm:text-lg'>Sign up to start sharing your ideas and connecting with other writers.</div>
            <Link className='bg-black p-2 text-white font-semibold rounded-lg m-2' to={'/signup'}>Get started</Link>
        </div>
      </div>
    </div>
  )
}

function Topbar(){

    return (
    <div className="w-screen bg-white px-4 flex items-center justify-between border-b mb-4 py-1">
        {/* Left */}
        <div className="flex justify-center items-center">
            <svg width="50" height="50"
                viewBox="0 -55 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                <g>
                <path
                    d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
                    fill="#000000"
                ></path>
                </g>
            </svg>
            <div className="px-4 text-xl sm:text-2xl font-bold">Blogosphere</div>
        </div>

        {/* Right */}
        <div className="flex justify-between items-center gap-x-3 sm:gap-x-5  mr-1 sm:mr-5">
            <div className='border border-gray-400 rounded-lg p-1 sm:py-2 sm:px-2.5'>
                <Link to={"/signin"} className='flex justify-between items-center gap-1.5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg>
                    <div className='font-medium sm:font-semibold text-sm sm:text-base'>Sign In</div>
                </Link>
            </div>
            <div className='bg-black border rounded-lg p-1 sm:py-2 sm:px-2.5'>
                <Link to={"/signup"} className='flex justify-between items-center gap-1.5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-5 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                    <div className='text-white font-medium sm:font-semibold text-sm sm:text-base'>Sign Up</div>
                </Link>
            </div>
        </div>

    </div>
    )
}
