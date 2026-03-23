import React, { useState } from "react";

function ImageGrid({ title, images }) {
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? images : images.slice(0, 5);

  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-6 text-amber-200">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={title}
            className="w-full h-40 rounded-lg hover:scale-105 transition duration-300 object-cover cursor-pointer"
          />
        ))}
      </div>

      {images.length >= 5 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-amber-300 text-amber-900 rounded-lg hover:bg-blue-200 transition"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageGrid;