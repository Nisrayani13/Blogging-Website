export default function BlogSkeleton() {
  return (
    <div role='status' className='animate-pulse  bg-white rounded-lg shadow mb-4 mx-4'>
        <div className="cursor-pointer mt-1 mb-2 mx-5 pt-2 pb-3 px-6">
            <div className="flex items-center mb-4 gap-2">
                <div className="bg-gray-300 rounded-full h-6 w-6 "></div>
                <div className="h-2 bg-gray-300 rounded-full mb-2.5 w-[180px] mt-2"></div>
            </div>

            
            <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700 max-w-lg mb-5"></div>

            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-7xl mb-2"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-5xl mb-2"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-3xl mb-4"></div>

            <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[50px] mb-1"></div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
  )
}


// <div role="status" class="max-w-sm animate-pulse">
//     <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
//     <span class="sr-only">Loading...</span>
// </div>


