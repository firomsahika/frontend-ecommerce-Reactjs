import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing the send icon
import { BsChatDots } from "react-icons/bs"; // Importing a chat icon for the toggle button
import api from "@/api";

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [responses, setResponses] = useState([]);
  // const url = "https://shoppit-jqdk.onrender.com"
  const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the chat window

  const sendMessage = async () => {
    try {
      const res = await api.post("/api/chatbot/", { query: userInput, slug: "your-product-slug" });
      setResponses([...responses, { user: userInput, bot: res.data.response }]);
      setUserInput('');
    } catch (error) {
      console.error("Error sending message:", error);
      setResponses([...responses, { user: userInput, bot: "There was an error. Please try again later." }]);
    }
  };
  


  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-3 bg-green-400 rounded-full text-white shadow-lg hover:bg-blue-700 transition duration-200"
      >
        <BsChatDots size={24}  />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-2 w-90 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-80 overflow-y-auto border border-gray-300 rounded-lg p-5">
            {responses.map((resp, index) => (
                <div key={index}>
                <p>User: {resp.user}</p>
                <p>Bot: {resp.bot}</p>
            </div>
            ))}
          </div>
          <div className="flex p-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="bg-yellow-400 text-black p-2 rounded-r-lg flex items-center  transition duration-200"
            >
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
