// components/ChatArea.tsx
import React from "react";

const ChatArea = () => {
  const messages = [
    { sender: "user", text: "Said, one let morning them.", time: "12:45 PM" },
    { sender: "friend", text: "Hey Jennifer, are we going on the trip?", time: "09:45 PM" },
    { sender: "user", text: "Yes! I'm really excited!", time: "09:47 PM" },
    { sender: "friend", text: "Did you book the tickets?", time: "09:48 PM" },
    { sender: "user", text: "Flight Tickets.pdf", time: "09:50 PM", isFile: true },
    { sender: "friend", text: "Thanks! We’ll leave early tomorrow.", time: "09:52 PM" },
  ];

  return (
    <div className="flex-1 bg-[#12121D] p-6 overflow-y-auto">
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : ""}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                msg.sender === "user" ? "bg-pink-500 text-white" : "bg-orange-400"
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs text-gray-200">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-6">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-3 rounded-l-lg bg-[#2B2B3C] text-white"
        />
        <button className="p-3 bg-pink-500 rounded-r-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21l16.5-9-16.5-9v18z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
