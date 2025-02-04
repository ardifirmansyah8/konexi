import React from "react";

interface FileDropdownProps {
  onTabSelect: (tab: string) => void;
}

const FileDropdown: React.FC<FileDropdownProps> = ({ onTabSelect }) => {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabSelect(tab)}
          className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FileDropdown;
