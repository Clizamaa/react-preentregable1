import React from 'react'


const ItemListContainer = () => {
   return (
    <div className="grid grid-cols-3">
    {Array(9).fill().map((_, i) => (
      <div key={i} className="p-15 flex flex-wrap items-center justify-center">
        
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-slate-700 rounded-lg max-w-xs shadow-lg">
            <svg className="absolute bottom-0 left-0 mb-16" viewBox="0 0 375 283" fill="none">
              <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="#C0C2C9"/>
              <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#C0C2C9" />
            </svg>
            <div className="relative h-40 pt-10 px-10 flex items-center justify-center">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
              <img className="relative w-40" src={`/shoes-men/shoes${i+1}.png`} alt=""/>
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">Shoes</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
              </div>
            </div>
          </div>
      </div>
    ))}
    </div>
  )
}

export default ItemListContainer