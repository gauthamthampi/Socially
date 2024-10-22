// pages/home.tsx
'use client';
import LeftSidebar from "@/components/home/leftsidebar";
import ChatArea from "@/components/home/chatArea";
import RightSidebar from "@/components/home/rightsidebar";

const ChatPage = () => {
  return (
    <div className="min-h-screen flex">
      <LeftSidebar />
      <ChatArea />
      <RightSidebar />
    </div>
  );
};

export default ChatPage;
