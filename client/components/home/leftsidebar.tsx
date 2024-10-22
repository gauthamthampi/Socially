// components/LeftSidebar.tsx
import React from "react";

const LeftSidebar = () => {
  const chats = [
    { name: "Nancy J. Martinez", time: "Just Now", message: "Moved thing.", isActive: true },
    { name: "Helen Pool", time: "08:42 AM", message: "Abundantly be fruitful morning." },
    { name: "Jennifer Lisity", time: "12:38 PM", message: "Said, one let morning them.", selected: true },
    { name: "Marcel Rubio", time: "06:12 AM", message: "Enim frag est meat great." },
  ];

  return (
    <div className="w-1/4 bg-[#1F1F2F] p-4 text-white">
      <input
        type="text"
        placeholder="Search in your Inbox"
        className="w-full p-2 mb-4 rounded bg-[#2B2B3C] placeholder-gray-400"
      />
      <div className="space-y-4">
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`p-3 rounded ${chat.selected ? "bg-pink-500" : "bg-[#2B2B3C]"}`}
          >
            <p className="font-semibold">{chat.name}</p>
            <p className="text-sm text-gray-400">{chat.message}</p>
            <span className="text-xs text-gray-500">{chat.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
