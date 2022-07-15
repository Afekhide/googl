import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading';
import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {

  const {results, loading, getResults, searchTerm} = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if(searchTerm){
      if(location.pathname === "/videos"){
        getResults(`/search/q=${searchTerm} videos`)
      }

      else{
        getResults(`${location.pathname}/q=${searchTerm}&num=20`)
      }
    }
  }, [searchTerm, location.pathname, getResults])

  if (loading) {return <Loading/>}

  
  switch (location.pathname) {
    case '/search':
        return (
          <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
            {results?.map(({link, title, description, cite}, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <p className="text-sm">
                    {cite.domain}
                  </p>
                  <p className="mt-1 hover:underline text-xl dark:text-blue-200 text-blue-600 hover:text-blue-800">{title}</p>
                </a>
              </div>
            ))}
          </div>
        );
    case '/image':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({image, link: {href, title}}, index) => (
            <a rel="noreferrer" target="_blank" href={href} key={index} className="sm:p-3 p-5">
                <img src={image?.src} alt={title} lazy="false"/>
                <p className="break-words w-36 text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className="flex flex-wrap">
          {results?.map((video, index) => (
            <div key={index} className="px-3 py-2">
              {console.log(video.additional_links)}
              <ReactPlayer url={video.additional_links?.[0]?.href} 
              width="355px" height="200px" controls/>
            </div>
          ))}
        </div>
      );

    case '/news':  
    return (
      <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
        { results?.map(({links, title, id, source}) => (
          <div key={id} className="md:w-2/5 w-full">
            <a href={links?.[0].href} target="_blank" rel="noopener noreferrer" className="hover:underline">
              <p className="mt-1 text-xl dark:text-blue-200 text-blue-600 ">{title}</p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
          </div>
        ))}
      </div>
    );;

    default:
      return (
        <div 
        className="px-10 py-5 text-2xl font-bold bg-red-500 text-white dark:bg-white dark:text-red-500">
            Invalid path: {location.pathname}
        </div>
      )
  }
}

export default Results;