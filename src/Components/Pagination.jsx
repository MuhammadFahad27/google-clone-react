import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Pagination = ({queries}) => {
  const {query} = useParams();
  const navigate = useNavigate();
  const pagination = [
    {page:1,startIndex:1},
    {page:2,startIndex:11},
    {page:3,startIndex:21},
    {page:4,startIndex:31},
    {page:5,startIndex:41},
    {page:6,startIndex:51},
    {page:7,startIndex:61},
    {page:8,startIndex:71},
    {page:9,startIndex:81},
    {page:10,startIndex:91},
  ];
  const [page, setPage] = useState(pagination[0].startIndex);

  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);

  const handlePagination = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
  }

  return (
    <div className="sticky bottom-0 bg-white py-3 md:py-4 border-t border-gray-200 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 px-2">
        {queries?.previousPage && (
          <button 
            onClick={() => handlePagination(queries?.previousPage[0].startIndex)}
            className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          >
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">Previous</span>
            </div>
          </button>
        )}
        
        <div className="flex flex-wrap justify-center gap-1 max-w-full overflow-x-auto py-1">
          {pagination.map((item) => (
            <button
              key={item.page}
              onClick={() => handlePagination(item.startIndex)}
              className={`min-w-[2rem] px-2 py-1 rounded-md ${
                page === item.startIndex 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200`}
            >
              {item.page}
            </button>
          ))}
        </div>

        {queries?.nextPage && (
          <button 
            onClick={() => handlePagination(queries?.nextPage[0].startIndex)}
            className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          >
            <div className="flex items-center justify-center">
              <span className="hidden sm:inline">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination;