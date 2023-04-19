import React, { useState } from "react";

const TagInput = ({
  tags,
  setTags,
  className,
}: {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
}) => {
  const handleKeyDown = (event: {
    key: string;
    currentTarget: { value: string };
  }) => {
    if (event.key === "Enter") {
      const newTag = event.currentTarget.value.trim();
      if (newTag) {
        setTags([...tags, newTag]);
        event.currentTarget.value = "";
      }
    }
  };

  const handleRemoveTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="px-2 py-1 w-fit rounded-md text-blue-900 border border-blue-900  flex items-center  "
        >
          <span className="mr-2">#{tag}</span>
          <button
            onClick={() => handleRemoveTag(index)}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.585L13.293 5.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 011.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      ))}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Add a tag..."
        className={` ${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-3 py-1 focus:outline-none focus:ring-2 `}
      />
    </div>
  );
};

export default TagInput;
