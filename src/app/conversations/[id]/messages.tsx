"use client";
import { useEffect } from "react";

interface IMessage {
  Id: string;
  Content: string;
  SenderId: string;
  SenderName: string;
  CreatedDate: string;
}

export default function Messsages({ messages }: { messages: IMessage[] }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="hidden overflow-y-auto border-r-4 border-black bg-white/40 md:block">
      {messages.map((message: IMessage) => (
        <div key={message.Id} className="flex flex-col">
          <div className="font-semibold">{message.SenderName}</div>
          {message.Content && (
            <div
              className="mt-1 text-gray-700"
              dangerouslySetInnerHTML={{ __html: message.Content }}
            />
          )}
          <div className="text-xs text-gray-500">
            {new Date(message.CreatedDate).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
