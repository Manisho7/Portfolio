// Chatbot UI with File Upload and Interaction Tracking

import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [file, setFile] = useState(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    trackInteraction('Chatbot toggled ' + (isOpen ? 'off' : 'on'));
  };

  const handleSend = async () => {
    if (!userInput.trim() && !file) return;

    const newMessages = [...messages];

    if (userInput.trim()) {
      newMessages.push({ role: 'user', content: userInput });
    }

    setMessages(newMessages);

    if (file) {
      await uploadFile(file);
      setFile(null);
    }

    if (userInput.trim()) {
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userInput, context: newMessages }),
        });

        const data = await response.json();
        setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: data.response }]);
        trackInteraction('Message sent');
      } catch (error) {
        console.error("Error communicating with chatbot:", error);
        setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: "I'm sorry, something went wrong." }]);
      }
    }

    setUserInput("");
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      trackInteraction('File selected: ' + e.target.files[0].name);
    }
  };

  const uploadFile = async (fileToUpload) => {
    const formData = new FormData();
    formData.append("file", fileToUpload);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.text();
        setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: result }]);
      } else {
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  const trackInteraction = async (interaction) => {
    try {
      await fetch("/api/track-interaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ interaction }),
      });
    } catch (error) {
      console.error("Error logging interaction:", error);
    }
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-icon ${isOpen ? 'hidden' : ''}`} onClick={toggleChatbot}>💬</div>
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h4>Chat with Me</h4>
            <button onClick={toggleChatbot}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.role === 'user' ? 'user' : 'assistant'}`}>{msg.content}</div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
            />
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
