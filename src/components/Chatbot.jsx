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

  // Saludos
  if (msg.includes("hola") || msg.includes("buenos dias") || msg.includes("buenas tardes"))
    return "¡Hola! 😊 Bienvenido al Hotel Los Arcos.";

  // Ubicación y contacto
  if (msg.includes("donde esta") || msg.includes("ubicacion") || msg.includes("direccion"))
    return "Estamos en Izamal, Yucatán, México.";
  if (msg.includes("telefono") || msg.includes("numero de contacto"))
    return "Nuestro teléfono es: +52 999 123 4567.";
  if (msg.includes("correo") || msg.includes("email"))
    return "Nuestro correo es: contacto@hotellosarcos.com";
  if (msg.includes("como llego"))
    return "Puedes llegar fácilmente desde Mérida o Cancún en coche o autobús. Estamos cerca del centro de Izamal.";

  // Precios y pagos
  if (msg.includes("precio") || msg.includes("cuanto cuesta"))
    return "Las habitaciones comienzan desde $400 y 459 MXN por noche dependiendo de la habitacion.";
  if (msg.includes("promocion") || msg.includes("descuento"))
    return "Actualmente puedes consultar nuestras promociones llamando a recepción.";
  if (msg.includes("pago") || msg.includes("tarjeta") || msg.includes("paypal") || msg.includes("transferencia"))
    return "Aceptamos efectivo, tarjeta, transferencia bancaria y PayPal.";

  // Habitaciones
  if (msg.includes("tipos de habitaciones") || msg.includes("habitaciones disponibles"))
    return "Tenemos habitaciones sencillas y dobles";
  if (msg.includes("aire acondicionado"))
    return "Sí, todas nuestras habitaciones tienen aire acondicionado.";
  if (msg.includes("desayuno"))
    return "El desayuno no está incluido, pero contamos con servicio de restaurante cercano.";
  if (msg.includes("cuántas personas") || msg.includes("capacidad"))
    return "Dependiendo del tipo de habitación, pueden alojarse de 1 hasta 6 personas.";
  if (msg.includes("habitaciones familiares"))
    return "Sí, tenemos habitaciones familiares.";
  if (msg.includes("cobran extra por niños") || msg.includes("niños"))
    return "Sí, aplican cargos adicionales por niños mayores de cierta edad.";

  // Servicios
  if (msg.includes("estacionamiento"))
    return "Sí, contamos con estacionamiento gratuito.";
  if (msg.includes("wifi"))
    return "Sí, tenemos Wi-Fi gratuito en todo el hotel.";
  if (msg.includes("alberca"))
    return "Sí, contamos con alberca para nuestros huéspedes.";
  if (msg.includes("restaurante"))
    return "Tenemos servicio de restaurante y opciones cercanas.";
  if (msg.includes("mascotas"))
    return "Lamentablemente no aceptamos mascotas.";

if (msg.includes("cancelar una reservación") || msg.includes("cancelar una reserva") || msg.includes("modificar reserva") || msg.includes("modificar reservación")) {
  return "Puedes cancelar o modificar tu reserva llamando a recepción con tu número de confirmación.";
}

if (msg.includes("anticipación")) {
  return "Recomendamos reservar con al menos una semana de anticipación.";
}

if (msg.includes("confirmación")) {
  return "Recibirás un correo con la confirmación de tu reserva.";
}

if ((msg.includes("reservar") || msg.includes("reservación") || msg.includes("reserva")) && !msg.includes("cancelar") && !msg.includes("modificar")) {
  return "Puedes reservar en línea desde nuestro sitio web o llamando a recepción.";
}
  // Horarios
  if (msg.includes("check-in") || msg.includes("entrada"))
    return "El check-in es a partir de las 3:00 PM.";
  if (msg.includes("check-out") || msg.includes("salida"))
    return "El check-out es hasta las 12:00 PM.";
  if (msg.includes("entrada temprano"))
    return "El check-in temprano está sujeto a disponibilidad.";
  if (msg.includes("salida tarde"))
    return "El late check-out tiene un costo adicional y está sujeto a disponibilidad.";

  // Información general
  if (msg.includes("historia del hotel"))
    return "El Hotel Los Arcos abrió en 2010 y ha crecido para ofrecer comodidad y calidad en Izamal.";
  if (msg.includes("redes sociales"))
    return "Puedes encontrarnos en Facebook e Instagram como Hotel Los Arcos Izamal.";
  if (msg.includes("centro de izamal"))
    return "Sí, estamos muy cerca del centro histórico de Izamal.";

  // Respuesta por defecto
  return "No entendí tu pregunta 😅, ¿puedes repetirla?";
};

  const show = Hidden ? '' : 'chat_display'

  return (
    <>

      <button className="btn_bot" onClick={() =>  setHidden(!Hidden)}>
        <picture>
          <img src="img/what-is-bot.webp" alt="no-bot" />
        </picture>
      </button>
      
      <div className={`chat-container ${ show }`}>
        <button onClick={() =>  setHidden(!Hidden)}>X</button>
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
