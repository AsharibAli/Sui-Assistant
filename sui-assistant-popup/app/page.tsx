"use client";
import { useEffect } from "react";

const SuiAssistantPopup = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `import Chatbot from "https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js"
    Chatbot.init({
      chatflowid: "9cd49160-39d1-458f-8989-01d02b9dca2c",
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
          poweredByTextColor: "#000000",
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
          // feedback: {
          //   color: "#4da2ff",
          // },
          // footer: {
          //   textColor: "#000000",
          //   text: "Build with ❤️ by",
          //   company: "Asharib Ali",
          //   companyLink: "https://github.com/AsharibAli/",
          // },
        },
      },
    })`;

    // Append the script to the document
    document.body.appendChild(script);

    // Clean up the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default SuiAssistantPopup;
