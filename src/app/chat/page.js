"use client";
import { useState, useRef, useEffect } from "react";
import Loader from "./component/loader";
export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const shouldFetchRef = useRef(false);
  const chatRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    // Mark that fetch should happen
    shouldFetchRef.current = true;

    setMessages((prev) => [
      ...prev,
      { role: "user", parts: [{ text: input }] },
    ]);

    setInput("");
  };

  useEffect(() => {
    if (!shouldFetchRef.current || messages.length === 0) return;

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== "user") return;

    const apiKey = "AIzaSyCysboseeTzjvMGXVVeKTMg2-yh3WmNV3A"; // Replace with your actual key

    fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: messages,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        return response.json();
      })
      .then((data) => {
        const modelText =
          data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

        setMessages((prev) => [
          ...prev,
          {
            role: "model",
            parts: [{ text: modelText }],
          },
        ]);

        shouldFetchRef.current = false; // ✅ Prevent loop
      })
      .catch((error) => {
        console.error("Error calling Gemini API:", error);
        shouldFetchRef.current = false;
      });
  }, [messages]);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  console.log(messages);
  return (
    <div className="w-full max-w-2xl mx-auto p-4 h-[90vh] flex flex-col bg-gray-100 rounded-2xl shadow-xl">
      {/* Header */}
      <div className="text-2xl font-semibold text-center py-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4">
        🤖 AI ChatBot
      </div>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-white rounded-xl shadow-inner">
        {isLoading && (
          <div className={`flex justify-start`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm bg-gray-200 text-gray-800 rounded-bl-none
                }`}
            >
              <Loader />
            </div>
          </div>
        )}
        {messages
          .filter((msg) => {
            if (!msg.parts[0].text.length) return false; // exclude empty text
            if (msg.role === "system") return false; // exclude system messages
            return true;
          })
          .map((msg, index) => {
            const isUser = msg.role === "user";

            return (
              <div
                key={index}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    isUser
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.parts.map((part, idx) => (
                    <p key={idx} className="whitespace-pre-wrap">
                      {part.text}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}

        <div ref={chatRef} />
      </div>

      {/* Input */}
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={input.length < 1 && isDisabled}
          className={`${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium`}
        >
          Send
        </button>
      </div>
    </div>
  );
}
