import { useState } from "react";
import "../css/chatbot.css"; // Puedes usar el mismo CSS que ya tienes

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "¡Hola! ¿En qué puedo ayudarte?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [ Hidden, setHidden ] = useState(true)
  
  const sendMessage = () => {
    const text = inputValue.trim();
    if (!text) return;

    // Mensaje del usuario
    addMessage(text, "user");

    // Respuesta del bot después de 500ms
    setTimeout(() => {
      const botReply = getBotResponse(text);
      addMessage(botReply, "bot");
    }, 500);

    setInputValue("");
  };

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("hola")) return "¡Hola! 😊";
    if (msg.includes("hotel")) return "Nuestro hotel está en Izamal, Yucatán.";
    if (msg.includes("precio"))
      return "Las habitaciones empiezan desde $800 MXN.";

    return "No entendí, ¿puedes repetir?";
  };

  const show = Hidden ? '' : 'chat_display'

  return (
    <>

      <button className="btn_bot"onClick={() =>  setHidden(false)}>
        <picture>
          <img src="img/what-is-bot.webp" alt="no-bot" />
        </picture>
      </button>
      
      <div className={`chat-container ${ show }`}>
        <div id="chat-box" className="content_bot">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === "bot" ? "bot-message" : "user-message"}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
      </div>
    </>
  );
}
