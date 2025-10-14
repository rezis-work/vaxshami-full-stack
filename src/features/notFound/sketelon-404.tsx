export default function NotFoundSkeleton() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 md:px-12 bg-white animate-pulse">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-10">
          <div className="w-[400px] h-[400px] bg-gray-200 rounded-lg"></div>
        </div>
        <div className="flex flex-col space-y-4 max-w-md text-center md:text-left">
          <div className="h-4 w-64 bg-gray-200 rounded"></div>
          <div className="h-4 w-52 bg-gray-200 rounded"></div>
          <div className="h-10 w-40 bg-gray-200 rounded mt-4"></div>
        </div>
      </div>
    );
  }
  
  