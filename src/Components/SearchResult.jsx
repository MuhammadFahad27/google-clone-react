import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiSearch, FiImage, FiFilm, FiMapPin, FiPhone, FiMoreVertical } from 'react-icons/fi';
import { MdOutlineArticle, MdOutlineShoppingBag } from 'react-icons/md';
import SearchInput from './SearchInput';
import Footer from './Footer';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { imageContext } from '../Context/context';
import { fetchDataFromApi } from '../Utils/api';
import Pagination from './Pagination';

const SearchResult = () => {
  const [selectedMenu, setSelectedMenu] = useState('All');
  const { setImage, image } = useContext(imageContext);
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();

  useEffect(() => {
    fetchSearchResult();
  }, [query, startIndex, image]);

  const fetchSearchResult = () => {
    let payload = { q: query, start: startIndex };
    if (image) {
      payload.searchType = 'image';
    }

    fetchDataFromApi(payload)
      .then((result) => {
        setResult(result);
      })
      .catch((error) => {
        console.log('Error while data Fetching ', error);
      });
  };

  const handleMenu = (value) => {
    setSelectedMenu(value);
    setImage(value === 'Images');
  };

  const menuItems = [
    { icon: <FiSearch className="mr-1" />, text: 'All', active: true },
    { icon: <MdOutlineArticle className="mr-1" />, text: 'News' },
    { icon: <FiImage className="mr-1" />, text: 'Images' },
    { icon: <FiFilm className="mr-1" />, text: 'Videos' },
    { icon: <FiMapPin className="mr-1" />, text: 'Maps' },
    { icon: <MdOutlineShoppingBag className="mr-1" />, text: 'Shopping' },
    { icon: <FiMoreVertical className="mr-1" />, text: 'More' }
  ];

  return (
    <main className="min-h-screen flex flex-col ">
      {/* Header and menu sections remain the same */}
      <div className="border-b border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="mr-4">
            <Link to={'/'}>
              <img src={logo} alt="Google" className="h-6 w-auto" />
            </Link>
          </div>
          <div className="flex-grow max-w-2xl">
            <SearchInput />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center overflow-x-auto px-4 hide-scrollbar">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center px-4 py-3 text-sm whitespace-nowrap border-b-2 ${
                  selectedMenu === item.text ? 'border-blue-500 text-blue-600' : 'border-transparent cursor-pointer text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => handleMenu(item.text)}
              >
                {item.icon}
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results section */}
      <div className="flex-grow px-4 sm:px-8 py-2 w-full max-w-6xl mx-auto">
        {/* Search information */}
        {result?.searchInformation && (
          <div className="text-sm text-gray-600 mb-4 pt-3 ml-0 pl-0">
            About {result.searchInformation.formattedTotalResults} results (
            {result.searchInformation.formattedSearchTime} seconds)
          </div>
        )}

        {/* Loading state */}
        {!result && (
          <div className="flex justify-center h-64 ml-0">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
          </div>
        )}

        {/* No results state */}
        {result?.items && result.items.length === 0 && (
          <div className="text-center py-10 ml-0">
            <h3 className="text-lg font-medium text-gray-800">No results found</h3>
            <p className="text-gray-600 mt-2">
              Try different keywords or remove search filters
            </p>
          </div>
        )}

        {/* Conditional rendering based on image search */}
        {result?.items && result.items.length > 0 && (
          <div className="ml-0">
            {image ? (
              // Image results grid
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {result.items.map((item, index) => (
                  <div key={index} className="group">
                    <a href={item.link} className="block">
                      <div className="overflow-hidden rounded-lg mb-2">
                        <img
                          src={item.link} 
                          alt={item.title}
                          className="w-full h-40 object-center group-hover:opacity-90 transition-opacity"
                        />
                      </div>
                      <div className="text-xs text-gray-700 truncate">{item.displayLink}</div>
                      <div
                        className="text-sm text-gray-900 mt-1 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: item.htmlTitle || item.title }}
                      />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
            
              <div className="space-y-6">
                {result.items.map((item, index) => (
                  <div key={index} className="mb-6 max-w-[600px]">
                     <div className="flex items-center text-xs text-gray-500 mb-1">
                      {item.pagemap?.cse_thumbnail?.[0]?.src && (
                        <img
                          src={item.pagemap.cse_thumbnail[0].src}
                          alt=""
                          className="w-4 h-4 mr-2 rounded-sm"
                        />
                      )}
                      <span className="truncate">
                        {item.displayLink}
                        {item.formattedUrl && (
                          <span className="text-gray-400 ml-1">
                            › {new URL(item.link).pathname.replace(/^\//, '').replace(/\/$/, '')}
                          </span>
                        )}
                      </span>
                    </div>

                    
                    <a
                      href={item.link}
                      className="text-[#1a0dab] hover:underline text-[20px] font-normal leading-snug block tracking-tight"
                      dangerouslySetInnerHTML={{ __html: item.htmlTitle || item.title }}
                    />

                   
                    <div
                      className="text-[#4d5156] text-[14px] mt-1 leading-[1.58]"
                      dangerouslySetInnerHTML={{ __html: item.htmlSnippet || item.snippet }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <Pagination queries={result?.queries}/>
      </div>

      <Footer />
    </main>
  );
};

export default SearchResult;