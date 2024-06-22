"use client";
import React from "react";
import Script from "next/script";

const SuiAssistant = () => {
  return (
    <div className="m-0">
      <flowise-fullchatbot></flowise-fullchatbot>
      <Script
        src="https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        type="module"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Chatbot) {
            window.Chatbot.initFull({
              chatflowid: "e8564835-ffcb-41c6-8f6c-7e585a710702",
              apiHost: "https://flowise-r1c3.onrender.com",
              theme: {
                button: {
                  backgroundColor: "#4da2ff",
                  size: "medium",
                  iconColor: "white",
                  customIconSrc:
                    "https://raw.githubusercontent.com/AsharibAli/project-images/main/SuiAssistant-logo.webp",
                },
                chatWindow: {
                  showTitle: true,
                  title:
                    "Sui Assistant 🤖 - For Sui Blockchain Community & Developers ✨",
                  welcomeMessage:
                    "Welcome to the Sui Assistant! I'm here to assist you with any programming or general questions you have about the Sui, and It's Ecosystem Projects.",
                  backgroundColor: "#ffffff",
                  fontSize: 16,
                  botMessage: {
                    backgroundColor: "#4da2ff",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/main/SuiAssistant-logo.webp",
                  },
                  userMessage: {
                    backgroundColor: "#000000",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/main/usericon.png",
                  },
                  textInput: {
                    placeholder: "Type your question",
                    backgroundColor: "#ffffff",
                    textColor: "#000000",
                    sendButtonColor: "#4da2ff",
                  },
                  feedback: {
                    color: "#4da2ff",
                  },
                  footer: {
                    textColor: "#000000",
                    text: "Build with ❤️ by",
                    company: "Asharib Ali",
                    companyLink: "https://github.com/AsharibAli/",
                  },
                },
              },
            });
          }
        }}
      />
    </div>
  );
};

export default SuiAssistant;
