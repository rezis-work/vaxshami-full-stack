import { categories } from "./dummy/topCategories-dummy-data";

const TopCategories = () => {
  return (
    <div className="flex flex-col items-start space-y-3">
      <div
        className="text-black font-bold inline-flex items-center 
         after:content-[''] after:inline-block 
         after:bg-indigo-400 after:w-4 after:h-1 
         after:ml-2 after:skew-x-[-45deg]"
      >
        <p>Top Categories</p>
      </div>
      <div className="w-full max-w-sm cursor-pointer space-y-3">
        {categories.map((category, index) => (
          <a
          key={index}
            href="#"
            className="flex items-center justify-between 
             bg-gray-100 px-4 py-4 
             rounded-lg font-medium text-black 
             gap-x-55"
          >
            <span>{category.name}</span>
            <span
              className="bg-gray-200 text-pink-500 
                       rounded-md px-2 py-0.5 
                       text-sm font-semibold"
            >
              {category.count}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
