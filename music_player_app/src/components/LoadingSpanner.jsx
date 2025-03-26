import React from 'react'

function LoadingSpanner() {
  return (
    <div className='flex justify-center items-center py-12'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2-deezer-primary'></div>
    </div>
  );
}

export default LoadingSpanner
