import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from  'react-loader-spinner'


<Rings
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />

const Loading = () => {
  return (
    <div className="px-50 py-50 flex align-center justify-center">
        <Rings
        height="100" width="100" color="#60a5fa" ariaLabel="loading"/>
    </div>
  )
}

export default Loading;  