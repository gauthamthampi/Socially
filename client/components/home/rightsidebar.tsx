// components/RightSidebar.tsx
import React from "react";

const RightSidebar = () => {
  return (
    <div className="w-1/4 bg-[#1F1F2F] p-4 text-white">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mb-4"
        />
        <h2 className="text-lg font-bold">Jennifer Lisity</h2>
        <span className="text-sm text-green-400">Active Now</span>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Attachments</h3>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <img src="https://via.placeholder.com/50" alt="Attachment" />
          <img src="https://via.placeholder.com/50" alt="Attachment" />
          <img src="https://via.placeholder.com/50" alt="Attachment" />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
