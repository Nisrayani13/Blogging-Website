
export default function BlogDetailsSkeleton() {
  return (
    <div role='status' className='animate-pulse'>
        <div className='grid grid-cols-3 gap-x-6 p-10 mx-4 my-4'>

            {/* Left  */}
            <div className='col-span-2'>
                <div className='h-5 bg-gray-200 rounded-full max-w-2xl mb-3'></div>
                <div className='h-3 bg-gray-200 rounded-full max-w-24 mb-7'> </div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-3xl mb-3"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-2xl mb-3"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-xl mb-3"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-3xl mb-3"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-4xl mb-3"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-3xl mb-3"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-sm mb-3"></div>
            </div>

            {/* Right */}
            <div className='col-span-1'> 
                <div className='h-3 bg-gray-200 rounded-full max-w-32 mb-5'></div>
                <div className='flex items-center gap-x-4'>
                    <div className='bg-gray-200 rounded-full w-9 h-9 p-2 '> </div>
                    <div className="w-full">
                        <div className='h-2.5 bg-gray-200 rounded-full mb-4 max-w-32'></div>
                        <div className="h-2.5 bg-gray-200 rounded-full mb-2.5 w-full"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full mb-2.5 max-w-xs"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full mb-2.5 max-w-[100px]"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full mb-2.5 max-w-[150px]"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>

  )
}
