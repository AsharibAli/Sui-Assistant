"use client";
import React, { useEffect } from "react";

const Celestia = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (
      !document.querySelector(
        'script[src="https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js";
      script.type = "module";
      script.async = true;
      script.onload = () => {
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
                  "https://raw.githubusercontent.com/AsharibAli/project-images/main/SuiGPT-logo.webp",
              },
              chatWindow: {
                showTitle: true,
                title:
                  "SuiGPT 🤖 - Help Developers to Build on Sui 👨‍💻 - For Sui Ecosystem ✨",
                welcomeMessage:
                  "Welcome to the SuiGPT! I'm here to assist you with any questions you have about the Sui, and It's Ecosystem Projects.",
                backgroundColor: "#ffffff",
                fontSize: 16,
                poweredByTextColor: "#000000",
                botMessage: {
                  backgroundColor: "#4da2ff",
                  textColor: "#ffffff",
                  showAvatar: true,
                  avatarSrc:
                    "https://raw.githubusercontent.com/AsharibAli/project-images/main/SuiGPT-logo.webp",
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
              },
            },
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="m-0">
      <flowise-fullchatbot></flowise-fullchatbot>
    </div>
  );
};

export default Celestia;
