// PortfolioCard.js

import React, { useState } from "react";

const PortfolioCard = ({ item }) => {
  const { title, description, imageSrc, link } = item;

  // State to toggle the full description
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden"  style={{ boxShadow: '8px 8px 20px 0px rgba(0, 0, 0, 0.2)'}}>
      <img src={imageSrc} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        {showFullDescription ? (
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-justify">
              {description}{" "}
              <button
                className="text-sky-500 hover:underline cursor-pointer"
                onClick={() => setShowFullDescription(false)}
              >
                <span className="text-sm">View Less</span>
              </button>
            </p>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
              {description.length > 150
                ? `${description.substring(0, 150)}...`
                : description}
              {description.length > 150 && (
                <button
                  className="text-sky-500 hover:underline cursor-pointer ml-1"
                  onClick={() => setShowFullDescription(true)}
                >
                  <span className="text-sm">View More</span>
                </button>
              )}
            </p>
          </div>
        )}
        <div className="my-3">
            <a
            href={link}
            className="text-white hover:underline hover:text-sky-600 text-sm font-semibold px-3 py-2 rounded-xl bg-gray-600"
            >
            View Project
            </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
