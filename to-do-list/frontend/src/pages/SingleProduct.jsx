import React from 'react'

export default function SingleProduct({ ele }) {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src={ele.image} alt="" className="h-full object-cover" />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-4">
                {ele.title}
            </h1>
            <h4 className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                Category: {ele.category}
            </h4>
            <h4 className="text-sm sm:text-base md:text-lg">
                Price: {ele.price}$
            </h4>
        </div>
    )
}